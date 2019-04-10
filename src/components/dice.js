import React from 'react'

class Dice extends React.Component {
    render() {
        return(
            <div>
                <div>
                {this.props.diceAmount}
                </div>
            </div>
        )
    }
}

export default Dice
