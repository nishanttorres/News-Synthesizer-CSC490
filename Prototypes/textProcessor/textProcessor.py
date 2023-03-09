import json
import os

cur_path = os.path.dirname(__file__)

new_path = os.path.join(cur_path, '../perigon/sample.json')

with open(new_path, 'r') as openfile:
    json_object = json.load(openfile)

for x in json_object:
    filename = x["title"] + '.txt'
    with open(filename, 'w') as f:
        f.write(x["summary"])
