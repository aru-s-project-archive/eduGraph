import os
from flask import Flask, request
import pandas as pd
import spacy
import json
#import en_core_web_lg

import requests

url = "https://us-central1-edugraph-78964.cloudfunctions.net/app/attention/R8IpJr6shgUowKN0jWDQrE5ycCE2"

payload = {}
headers= {}

response = requests.request("GET", url, headers=headers, data = payload)

keywords = eval(response.text.encode('utf8'))

nlp = spacy.load("en_core_web_lg")



def similarity(title):
    print(title)
    max = 0
    for keyword in keywords:
        if keyword.lower() in title.lower():
            return 1
    title = nlp(title)
    for keyword in keywords:
        score = title.similarity(nlp(keyword))
        print(score)
        if(max<score):
            max = score
    return max


app = Flask(__name__)

from flask_cors import CORS
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/run/', methods = ['POST'])
def handle():
    if request.method == "POST":
        os.system('python3 howProductive.py')
        return 'success!'
		
@app.route('/data/', methods = ['GET'])
def getter():
    title = request.args.get('title')
    if request.method == "GET":
        r = {'relevant': str(similarity(title) > 0.7)}
        r = json.dumps(r)
        loaded_r = json.loads(r)
        return loaded_r
#str(similarity(title) > 0.6)
if __name__ == '__main__':
    app.run()
