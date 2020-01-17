import textract
import re
import os

print(os.listdir('notes'))

for course in os.listdir('notes')[1:]:
    allTextList = []
    for f in sorted(os.listdir('notes/'+course)):
        text = textract.process('notes/cz2005/'+f, encoding='ascii', method='pdfminer')
        text= re.sub(r'\\x[\S][\S]',' ',str(text))
        text= re.sub(r'\\n',' ',text)
        allTextList.append(text)
    allText = ' '.join(allTextList)
    courseFile = open(course+'Questions.txt','w+')
    courseFile.write(allText)   