import requests
import json

API_KEY = "b1753e0d-8ae2-4e74-bee4-6ab520697501"

def fetch_articles(topics):
    url = f"https://api.goperigon.com/v1/all?apiKey={API_KEY}&sortBy=date{topics}"

    resp = requests.get(url)
    articles = resp.json()["articles"]
    
    with open("articles.json", "w") as outfile:
        json.dump(articles, outfile, indent=4)
