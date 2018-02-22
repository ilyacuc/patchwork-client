import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { PureComponent } from 'react';
import styles from './Tile.module.css';

export default class Tile extends PureComponent {
    static propTypes = {
        isDraggable: PropTypes.bool,
        struct: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            struct: props.struct
        }
    }

    HandleStartDrag = () => {

    };
    HandleEndDrag = (event) => {
        console.log(event, event.target);
    };

    render() {
        const { isDraggable } = this.props;
        const struct = (
            <div className={styles.root} draggable={isDraggable} onDragStart={isDraggable && this.HandleStartDrag} onDragEnd={isDraggable && this.HandleEndDrag}>
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
