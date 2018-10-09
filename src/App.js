import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Player from './Player';
import AddPlayer from "./AddPlayer";
import './app.css';

//react components start with a capital letter
//this differentiates custom components from the built in components(H1, div, span etc)

let nextKey = 4;
class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = { players: [{
                        name: "Liam Webb",
                        score: 48,
                        key: 1
                      },
                      {
                        name: "Shanxi Jen",
                        score: 35,
                        key: 2
                      },
                      {
                        name: "John Doe",
                        score: 46,
                        key: 3
                      }],
                    
    };
  }
  
    onScoreChange = (index, delta) => {
      this.state.players[index].score = this.state.players[index].score + delta;
      this.setState(this.state);
    }
  
    onPlayerAdd = name => {
        this.state.players.push({
        name: name,
        score: 0,
        key: nextKey
      });
      this.setState(this.state);
      nextKey = nextKey + 1;
    }
    
    onRemovePlayer = index => {
      this.state.players.splice(index, 1);
      this.setState(this.state);
    }
  
  render() {
    
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players} />
        <div className="players">
          {this.state.players.map((player, index) => {
            return(
              <Player 
                onScoreChange={(delta) => this.onScoreChange(index, delta)} 
                name={player.name} 
                score={player.score} 
                key={player.key} 
                onRemove={() => this.onRemovePlayer(index)} />
            );
          })}
            <AddPlayer onAdd={this.onPlayerAdd} />
        </div>
      </div>
    );
  }
}

Application.propTypes = {
  title: PropTypes.string,
}

Application.defaultProps = {
  title: 'Scoreboard'
}

export default Application;
