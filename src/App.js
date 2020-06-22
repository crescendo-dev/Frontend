import React from 'react';
import './App.css';
import './RegisterPopup';
import RegisterPopup from './RegisterPopup';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <div className="center">
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <button>login</button>
        <RegisterPopup></RegisterPopup>
      </div>
    </div>
  );
  }
}

export default App;
