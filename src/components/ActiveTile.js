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
        setActiveTilePosition: PropTypes.func,

    };

    rotateCounterClockwise = () => {
        const r = (this.props.activeTilePosition ? this.props.activeTilePosition.r : 0) - 90;
        this.props.setActiveTilePosition({ r });
    };

    rotateClockwise = () => {
        const r = (this.props.activeTilePosition ? this.props.activeTilePosition.r : 0) + 90;
        this.props.setActiveTilePosition({ r });
    };

    render() {
        const { activeTilePosition, activeTile, setAppState } = this.props;
        const { id, struct } = activeTile;
        const style = {};
        const tileStyle = {};
        if (activeTilePosition) {
            style.left = activeTilePosition.x * CELL_SIZE;
            style.top = activeTilePosition.y * CELL_SIZE;
            let translateX = 0;
            let translateY = 0;
            switch ((360 + activeTilePosition.r % 360) % 360 / 90) {
                case 1:
                    translateY = -100;
                    break;
                case 2:
                    translateX = -100;
                    translateY = -100;
                    break;
                case 3:
                    translateX = -100;
                    break;
            }
            tileStyle.transform = `rotate(${activeTilePosition.r}deg) translateX(${translateX}%) translateY(${translateY}%)`;
        }
        return (
            <div className={styles.root} style={style}>
                <button
                    type="button"
                    onClick={this.rotateCounterClockwise}
                    className={styles.rotateCounterClockwise}>⤿
                </button>
                <button type="button" onClick={this.rotateClockwise} className={styles.rotateClockwise}>⤾</button>
                <button type="button" className={styles.flip}>⇋</button>
                <div style={{ padding: '0 0', height: 0 }}>
                    <div className={styles.tileWrapper}>
                        <Tile
                            id={id}
                            style={tileStyle}
                            struct={struct}
                            isDraggable
                            isActive
                            setAppState={setAppState}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
