import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


const shuffleArreay = (array) => {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp
  }
  return array
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    
    currentScore: 0,
    friends,
    clicked: [],
    topScore: 0,
    result:"",
    gameOver: false
  };

  componentDidMount() {
    this.setState({result: "Click a player to get started"})
  
  }
  

  clickedPlayer = (id) => {
    console.log('Picture clicked with id:');
    if(!this.state.clicked.includes(id)){
      this.pointIncrease();
      this.state.clicked.push(id);
      this.setState({
        gameOver: false
      });
    } else {
      this.resetGame()
    }
  }

  pointIncrease = () => {
let score = this.state.currentScore + 1;
console.log('the score is')
if (score === this.state.friends.length) {
  this.setState({
    result: "you win! Start clicking to play again!",
    topScore: 0,
    currentScore: 0,
    clicked: [],
    friends,
    gameOver: false

  })
} else if ( score > this.state.topScore) {
  this.setState({
    topScore: score,
    currentScore: score,
    result: "Correct! New high score!",
  })
} else {
  this.setState({
    currentScore: score,
    result: "Correct!"
  })
}
this.resetFriendArray()
  }
  
  resetGame = () => {
    this.setState ({
      points: 0,
      currentScore: 0,
      topScore: this.state.topScore,
      result: 'You lost!',
      clicked: [],
      friends,
      gameOver: true
    });
    console.log('game over? ', this.state.gameOver);
    this.resetFriendArray()
    }
    
  resetFriendArray = () => {
    let newScramble = shuffleArreay(friends)
    this.setState({friends: newScramble})
  }


  render() {
    return (
      <Wrapper>
        <Title><div> currentScore: {this.state.currentScore} topScore: {this.state.topScore}</div>  {this.state.result}</Title>

        {this.state.friends.map(friend => (
          <FriendCard
           
          clickedPlayer={this.clickedPlayer}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
