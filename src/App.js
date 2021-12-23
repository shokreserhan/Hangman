import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Score from './components/Score';
import Solution from './components/Solution';
import Letter from './components/Letter';
import Letters from './components/Letters';
import EndGame from './components/EndGame';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letters:this.generateLetterStatuses(),
      solution:{
        word:"ameer",
        hint:"The best teacher assistant"
      },
      score:100,
      end:null
    }
  }
  
  win = (tempLetters) => {
    for (const char of this.state.solution.word) {
      if(!tempLetters[char.toUpperCase()]){
        return false
      }
    }
    return true
  }

  selectLetter = (char) => {
    if(["win","lose"].includes(this.state.end)){
      return
    }
    let end = this.state.end
    let score = this.state.score
    let tempLetters = Object.assign({},this.state.letters)
    tempLetters[char] = true

    this.state.solution.word.toUpperCase().includes(char) ? score+=5 : score-=20

    this.win(tempLetters) ? end = "win" : score <= 0 ? end = "lose" : end = null

    this.setState({
      letters:tempLetters,
      score:score,
      end:end
    })
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  } 
  render(){
    return (
    <div>
    <div className='score'><Score score={this.state.score} /></div>
    <div className='Solution'><Solution solution={this.state.solution} letters={this.state.letters} onClick={this.selectLetter}/></div>
    <div className='letters'><Letters selectLetter={this.selectLetter} letters={this.state.letters}/></div>
    <div className='game-end'><EndGame end={this.state.end}/></div>
    </div>
  );}
}

export default App;
