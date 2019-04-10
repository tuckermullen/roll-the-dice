import React from 'react'

class Rolls extends React.Component {
    render() {
        return(
            <div>
                <div>
                <h3>Recent Results</h3>
                </div>
                <div>
                {this.props.listOfRolls.join(", ")}
                </div>
            </div>
        )
    }
}
export default Rolls
