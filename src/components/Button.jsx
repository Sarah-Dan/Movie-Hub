import React from "react";

function Button(){
    // state....
    const [counter, setCounter] = React.useState(2000);
  
    // handle increment.....
    const handleIncrement = (event) => {
      event.preventDefault();
      setCounter(counter + 1);
      console.log(counter);
    }
  
    // handle decrement.....
    const handleDecrement = (event) => {
      event.preventDefault();
      setCounter(counter - 1);
      console.log(counter);
    }
    // Render ....
    return (
    <section className="counter-container">
      <p>Hey AltSchooler, what year did you graduate high school?</p>
      <input className="counter-year" type="number" value={counter} />
      {/* <div className="counter-label">{counter}</div> */}
      <button className="action-btn" onClick={handleIncrement}>Increase</button>
      <button className="action-btn" onClick={handleDecrement}>Decrease</button>
      </section>
    )
  }

  export default Button;