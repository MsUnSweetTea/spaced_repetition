import React, { Component } from 'react';
import Counter from './components/Counter';
import Questions from './components/Questions';
import Login from './components/Loginpage';
import StartGameButton from './components/StartGame';


class App extends Component {
  render() {
    return (
      <div className="app">
      <StartGameButton/>
      <Login />
      <Counter />
      <Questions />
      
      </div>
    );
  }
}

export default App;

//use react router to make different pages
//use react redux to change the state properly
//(map disptach to props map.state. to props) using connect method.