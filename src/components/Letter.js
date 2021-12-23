import React, { Component } from 'react';

export class Letter extends Component {
    selectLetter = () => {
        if(this.props.selectLetter){
            this.props.selectLetter(this.props.letter)
        }
    }
    render(){
        return (<span className={this.props.class} onClick={this.selectLetter}> {this.props.letter} </span>)
    } 
} 

export default Letter