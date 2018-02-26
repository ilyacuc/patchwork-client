import React, { Component } from 'react';
import './App.css';
import TilesTrack from './TilesTrack';
import Board from './Board';
import ActiveTile from './ActiveTile';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            draggedTileId: null,
            draggedCell: null,
            activeTileId: null,
            activeTilePosition: null,
        }
    }

    setAppState = (object) => {
        this.setState(object)
    };

    makeMove = () => {
        const { activeTileId, activeTilePosition } = this.state;
        this.props.makeMoveTile(activeTileId, activeTilePosition);
    };

    render() {
        const { draggedCell, activeTileId, activeTilePosition } = this.state;
        const tiles = this.props.tilesTrack.tilesList;
        const board = this.props.activePlayer.board.board;
        const tile = tiles.find(({ id }) => id === this.state.draggedTileId);
        const activeTile = tiles.find(({ id }) => id === this.state.activeTileId);
        return (
            <div className="App">
                <div>Money: {this.props.activePlayer.money}</div>
                <div>Name: {this.props.activePlayer.name}</div>
                <div>Time: {this.props.activePlayer.time}</div>
                <TilesTrack tiles={tiles} setAppState={this.setAppState} activeTileId={activeTileId} />
                <Board
                    board={board}
                    draggedTile={tile}
                    activeTile={activeTile}
                    draggedCell={draggedCell}
                    setAppState={this.setAppState}>
                    {Boolean(activeTile) &&
                    <ActiveTile
                        activeTile={activeTile}
                        setAppState={this.setAppState}
                        activeTilePosition={activeTilePosition} />}
                </Board>
                <div>
                    <button type='button' onClick={this.makeMove}>Put tile</button>
                </div>
            </div>
        );
    }
}

export default App;
