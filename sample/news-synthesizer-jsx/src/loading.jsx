import { ReactComponent as Home } from './component/buttons-svg/home.svg'
import './css-styling/loading.css'
import APIService from "./component/APIService";

const Loading = ({ changeToHome, changeToAudio }) => {

    //summarize article
    const summarize = () => {
        APIService.summarize()
            .catch(error => console.log('error', error))
    }

    summarize();

    return (
        <div>
            <div className='load'>
                <button
                    className='button_loading_home'
                    onClick={changeToHome}>
                    <Home />
                    Home
                </button>
                <button
                    onClick={changeToAudio}
                >Ready</button>
                <div className="center-body">
                    <div className="loader-ball-2">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Loading;