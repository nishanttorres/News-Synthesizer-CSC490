import os


def synthesize_speech():
    f = open("./script.txt", "r")
    print(f.read())
    cmd_str = "cat script.txt | mimic3 --ssml > ./news-synthesizer-jsx/src/songs-logo/news.wav"
    os.system(cmd_str)
