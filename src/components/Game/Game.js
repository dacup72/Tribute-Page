import React, { Component } from "react";
import Nav from "../Nav";


class Game extends Component {
  
  render() {
    return (
      <div>
        <Nav 
          score={5}
          topScore={20}
        />
      </div>
    );
  }
}

export default Game;