import React from "react";

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