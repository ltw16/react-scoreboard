import React from 'react';
import PropTypes from 'prop-types';


class AddPlayer extends React.Component {
  constructor(){
    super();
    this.state = {
      playername: ""
    }
  }
  
  onNameChange = e => {
    this.setState({playername: e.target.value});
  }
  
  onSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state.playername);
    this.setState({playername:""});
  }
  
  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Add Player" value={this.state.playername} onChange={this.onNameChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

AddPlayer.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default AddPlayer;