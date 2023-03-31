import '../../css-styling/infoBut.css'
import { ReactComponent as Home } from '../../component/buttons-svg/home.svg';
const InfoButton = ({ changeToHome }) => {
    return (
        <div className="info_home">
            <h1>This is reserved for user manual info</h1>
            <button
                type='button'
                className='backToHome'
                onClick={changeToHome}>
                <Home />

                Back To Home
            </button>
        </div>
    );

}
export default InfoButton