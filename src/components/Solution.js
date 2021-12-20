import React, { Component } from 'react';
import Score from './Score'
import Letter from './Letter'
import Letters from './Letters'

class Solution extends Component {
    render() {
        let arr=["-","-","-","-","-"]
        return (<div>{arr.map(l => <span>{l}</span>)} <div>The best teacher assistant</div></div>)
    }
}
export default Solution