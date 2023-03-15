import requests
import json

API_KEY = "b5845d55-07ec-4841-ab86-f26ca830aebe"
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

