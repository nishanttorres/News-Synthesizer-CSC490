import './css-styling/loading.css'
import { ReactComponent as Home } from './component/buttons-svg/home.svg'

const Loading = ({ changeToHome, changeToAudio }) => {

    return (
        <dir>
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
        </dir >
    );
}
export default Loading;
