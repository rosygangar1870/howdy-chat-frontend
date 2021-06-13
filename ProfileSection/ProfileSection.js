import './ProfileSection.scss'
const ProfileSection = () => {
    return(
        <div className="profile-section">
            <div className="img-container">
                <img alt="image" src="https://stickershop.line-scdn.net/stickershop/v1/product/718/LINEStorePC/main.png;compress=true"/>
            </div>
            Rosy
            <div className="action-items">
                Logout
            </div>
        </div>
    )
}
export default ProfileSection;