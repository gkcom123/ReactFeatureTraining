import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropDrillingExp from './prop-pass/PropDrilling';
import ChildrenProp from './prop-pass/ChildrenProp';
import WelcomeDialog from './composition/CompositionDemo';
import { SuccessLabel, ErrorLabel } from './inheritance/InheritanceDemo';
import { SuccessLabel2, ErrorLabel2 } from './composition/CompositionDemo2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Feature Demo</h1>
        </header>
        <PropDrillingExp />
        <ChildrenProp />
        <WelcomeDialog />
        <SuccessLabel> Success Label </SuccessLabel>
        <ErrorLabel>Error Label</ErrorLabel>
        <SuccessLabel2> Success Label </SuccessLabel2>
        <ErrorLabel2> Error Label </ErrorLabel2>
      </div>
    );
  }
}

export default App;
