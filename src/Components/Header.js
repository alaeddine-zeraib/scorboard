import React from 'react';
import Stats from './Stats';
import PropTypes from 'prop-types';
import Stopwatch from './Stopwatch';

export default function Header({title, players}) {
    return (
        <header>
            <Stats players={players} />
            <h1>{title}</h1>

            <Stopwatch />
        </header>
        
    );
}

Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object)
}

Header.defaultProps = {
    title: "scorboard",
}
