import json
import requests
from flask import Flask, request
from flask_cors import CORS
from summarizer import summarize_article
from text_processor import process_text
from mimic3 import synthesize_speech
from perigon import fetch_articles

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return"IM ALIVE"

@app.route("/getArticles", methods=["POST"], strict_slashes=False)
def getArticles():
    
    data = request.json
    s = ""

    if data['location'] != "":
        for x in data['location']:
            s += x['value']

    if data['category'] != "":
        for x in data['category']:
            s += x['value']

    date = data['date']
    if len(date.split(",")) == 2:
       list = date.split(",")
       s += "&from=" + list[0].replace("/", "-")
       s += "&to=" + list[1].replace("/", "-")
    else:
        s += "&to=" + date.replace("/", "-")

    fetch_articles(s)
    
    return "Success"

@app.route("/summarize")
def summarize():
    with open("articles.json", "r") as file:
        articles = json.load(file)

    summary = summarize_article(articles[0])

    with open("summary.txt", "w") as outfile:
        outfile.write(summary)

    return "Success"

@app.route("/process")
def process():
        process_text()
        synthesize_speech()

        return "Success"


if __name__ == "__main__":
    app.run(debug=True) 