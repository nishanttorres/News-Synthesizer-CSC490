import '../../css-styling/infoBut.css'
import { ReactComponent as Home } from '../../component/buttons-svg/home-black.svg';



const InfoButton = ({ changeToHome }) => {
    return (
        <div className="info_home">
            <button
                type='button'
                className='backToHome'
                onClick={changeToHome}>
                <Home />
            </button>
            <div className='info-page'>
                <h1 className='header-info'>User Manual</h1>
                <p>
                    <b> Choose Dates:</b> Dates of the news that you want to listen to.
                    <br />
                    <b>Choose Locations:</b> Select the origin of the news that you want to listen to.
                    <br />
                    <b>Choose Categories:</b> Select the news category that you want to listen to.
                    <br />
                    <b>Choose Audio Length:</b> Select the length of the audio that you want to listen to.
                    <br />
                    <b>Generate:</b> This button starts the process of curating an audio podcast that matches the selections the you just made.
                </p>
            </div>

        </div>
    );

}
export default InfoButton