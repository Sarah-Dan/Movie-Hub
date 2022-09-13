import React from "react";
import Avatar from "./Avatar2";

function UserProfileCard2(){
    return (
      <div className="card">
        <Avatar2/>
        <div className="card-name">Austin Ayodele</div>
        <div className="bio">
        <div>Austin Ayodele is a Software Engineer, Web developer, and Tech Community leader.</div>
        <div>Lives in Lagos, Nigeria</div>
        <div>Loves coding, collaborating with other developers, and watching anime.</div>
        <div>Connect on Twitter <a href="https://twitter.com/ausstinab?s=11&t=V-8DDrWx1kj580-JKl63ag">Austin</a></div>
        </div>
      </div>
    )
}

export default UserProfileCard2;