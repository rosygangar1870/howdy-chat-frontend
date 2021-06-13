import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import './ChatHeader.scss';
const ChatHeader = () => {
    return (
        <div className="chat-header">
            <div className="img-container">
            <img alt="image" src="https://stickershop.line-scdn.net/stickershop/v1/product/718/LINEStorePC/main.png;compress=true"/>

            </div>
            <div className="card-detail">
                <h4 className="title">USER 1</h4>
                <p className="desc">Online </p>
            </div>
            <div className="action-items">
                <FontAwesomeIcon icon={faEllipsisV} />
            </div>
        </div>
    )
}
export default ChatHeader;