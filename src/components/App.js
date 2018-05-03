import React, { Component } from 'react';
import './App.css';
import TilesTrack from './TilesTrack';
import Board from './Board';
import ActiveTile from './ActiveTile';
import { rotateMatrix } from '../utils';

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

    setActiveTilePosition = (object) => {
        const current = this.state.activeTilePosition || { x: 0, y: 0, r: 0, f: false };
        this.setState({ activeTilePosition: { ...current, ...object } })
    };

    makeMove = () => {
        const { activeTileId, activeTilePosition } = this.state;
        this.props.makeMoveTile(activeTileId, activeTilePosition);
    };

    render() {
        const { draggedCell, activeTileId, activeTilePosition } = this.state;
        const tiles = this.props.tilesTrack.tilesList;
        const board = this.props.activePlayer.board.board;
        let draggedTileStruct;
        const tile = tiles.find(({ id }) => id === this.state.draggedTileId);
        if (tile) {
            draggedTileStruct = activeTilePosition ? rotateMatrix(tile.struct, activeTilePosition.r) : tile.struct;
        }
        const activeTile = tiles.find(({ id }) => id === this.state.activeTileId);
        return (
            <div className="App">
                <div>Money: {this.props.activePlayer.money}</div>
                <div>Name: {this.props.activePlayer.name}</div>
                <div>Time: {this.props.activePlayer.time}</div>
                <TilesTrack tiles={tiles} setAppState={this.setAppState} activeTileId={activeTileId} />
                <Board
                    board={board}
                    draggedTileStruct={draggedTileStruct}
                    draggedCell={draggedCell}
                    setActiveTilePosition={this.setActiveTilePosition}>
                    {Boolean(activeTile) &&
                    <ActiveTile
                        activeTile={activeTile}
                        setAppState={this.setAppState}
                        setActiveTilePosition={this.setActiveTilePosition}
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
