import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onClickvalue = event => {
    const {value} = event.target
    console.log(value)

    this.setState({count: value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="container1">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div>
            <label className="pargraph" htmlFor="phraseText">
              Enter the phrase
            </label>
            <br />

            <input
              type="text"
              placeholder="Enter the phrase"
              className="input"
              id="phraseText"
              onClick={this.onClickvalue}
              value={count}
            />
          </div>
          <div className="container2">
            <p className="pargraph2">No.of letters: {count.length}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
