import json
import requests
from flask import Flask, request
from flask_cors import CORS
from summarizer import summarize_article
from text_processor import process_text
from mimic3 import synthesize_speech

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return"IM ALIVE"

@app.route("/getArticles", methods=["POST"], strict_slashes=False)
def add_filters():
    
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

    API_KEY = "5d2a84b1-3580-4fc4-aee2-7d4e83e37f3c"
    url = f"https://api.goperigon.com/v1/all?apiKey={API_KEY}&sortBy=date{s}"

    resp = requests.get(url)
    articles = resp.json()["articles"]
    
    with open("articles.json", "w") as outfile:
        json.dump(articles, outfile, indent=4)
    
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