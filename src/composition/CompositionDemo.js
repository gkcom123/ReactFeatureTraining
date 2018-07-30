import React from 'react';
import "./compositionStyle.css";
function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
  
  function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          This is a React JS training!
        </p>
      </FancyBorder>
    );
  }
  
  export default WelcomeDialog;