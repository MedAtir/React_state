import React, { Component } from 'react';
import './App.css';
import photo from './burning.jpg';

class App extends Component {
  state = {
    person: {
      fullName: 'Simo Atir',
      bio:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgSrc: photo,
      profession: 'Software Engineer',
    },
    shows: false,
    timeElapsed: 0,
    startTime: null,
  };

  handleShow = () => {
    const shows = !this.state.shows;
    this.setState({ shows });

    if (shows) {
      // Start the timer when the component is shown
      this.setState({ startTime: Date.now(), timeElapsed: 0 });
      this.interval = setInterval(() => {
        const timeElapsed = Math.floor((Date.now() - this.state.startTime) / 1000);
        this.setState({ timeElapsed });
      }, 1000);
    } else {
      // Stop the timer when the component is hidden
      clearInterval(this.interval);
    }
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeElapsed } = this.state;

    return (
      <div className="container">
        <button onClick={this.handleShow} className={`btn ${shows ? 'hide-btn' : 'show-btn'}`}>
          {shows ? 'Hide profile' : 'Show profile'}
        </button>

        {shows && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <div>
              <h1>{fullName}</h1>
              <p>{profession}</p>
              <p>{bio}</p>
            </div>
          </div>
        )}

        {shows && <p className="timer">Time elapsed: {timeElapsed} seconds</p>}
      </div>
    );
  }
}

export default App;
