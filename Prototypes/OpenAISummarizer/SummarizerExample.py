import json
import os
import openai

openai.organization = "org-xAHkplFgCtQM9l5RYdUaOiOa"
openai.api_key = "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"
cur_path = os.path.dirname(__file__)
new_path = os.path.join(cur_path, '../perigon/sample.json')

with open(new_path, 'r') as openfile:
    url = json.load(openfile)

length = "100"

promptEdit = f"Summarize this in {length} words: {url}"
completion = openai.Completion.create(engine="text-davinci-003", max_tokens=1000, prompt=promptEdit)
print(completion.choices[0].text)
