import os
import requests
import subprocess
import json
import openai
from flask import request
from text_processor import process_text
from mimic3 import synthesize_speech
from summarizer import summarize_article
from perigon import fetch_articles

# # Set up your API keys
# PERIGON_API_KEY = os.environ["PERIGON_API_KEY"]
# OPENAI_API_KEY = os.environ["OPENAI_API_KEY"]

# # Configure OpenAI API
# openai.api_key = OPENAI_API_KEY


def main():
    react_dir = "./news-synthesizer-jsx"
    subprocess.Popen(["npm", "start"], cwd=react_dir)
    
    with open("./flask/server.py") as f:
        exec(f.read())

    
    # # Get user input
    # date = input("Enter the date: ")
    # topic = input("Enter a topic: ")
    # duration = int(input("Enter duration (in minutes, multiples of 5): "))

    # # Fetch articles
    # articles = fetch_articles(topic)

    # # Summarize articles
    # summaries = [summarize_article(article) for article in articles]

    # # Process text and create SSML formatted text file
    # ssml_text = process_text(summaries)
    # with open("ssml_output.txt", "w") as f:
    #     f.write(ssml_text)

    # # Synthesize speech using Mimic3
    # output_filename = f"output_{date}.wav"
    # synthesize_speech("ssml_output.txt", output_filename)


if __name__ == "__main__":
    main()
