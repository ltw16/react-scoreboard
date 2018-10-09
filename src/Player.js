import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <div className="player-name">
          <a className="remove-player" onClick={this.props.onRemove}>❌ </a>
          {this.props.name}
        </div>
        <div className="player-score">
          <Counter initialScore={this.props.score} />
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Player;