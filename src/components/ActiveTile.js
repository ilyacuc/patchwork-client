import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { PureComponent } from 'react';
import styles from './ActiveTile.module.css';
import Tile from './Tile';
import { CELL_SIZE } from '../config';

export default class ActiveTile extends PureComponent {
    static propTypes = {
        activeTile: PropTypes.object,
        activeTilePosition: PropTypes.object,
        setAppState: PropTypes.func,

    };

    render() {
        const { activeTilePosition, activeTile, setAppState } = this.props;
        const { id, struct } = activeTile;
        const style = {};
        if (activeTilePosition) {
            style.left = activeTilePosition.x * CELL_SIZE;
            style.top = activeTilePosition.y * CELL_SIZE;
        }
        return (
            <div className={styles.root} style={style}>
                <Tile id={id} struct={struct} isDraggable isActive setAppState={setAppState} />
            </div>
        );
    }
}
