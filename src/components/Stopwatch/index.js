import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRunning: false,
    setSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, setSeconds: 0})
  }

  updateTime = () => {
    this.setState(prevState => ({
      setSeconds: prevState.setSeconds + 1,
    }))
  }

  onStartButton = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  onStopButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  renderSeconds = () => {
    const {setSeconds} = this.state
    const seconds = Math.floor(setSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {setSeconds} = this.state
    const minutes = Math.floor(setSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-container">
        <h1 className="head">Stopwatch</h1>
        <div className="card">
          <div className="timer-row">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="clock-img"
              alt="stopwatch"
            />
            <p className="para">Timer</p>
          </div>
          <div className="timer-row">
            <h1 className="time-head">{time}</h1>
          </div>
          <div className="timer-row">
            <button
              type="button"
              className="button1"
              onClick={this.onStartButton}
              disabled={isTimeRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="button2"
              onClick={this.onStopButton}
            >
              Stop
            </button>
            <button
              type="button"
              className="button3"
              onClick={this.onResetButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
