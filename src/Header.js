import React from 'react';
import PropTypes from 'prop-types';
import Stopwatch from "./Stopwatch";

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <h1>{this.props.title}</h1>
                <Stopwatch />
            </div>
        ); 
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;