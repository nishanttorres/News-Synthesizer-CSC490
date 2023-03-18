from flask import Flask, request
from flask_cors import CORS
import json
import requests

app = Flask(__name__)
CORS(app)

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

    API_KEY = "5d2a84b1-3580-4fc4-aee2-7d4e83e37f3c"
    url = f"https://api.goperigon.com/v1/all?apiKey={API_KEY}&sortBy=date{s}"

    resp = requests.get(url)
    articles = resp.json()["articles"]
    
    with open("articles.json", "w") as outfile:
        json.dump(articles, outfile, indent=4)

    return "done"

if __name__ == "__main__":
    app.run(debug=True) 