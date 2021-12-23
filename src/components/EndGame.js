import React, { Component } from 'react';

class EndGame extends Component {
    render() {
        return (
            this.props.end === "win" ?
            <div>You guessed the word WOW!</div> :
            this.props.end === "lose" ? <div> Not this time! :(</div> : null
        );
    }
}

export default EndGame;