import React, { Component } from 'react';
import RoomsList from '../RoomsList'
import GamesArea from '../GamesArea'
import {HashRouter as Router, Route} from 'react-router-dom'
// import RoomsList from '../RoomsList'

class HostRoot extends Component {
    render() {
        return (
            <div>
                <h1>Quiplash Clone</h1>
                <RoomsList />
            </div>
        );
    }
}

export default HostRoot;