import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import './Login.scss';
const Login = () => {
    return (
        <div className ="login-container">
            <div className = "logo">
                <img src ="https://i.pinimg.com/originals/f7/5d/94/f75d94874d855a7fcfcc922d89ac5e80.png"/>
            </div>
            <div className="login-form">
                <form>
                    <div className="profile-img">
                        <input className="file-upload" type="file"/>
                        <FontAwesomeIcon className="icon-block" icon={faUser} />
                    </div>
                    <div className="profile-name">
                        <FontAwesomeIcon className="icon-block" icon={faUser}/>
                        <input placeholder="Your name here" type="text" name="name"/>
                    </div>
                    <input type="submit" className="profile-submit-btn" value="join now"/>
                </form>
            </div>
        </div>
    )
}

export default Login;