import React from "react";

function Form(){
    // handle change event....
  // const handleChange = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.value);
  // }
  
  // handle form event....
  
  
    return (
      <section className="form-container">
      <form className="form" onSubmit={(event) => {
        event.preventDefault();
        const {name, email, password} = event.target.elements;
        alert(`Hello ${name.value}! Your email is ${email.value}, and your password is ${password.value}`);
      }}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter your name" name="name"/>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter your email" name="email"/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter your password" name="password"/>
        <button>Submit</button>
      </form>
      </section>
    )
  }
  
  export default Form;