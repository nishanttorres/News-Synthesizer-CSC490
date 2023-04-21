import DatePicker, { DateObject } from "react-multi-date-picker"
import { useState, useEffect } from 'react';
import Select from 'react-select'
import './css-styling/home.css'
import APIService from "./component/APIService";
import { ReactComponent as Info } from './component/buttons-svg/info.svg';
import InfoButton from "./component/info-button/infoBut";
import Loading from "./loading";

const Home = ({ changePage, changeToInfo, changeToAudio, changeToHome }) => {
    const [requestStatus, setRequestStatus] = useState("idle");
    const [dateValue, dateSetValue] = useState([new DateObject()]);
    const formattedDate = dateValue.toLocaleString();
    const [locationValue, locationSetValue] = useState('');
    const [categoryValue, categorySetValue] = useState('');
    const [audioLength, audioSetLength] = useState(5);

    const options = require('./data-s/countries.json')
    const audioLenOption = require('./data-s/length.json')
    const cat = require('./data-s/news_category.json')

    //get articles, summarize article, and create audio file
    async function getAudio() {
        return new Promise(async (resolve, reject) => {
            try {
                const filters = await APIService.insertFilters(
                    formattedDate,
                    locationValue,
                    categoryValue,
                    audioLength
                );
                const summary = await APIService.summarize();
                const audio = await APIService.process();

                console.log("Audio File Retrieved:", audio);
                resolve(audio);
            } catch (error) {
                reject(error);
            }
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setRequestStatus("pending"); // set status to "pending" when the form is submitted

        // Actual code if audio is ready
        try {
            const response = await getAudio();

            if (response.ok) {
                setRequestStatus("succeeded");

                changeToAudio();
            } else {
                setRequestStatus("failed"); // set status to "failed" if response is not OK
            }
        } catch (error) {
            setRequestStatus("failed"); // set status to "failed" if there is an error
        }
    };

    const renderContent = () => {
        switch (requestStatus) {
            case "pending":
                return <Loading changeToHome={changeToHome} />;
            case "succeeded":
                return changeToAudio(); // replace with the actual response page
            case "failed":
                return <div className="request_failed">
                    Request failed
                    <br />
                    Refresh the page
                </div>; // replace with appropriate error message
            default:
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
                                    onClick={handleSubmit}
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

                                </button>
                            </div>

                        </div>

                    </div >
                );

        }
    }
    return renderContent();
}
export default Home;