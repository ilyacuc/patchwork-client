//import PropTypes from 'prop-types';
import React from 'react';
import Tile from './Tile';
import styles from './TilesTrack.module.css';

export default function TilesTrack({ tiles, setAppState, activeTileId, position = 0 }) {
    const showItemsCount = Math.min(tiles.length, 5);
    const tilesList = [];
    for (let i = position; i < showItemsCount; i++) {
        /***
         * @var {Tile}
         */
        const tile = tiles[i % showItemsCount];
        tilesList.push(
            <div key={tile.id}>
                <Tile
                    id={tile.id}
                    activeTileId={activeTileId}
                    isDraggable={i - 3 <= position}
                    struct={tile.struct}
                    setAppState={setAppState} />

            </div>
        );
    }
    return (
        <div className={styles.root}>
            {tilesList}
        </div>
    );
};