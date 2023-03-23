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


# type:String
# format:date
dateFrom = "2023-02-01"
dataTo = "2023-03-15"
# type:String
topic = "Joe Biden"
# type:String
# Category:Politics, Tech, Sports, Business, Finance, Entertainment, Health ,Weather, Lifestyle, Auto,
# Science, Travel, Environment
category = "Politics"
url: str = f"https://api.goperigon.com/v1/all?apiKey={API_KEY}&category={category}&topic={topic}&from={dateFrom}&to={dataTo}"

resp = requests.get(url)
articles = resp.json()["articles"]

with open("sample.json", "w") as outfile:
    json.dump(articles[0]["url"], outfile, indent=4)


def fetch_articles(topics, num_articles):
    perigon_url = "https://api.perigon.com/articles"
    headers = {"Authorization": f"Bearer {PERIGON_API_KEY}"}
    params = {"topic": topics, "count": num_articles}
    response = requests.get(perigon_url, headers=headers, params=params)
    return response.json()["articles"]
