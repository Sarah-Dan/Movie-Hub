import Avatar from "./Avatar"

// userProfileCard component
function UserProfileCard(){
    return (
      <div className="card">
        <Avatar/>
        <div className="card-name">Sarah Daniel</div>
        <div className="bio">
        <p>Software Engineer, CX Manger, and Entrepreneur.</p>
        <p>Lives in Lagos, Nigeria</p>
        <p>Loves learning new things, cooking, movies, good music, reading, and traveling.</p>
        <p>Connect on Twitter <a href="https://twitter.com/saahdan">Sarah</a></p>
        </div>
      </div>
    )
}

export default UserProfileCard;