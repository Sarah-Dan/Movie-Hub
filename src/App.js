import React from "react";
import Greetings from "./components/Greetings";
import UserProfileCard from "./components/UserProfileCard";
import UserProfileCard2 from "./components/UserProfileCard2"; 

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