import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Player from './Player';
import './app.css';

//react components start with a capital letter
//this differentiates custom components from the built in components(H1, div, span etc)
class Application extends React.Component {
  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title}/>
        <div className="players">
          {this.props.players.map(function(player){
            return(
              <Player name={player.name} score={player.score} key={player.key}/>
            );
          })}
        </div>
      </div>
    );
  }
}

Application.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired
  })).isRequired
}

Application.defaultProps = {
  title: 'Scoreboard'
}

export default Application;
