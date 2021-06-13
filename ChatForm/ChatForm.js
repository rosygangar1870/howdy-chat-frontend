import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ChatForm.scss';
import {faSmile, faPaperclip, faMicrophone} from '@fortawesome/free-solid-svg-icons';
const ChatForm = () => {

    return (
        <div className="chat-form">
            <div className="action-btn">
            <FontAwesomeIcon className="icon-block" icon={faSmile}/>
            <FontAwesomeIcon className="icon-block" icon={faPaperclip} />
            </div>
            <input className="chat-input" placeholder="message"/>
            <FontAwesomeIcon className="icon-block" icon = {faMicrophone} />
        </div>
    )
}
export default ChatForm;