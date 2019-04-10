import React, { Component } from 'react';
import './App.css';
import Dice from './components/dice'
import Rolls from './components/rolls'

import Dice1 from './images/dice1.png'
import Dice2 from './images/dice2.png'
import Dice3 from './images/dice3.png'
import Dice4 from './images/dice4.png'
import Dice5 from './images/dice5.png'
import Dice6 from './images/dice6.png'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            diceResult: 1,
            rollsArr: [],
            diceImg: Dice1,
            displayImg: true
        }
    }
    diceRoll = () => {
        let newRoll = this.state.diceResult
        let newDiceImg = this.state.diceImg
        newRoll = Math.floor(Math.random() * 6 + 1)

        if (newRoll === 1) {
            newDiceImg = Dice1
        } else if (newRoll === 2) {
            newDiceImg = Dice2
        } else if (newRoll === 3) {
            newDiceImg = Dice3
        } else if (newRoll === 4) {
            newDiceImg = Dice4
        } else if (newRoll === 5) {
            newDiceImg = Dice5
        } else if (newRoll === 6) {
            newDiceImg = Dice6
        }

        this.setState({ diceResult: newRoll })
        this.setState({ diceImg: newDiceImg })

        let newRollsArr = this.state.rollsArr
        newRollsArr.push(newRoll)
        this.setState({ rollsArr: newRollsArr})
    }

  render() {
      const { diceResult, rollsArr, diceImg } = this.state

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center">
                <div>
                <h3>Roll The Dice!</h3>
                </div>
                <button type="button" className="btn btn-dark" onClick={this.diceRoll}>
                <Dice diceAmount={diceResult}/>
                Click To Roll!
                </button>
                </div>
                <div className="col-md-4 text-center">
                    <Rolls listOfRolls={rollsArr} />
                </div>
                <img style={{}} src={diceImg} />
            </div>
        </div>
    );
  }
}

export default App;
