ChatGPT- https://openai.com/api/

example API request for summarizing w/ JSON
{
  "model": "text-davinci-003",
  "prompt": " **Raw news article goes here**\n\nTl;dr",
  "temperature": 0.7,
  "max_tokens": 64,
  "top_p": 1.0,
  "frequency_penalty": 0.0,
  "presence_penalty": 1
}

**Can replace tl;dr (too long didn't read) with something like "summarize this in x words or less"

**temperature refers to randomness - where 0 is very logical/factual and 1 is inconsistent (story/idea generation)

**top_p computes the cumulative probability distribution, and cut off as soon as that distribution exceeds the value of top_p. A top_p of 0.5 is where only the tokens comprising of the top 50% probability mass are considered.

**The default setting for response length is 64, which means that GPT-3 will add 64 tokens to the text, with a token being defined as a word or a punctuation mark. A simple trick that you can use is to set the length to a value larger than what you need, and then just discard the incomplete part at the end. We will see later how to teach GPT-3 to stop at the right place.

**think of Frequency Penalty as a way to prevent word repetitions, and Presence Penalty as a way to prevent topic repetitions. (probably want these on the lower end for our purposes)

Festival- https://www.cstr.ed.ac.uk/projects/festival/manual/festival_toc.html


Perigon- https://docs.goperigon.com/docs


C++ GUI- https://youtu.be/vWXrFetSH8w?t=507
