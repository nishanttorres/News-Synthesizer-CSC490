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
                <h1 className='header-info'>This page is reserved for user manual info</h1>
            </div>

        </div>
    );

}
export default InfoButton