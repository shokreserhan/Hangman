import React, { Component } from 'react';
import Letter from './Letter';

export class Letters extends Component {
    render() {
        return(
            <div>
                {Object.keys(this.props.letters)
                    .map(char => {
                        const status = this.props.letters[char] ? "selected" : "not-selected"
                        return (<Letter key={char} letter={char} class={status} selectLetter={this.props.selectLetter}/>)
                    })
                }
            </div>
        )      
    }
}
export default Letters