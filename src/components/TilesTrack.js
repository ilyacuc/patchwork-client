import PropTypes from 'prop-types';
import React from 'react';
import Tile from './Tile';
import styles from './TilesTrack.module.css';

export default function TilesTrack({ tiles, position = 0 }) {
    const showItemsCount = Math.min(tiles.length, 5);
    const tilesList = [];
    for (let i = position; i < showItemsCount; i++) {
        const tile = tiles[i % showItemsCount];
        tilesList.push(
            <Tile key={tile.id} isDraggable={i - 3 <= position} struct={tile.struct} />
        );
    }
    return (
        <div className={styles.root}>
            {tilesList}
        </div>
    );
};