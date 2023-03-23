import os
import requests
import openai
from text_processor import process_text
from mimic3 import synthesize_speech

#process_text() from text_processor.py module
#synthesize_speech() from mimic3.py module

# Set up your API keys
PERIGON_API_KEY = os.environ["PERIGON_API_KEY"]
OPENAI_API_KEY = os.environ["OPENAI_API_KEY"]

# Configure OpenAI API
openai.api_key = OPENAI_API_KEY

def fetch_articles(topic, num_articles=5):
    perigon_url = "https://api.perigon.com/articles"
    headers = {"Authorization": f"Bearer {PERIGON_API_KEY}"}
    params = {"topic": topic, "count": num_articles}
    response = requests.get(perigon_url, headers=headers, params=params)
    return response.json()["articles"]

def summarize_article(article):
    prompt = f"Please provide a brief summary of the following article:\n\nTitle: {article['title']}\n\nContent: {article['content']}\n\n"
    response = openai.Completion.create(engine="davinci-codex", prompt=prompt, max_tokens=100)
    return response.choices[0].text.strip()

def main():
    # Get user input
    topic = input("Enter a topic: ")
    duration = int(input("Enter duration (in minutes, multiples of 5): "))

    # Fetch articles
    articles = fetch_articles(topic)
    
    # Summarize articles
    summaries = [summarize_article(article) for article in articles]
    
    # Process text and create SSML formatted text file
    ssml_text = process_text(summaries)
    with open("ssml_output.txt", "w") as f:
        f.write(ssml_text)
    
    # Synthesize speech using Mimic3
    output_filename = f"output_{duration}m.wav"
    synthesize_speech("ssml_output.txt", output_filename, duration)

if __name__ == "__main__":
    main()
