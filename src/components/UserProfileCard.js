import React from "react";
import Avatar from "./Avatar"
// userProfileCard component
function UserProfileCard(){
    return (
      <div className="card">
        <Avatar/>
        <div className="card-name">Sarah Daniel</div>
        <div className="bio">
        <div>Sarah Daniel is a Software Engineer, CX Manger, Dancer, and Business woman.</div>
        <div>Lives in Lagos, Nigeria</div>
        <div>Loves learning new things, cooking, movies, good music, reading, and traveling.</div>
        <div>Connect on Twitter <a href="https://twitter.com/saahdan">Sarah</a></div>
        </div>
      </div>
    )
}

export default UserProfileCard;