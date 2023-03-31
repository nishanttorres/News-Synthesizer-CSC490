import DatePicker, { DateObject } from "react-multi-date-picker"
import { useState, useMemo, useEffect } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import './css-styling/home.css'
import APIService from "./component/APIService";
import { ReactComponent as Info } from './component/buttons-svg/info.svg';

const Home = ({ changePage, changeToInfo }) => {
    //summarize article
    const summarize = () => {
        APIService.summarize()
            .catch(error => console.log('error', error))
    }

    //sending dates, location, category and audioLength to flask
    const insertFilters = () => {
        APIService.insertFilters(dateValue, locationValue, categoryValue, audioLength)
            .then(() => summarize())
            .catch(error => console.log('error', error))
    }

    const [dateValue, dateSetValue] = useState([new DateObject()]);
    const [locationValue, locationSetValue] = useState('');
    const [categoryValue, categorySetValue] = useState('POLITICS');
    const [audioLength, audioSetLength] = useState(5);

    const options = useMemo(() => countryList().getData(), [])
    const audioLenOption = require('./data-s/length.json')
    const cat = require('./data-s/news_category.json')

    const config = () => {
        changePage();
        insertFilters();
    }

    return (
        <div className="home">

            <div className="news_preferences">
                <h1>News Synthesizer</h1>

                <label htmlFor="date">Choose dates: <br /></label>
                <DatePicker
                    className="date"
                    range
                    rangeHover
                    value={dateValue}
                    onChange={dateSetValue}
                />
                <br />
                <br />
                <label htmlFor="select_loc">Select locations <br /></label>
                <Select
                    className="select_loc"
                    isMulti
                    options={options}
                    onChange={locationSetValue}
                    placeholder='Choose news location' />


                <br />
                <label htmlFor="select_cat">Select categories <br /></label>
                <Select
                    className="select_cat"
                    isMulti
                    options={cat}
                    onChange={categorySetValue}
                    placeholder='Choose news categories' />

                <br />
                <label htmlFor="select_len">Select audio length<br /></label>
                <Select
                    className="select_len"
                    options={audioLenOption}
                    onChange={audioSetLength}
                    placeholder='audio length in mins' />
                <br />
                <div className="buttons">
                    <button
                        className="generate_button"
                        onClick={config}
                        title="Generate the audio"
                    >Generate</button>
                    <button
                        className="change_2_info"
                        onClick={changeToInfo}
                        title="Get info about this application"
                    >
                        <Info
                            className="logo"
                        />
                        Info
                    </button>
                </div>

            </div>

        </div >
    );
}
export default Home;
