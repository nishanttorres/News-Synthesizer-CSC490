import json
import os

cur_path = os.path.dirname(__file__)

new_path = os.path.join(cur_path, '../perigon/sample.json')
date = "03-23-2023"
host = "Eddie Murdoch"
pause = "<break time='2s' />"


def process_text(summaries):
    with open(new_path, 'r') as openfile:
        json_object = json.load(openfile)

    f = open("script.txt", "w")

    # Introduction
    f.write(f"<speak> Welcome to News Synthesizer, your daily dose of news and current affairs. I am your host, {host}, and today is <say-as interpret-as='date'>{date}</say-as>.")
    f.write(pause)

    # Body
    for x in json_object:
        filename = x["title"] + '.txt'
        with open(filename, 'w') as f:
            f.write(x["summary"])
    # Outro
    f.write(pause)
    f.write("That's all for today's episode of News Synthesizer. We hope you found our coverage informative and useful. Tune in tomorrow for more news from around the world. Thank you for listening.")
    f.write("</speak>")
    f.close()