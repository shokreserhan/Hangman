import React, { Component } from 'react';
import Letter from './Letter';

export class Solution extends Component {
    render() {
        return (
            <div>
                {
                Array.from(this.props.solution.word).map((char ,index) => {
                    const letter=this.props.letters[char.toUpperCase()] ? char : "_"
                    return <Letter key={index} letter={letter} class={"solution"}/> 
                })
                }
            </div>
        )
    }
}
export default Solution