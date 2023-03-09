import requests
import json

API_KEY = "b5845d55-07ec-4841-ab86-f26ca830aebe"
url = f"https://api.goperigon.com/v1/all?apiKey={API_KEY}"

resp = requests.get(url)
# request with some filters
# resp = requests.get(f"{url}&sourceGroup=top100&showNumResults=true&showReprints=false&excludeLabel=Non-news&excludeLabel=Opinion&excludeLabel=Paid News&excludeLabel=Roundup&excludeLabel=Press Release&sortBy=date&q=inflation AND prices&size=5")

articles = resp.json()["articles"]

with open("sample.json", "w") as outfile:
    json.dump(articles, outfile, indent=4)

for x in articles:
    print("-------------------------")
    print(x["title"])
    print("\nArticle Content:")
    print(x["content"])
    print("-------------------------")
