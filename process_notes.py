import spacy
import requests
import json
import requests
nlp = spacy.load("en_core_web_lg")
def classify_note(note,courseId,userId,nlp):
    url = "https://us-central1-edugraph-78964.cloudfunctions.net/app/user/allCourses/R8IpJr6shgUowKN0jWDQrE5ycCE2"

    payload = {}
    headers= {}

    response = requests.request("GET", url, headers=headers, data = payload)

    course_deets = response.json()
    cur_doc = nlp(note)
    similarity_scores = [] 
    for topic in course_deets[courseId]['topics'].keys():
        temp_doc = nlp(course_deets[courseId]['topics'][topic]['summary'])
        similarity_scores.append((topic,cur_doc.similarity(temp_doc)))
    similarity_scores = sorted(similarity_scores,key=lambda x: x[1],reverse = True)
    similarity_scores = similarity_scores[:3]
    body ={
        "userId":userId,
        "courseId":courseId,
        "topics":[similarity_scores[0][0],similarity_scores[1][0],similarity_scores[2][0]],
        "notes":"Computer Organization and Architecture is the study of internal working, structuring and implementation of a computer system. Architecture in computer system, same as anywhere else, refers to the externally visual attributes of the system."
    }
    body = json.dumps(body)
    url = "https://us-central1-edugraph-78964.cloudfunctions.net/app/user/uploadNotes"

    payload = body
    headers = {
      'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data = payload)

    
    return response.text.encode('utf8')