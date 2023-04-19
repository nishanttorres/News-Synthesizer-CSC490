import { ReactComponent as Home } from './component/buttons-svg/home-black.svg'
import './css-styling/loading.css'
import APIService from "./component/APIService";

const Loading = ({ changeToHome }) => {
    return (
        <div>
            <div className='load'>
                <button
                    className='button_loading_home'
                    onClick={changeToHome}>
                    <Home />

                </button>
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