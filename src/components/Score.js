import React, { Component } from 'react';

export class Score extends Component {
    render() {
        
        return this.props.score >= 80 ?
        <div className='high-score'>{this.props.score}</div> :
        this.props.score >= 50 ? 
        <div className='medium-score'>{this.props.score}</div> :
        // this.props.score < 50
        <div className='low-score'>{this.props.score}</div>
    }
}
export default Score