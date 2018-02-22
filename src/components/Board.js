import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { PureComponent } from 'react';
import styles from './Tile.module.css';

export default class Board extends PureComponent {
    static propTypes = {

    };

    render() {
        const struct = (
            <div className={styles.root}>
                {

                }
                {this.state.struct.map((row, i) => (
                    <div className={styles.row} key={i}>
                        {row.map((cell, j) =>
                            <div
                                key={j}
                                className={classNames(styles.cell, { [styles.empty_cell]: !cell }, { [styles.active_cell]: isDraggable })}
                            />
                        )}
                    </div>
                ))}
            </div>
        );
        return (
            struct
        );
    }
}
