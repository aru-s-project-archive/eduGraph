# import pandas as pd
# df = pd.read_csv("data.csv")
# # df = df.transpose()
# print(df['systems'])
import csv
from tqdm import tqdm
import spacy
nlp = spacy.load("en_core_web_lg")

# # for topic in list(topic_summary_dict.keys()):
# #     print(topic_summary_dict[topic])
topic_summary_dict = {}

with open('data.csv',errors='ignore') as c:
    reader = csv.DictReader(c)
    for row in reader:
        topic_summary_dict[row['topic']] =row['summary']

topics = list(topic_summary_dict.keys())

topic_topic_weights = {}

for key,value in tqdm(topic_summary_dict.items()):
    topic_topic_weights[key] = []
    curr_doc = nlp(value)
    for topic in topics:
        temp_doc = nlp(topic_summary_dict[topic])
        topic_topic_weights[key].append((topic,curr_doc.similarity(temp_doc)))
    topic_topic_weights[key] = sorted(topic_topic_weights[key], key= lambda x:x[1],reverse= True)
    topic_topic_weights[key] = topic_topic_weights[key][:10]
print(topic_topic_weights)