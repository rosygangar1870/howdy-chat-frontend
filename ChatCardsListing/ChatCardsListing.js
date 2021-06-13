import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './ChatCardsListing.scss';
const ChatCardsListing = () => {
    return (
        <div className="chat-cards-listing">
            <div className="card">
                <div className="img-container">
                    <img src="image" src="https://stickershop.line-scdn.net/stickershop/v1/product/718/LINEStorePC/main.png;compress=true"/>
                </div>
                <div className="card-detail">
                    <h4 className="title">
                        User
                    </h4>
                    <p className="desc">Hi how are you</p>
                </div>
                <div className="time">
                    10:20 PM 
                </div>
                <div className="action-btn">
                    <FontAwesomeIcon icon = "faChevronDown"/>
                </div>
            </div>
           
        
            
        </div>
    )
}
 
export default ChatCardsListing;