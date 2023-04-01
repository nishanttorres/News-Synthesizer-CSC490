import json
import os

# cur_path = os.path.dirname(__file__)

# new_path = os.path.join(cur_path, '../perigon/sample.json')
date = "03-23-2023"
host = "Eddie Murdoch"
pause = "<break time='2s' />"


def process_text():
    f = open("./script.txt", "w")

    # Introduction
    f.write(f"<speak> Welcome to News Synthesizer, your daily dose of news and current affairs. I am your host, {host}, and today is <say-as interpret-as='date'>{date}</say-as>.")
    f.write(pause)

    # Body
    with open('./summary.txt', 'r') as body:
        contents = body.read()
        f.write(contents)


    # Outro
    f.write(pause)
    f.write("\nThat's all for today's episode of News Synthesizer. We hope you found our coverage informative and useful. Tune in tomorrow for more news from around the world. Thank you for listening.")
    f.write("</speak>")
    f.close()