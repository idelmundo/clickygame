import React, { Component } from "react";
// import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import Card from "./components/Card/Card";
// import Jumbotron from "./components/Jumbotron/Jumbotron";
import friends from "./friends.json";

// by extending the react component class counter inherits functionality from it.
class App extends Component {
  // Setting initial state of the counter component
  state = {
    friends: friends,
    score: 0,
    highScore: 0,
    clicked: []
  };
  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  //shuffle starts here
  clickit = id => {
    const clicked = this.state.clicked;

    if (clicked.includes(id)) {
      this.setState({ clicked: [], score: 0, status: "You lost. play again!" });
      return;
    } else {
      clicked.push(id)

      if (clicked.length === 8) {
        this.setState({ score: 8, status: "You Won! Click to play again!", clicked: [] });
        console.log('YAY you did it');
        return;
      }

      this.setState({ friends, clicked, score: clicked.length, status: " " });

      for (let i = friends.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [friends[i], friends[j]] = [friends[j], friends[i]];
      }
    }
  }

  render() {
    return (
      <div>
      <nav className="navbar fixed-top">
        <h2> Family Guy Clicky game</h2>
        <h2 className="begin">Click an image to begin!</h2>
        <h2>score{this.state.score}</h2>
      </nav>
      <Wrapper>
        {/* <Title>Friends List</Title> */}
        {this.state.friends.map(friend => (
          <Card
            id={friend.id}
            image={friend.image}
            handleIncrement={this.handleIncrement}
          />
        ))}
      </Wrapper>
      </div>
  );
  }

  //  <div>
  //    <Navbar/>
  //    <Jumbotron/>
  //    <Card list={familyGuy}/>  
  //  </div>
  //   )
  // }
}
// .bind look it up
//click shuffle array 
// pass props.
export default App;