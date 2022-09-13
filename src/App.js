import React from "react"

// greetings component
function Greetings(){
  return (
    <p>Hello there! Good morning!</p>
  )
}
// avatar component


// userProfileCard component
function UserProfileCard(){
  return (
    <div className="card">
      <img className="card-image" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:100}}/>
      <div className="card-name">Sarah Daniel</div>
      <div>Sarah Daniel is a Software Engineer</div>
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
      <UserProfileCard/>
    </section>
  );
}

export default App;