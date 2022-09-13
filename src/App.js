import React from "react"
// import Avatar from "./images/myapp-sarah.jpeg"



// avatar component
function Avatar(){
  return(
<img className="card-image" src={require("./images/myapp-sarah.jpeg")} alt="Avatar" style={{width:100}}/>
);
}
function Avatar2(){
  return(
<img className="card-image" src={require("./images/myapp-austin.jpeg")} alt="Avatar" style={{width:100}}/>
);
}

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

// list component
function ListComponent(){
  return <li>Tesla</li>
}

// root component
function App(){
  return (
    <section className="main-page">
      <Greetings/>
      <UserProfileCard/>
      <UserProfileCard2/>
    </section>
  );
}

export default App;