import React, { Component } from 'react';
import './App.css';
import TilesTrack from './TilesTrack';

class App extends Component {
    render() {
        const tiles = this.props.tilesTrack.tilesList;
        return (
            <div className="App">
                <TilesTrack tiles={tiles} />
            </div>
        );
    }
}

export default App;
