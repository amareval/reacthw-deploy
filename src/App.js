import React, { Component } from 'react';
import './App.css';
import baller from "./player.json";
import Image from "./components/Image.js";
import mixing from "./mix.js";

class App extends Component {
  state = {
    baller: baller,
    counterscore: 0,
    topscore : 0,
    beenclicked: []
  }
  // CLICKING ON THE IMAGE
  imageClick = (id) => {
    this.increaseScore();
    mixing(this.state.baller)
    this.setState({
      beenclicked: [...this.state.beenclicked, id]
    })
    if (this.state.beenclicked.indexOf(id) >=0){
      this.resetScore();
    }
  }

// SETTING THE SCORE AFTER GUESSES
  resetScore = () => {
    this.setState({
    counterscore : 0,
    beenclicked : []

    })
    this.setHighScore()
  }

  //SET THE HIGH SCORE 
  setHighScore = () => {
    let newtopscore = this.state.counterscore

    if(this.state.counterscore > this.state.topscore){
console.log(newtopscore);
      this.setState({
      
      topscore : newtopscore

      })
    }
  }

  increaseScore = () => {
    const currentscore = this.state.counterscore + 1;

    this.setState({
      counterscore: currentscore
    })

  }
  render() {
    return (
      <div className="App ">
        <header className="App-header">
         {/* HEADER */}
          <div>
          <h1 className=""> Counter: {this.state.counterscore} </h1>
          <h2 className=""> Top Score: {this.state.topscore} </h2>
          </div>

        </header>
        <div className = "container">
        <p className="App-intro">
          <div className = "d-inline-flex flex-wrap p-2">
            {this.state.baller.map(i => (
              // PASSING IN PROPS
              <Image
                src={i.image}
                imageClick={this.imageClick}
                id={i.id}
              />
            ))};
</div>
        </p>
        </div>
      </div>
    );
  }
}

export default App;
