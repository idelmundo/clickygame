import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import Card from "./components/Card/Card";
import friends from "./friends.json";

// by extending the react component class counter inherits functionality from it.
class App extends Component {
  // Setting initial state of the counter component
  state = {
    friends,
    score: 0,
    highScore: 0,
    click: [],
    message: "click to play"
  };
  // handleIncrement increases this.state.count by 1
  handleIncrement = id => {
    // user picks the same image it will say try again 
    if(this.state.click.includes(id)){
    this.setState({
    message:"try again"})
    //high score
    if(this.state.highScore < this.state.score){
      this.setState({highScore: this.state.score})
    };
    this.setState({click: []})
    this.setState({score: 0})
    }
    // We always use the setState method to update a component's state
    else{
      this.setState({message: "awesome"})
      this.setState({ score: this.state.score + 1 });
      this.setState({click: [...this.state.click, id]})
    };
  this.state.friends.sort(()=> Math.random() - 0.5)
   };

  render() {
    return (
      <div>
        <nav className= "navbar fixed-top">
          <h2>score={this.state.score}</h2>
          <h4> Family Guy Clicky game</h4>
          <h2>highScore={this.state.highScore}</h2> 
          </nav>
          <div className="jumbotron mb-0 mt-5 bg-secondary text-light">
      <h1 className="text-center"> {this.state.message}</h1>
      </div>
          <Wrapper>
            {this.state.friends.map(friend => (
              <Card
                id={friend.id}
                key={friend.id}
                image={friend.image}
                handleIncrement={this.handleIncrement}
              />
            ))}
          </Wrapper>
        </div>
     
    )
  };
};

export default App;