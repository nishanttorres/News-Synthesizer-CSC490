import requests

API_KEY = ""
url = f"https://api.goperigon.com/v1/all?apiKey={API_KEY}"

resp = requests.get(url)
# request with some filters
# resp = requests.get(f"{url}&sourceGroup=top100&showNumResults=true&showReprints=false&excludeLabel=Non-news&excludeLabel=Opinion&excludeLabel=Paid News&excludeLabel=Roundup&excludeLabel=Press Release&sortBy=date&q=inflation AND prices&size=5")

articles = resp.json()["articles"]

for x in articles:
    print("-------------------------")
    print(x["title"])
    print("\nArticle Content:")
    print(x["content"])
    print("-------------------------")
