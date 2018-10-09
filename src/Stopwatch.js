import React, { Component } from "react";


class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            elapsedTime: 0,
            previousTime: 0
        };
    }

    componentDidMount = () => {
        this.interval = setInterval(this.onTick, 1000)
    }
    
    componentWillUnmount = () => {
        clearInterval(this.interval);
    }
    
    onStop = () => {
        this.setState({running: false});
    }
    
    onTick = () => {
        if (this.state.running) {
            let now = Date.now();
            this.setState({
                previousTime: now,
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
            })
        }
    }
    
    onStart = () => {
        this.setState({
            running: true,
            previousTime: Date.now()
        });
    }
    
    onReset = () => {
        this.setState({
            elapsedTime: 0,
            previousTime: Date.now()
        })
    }
    
    render() {
    let seconds = Math.floor(this.state.elapsedTime / 1000)
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <div className="stopwatch-time">{seconds}</div>
        {this.state.running ? <button onClick={this.onStop}>Stop</button> : <button onClick={this.onStart}>Start</button>}
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;