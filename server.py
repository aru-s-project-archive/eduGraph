import os
from flask import Flask, request
import pandas as pd
import spacy
import json
#import en_core_web_lg


nlp = spacy.load("en_core_web_lg")



def similarity(title):
    print(title)
    max = 0
    keywords =["algorithms", "time complexity", "data structures"]
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
        r = {'relevant': str(similarity(title) > 0.6)}
        r = json.dumps(r)
        loaded_r = json.loads(r)
        return loaded_r
#str(similarity(title) > 0.6)
app.run(debug=True)
