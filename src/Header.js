import React from 'react';
import PropTypes from 'prop-types';
import Stopwatch from "./Stopwatch";
import Stats from "./Stats";


class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <Stats players={this.props.players} />
                <h1>{this.props.title}</h1>
                <Stopwatch />
            </div>
        ); 
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
}

export default Header;