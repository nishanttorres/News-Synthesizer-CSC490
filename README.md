# CSC490 Senior Capstone.

**Group name**: *P Sout*

 
**Group Members**: Kevin Du, Juan Luna, Matthew Mitchell, Nicholas Ray, Rigoberto Villalpando Razo, & Nishant Sharma

# Our Project
Our project _News Synthesizer_ will deliver a daily personalized audio news briefing for our users.

# Resources used
We are using [ChatGPT](https://openai.com/api/), [Mimic3](https://mycroft-ai.gitbook.io/docs/mycroft-technologies/mimic-tts/mimic-3), and [Perigon]( https://docs.goperigon.com/docs)

# Final Product
Download and install necessary dependencies according to the user manual. Launch app.py which is located in the Sample directory.

## User Manual.

### Dependencies necessary for front-end:
In terminal:
`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`

### Installing node.js
In terminal:
`nvm install 18.14.2` (or version of your choice)

Once complete you can change your working directory to `news-sythesizer-jsx`
download the necessary dependencies by typing:

`npm install`

It should automatically download all the dependecies. 
If you want to download them separately you can use the following commands:

`npm install react-router-dom localforage match-sorter sort-by` <br />
`npm install --save react-multi-date-picker` <br />
`npm i --save react-select`<br /> 
`npm install react-select-country-list --save`<br />
<br />

After you are done, you can start the front-end by:

`npm start`

### Installing MIMIC 3 from source
Clone the repository:
`git clone https://github.com/mycroftAI/mimic3.git`

Run the install script:
`cd mimic3/` <br>
`./install.sh`

A virtual environment will be created in `mimic3/.venv` and the `mycroft-mimic3-tts` Python module will be installed in editiable mode (`pip install -e`).

Once installed, the following commands will be available in `.venv/bin`:
- `mimic3`
- `mimic3-server`
- `mimic3-dowwnload`

### User manual in the app
![image](https://user-images.githubusercontent.com/97568870/234950139-e9b7eadf-aa25-4b25-801a-10c89e677538.png)
