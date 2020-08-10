import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import Card from "./components/Card/Card";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import familyGuy from "./familyguy.json"

// by extending the react component class counter inherits functionality from it.
function App extends Component () {
  // Setting initial state of the counter component
  state= {
   images,
   score: 0,
   highScore: 0,
   clicked: []
  };

    clickIt = id => {
      
    }
  
  render() {
    return (
      <Wrapper>
      <div>
        <Navbar/>
        <Jumbotron/>
        <Card />
      </div>
      </Wrapper>
      
    );

  }
  
}

export default App;