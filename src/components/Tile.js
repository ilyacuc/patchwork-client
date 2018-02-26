import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { PureComponent } from 'react';
import styles from './Tile.module.css';

export default class Tile extends PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
        activeTileId: PropTypes.string,
        isDraggable: PropTypes.bool,
        isActive: PropTypes.bool,
        struct: PropTypes.object.isRequired,
        setAppState: PropTypes.func,

    };

    HandleStartDrag = (event) => {
        event.dataTransfer.effectAllowed = 'move';
        console.log('HandleStartDrag', this.props.struct, event.dataTransfer, event.target);
        const { id, activeTileId, struct, isActive, setAppState } = this.props;
        const rect = event.target.getBoundingClientRect();
        const draggedCell = {
            x: Math.ceil((event.pageX - rect.x) / (rect.width / struct[0].length)) - 1,
            y: Math.ceil((event.pageY - rect.y) / (rect.height / struct.length)) - 1,
        };

        const newState = {
            draggedCell,
            draggedTileId: id,
        };
        if (!isActive) {
            newState.activeTileId = null;
        }
        setAppState(newState);
    };
    HandleEndDrag = (event) => {
        console.log('HandleEndDrag', event, event.dataTransfer.dropEffect);
        this.props.setAppState({
            draggedCell: null,
            draggedTileId: null,
            activeTileId: /*event.dataTransfer.dropEffect === 'none' ? null :*/ this.props.id
        });
    };

    render() {
        const { isDraggable, struct, id, activeTileId } = this.props;
        return (
            <div
                //data-tile-id={id}
                className={classNames(styles.root, { [styles.picked]: id === activeTileId })}
                draggable={isDraggable}
                onDragStart={isDraggable && this.HandleStartDrag}
                onDragEnd={isDraggable && this.HandleEndDrag}>
                {struct.map((row, i) => (
                    <div className={styles.row} key={i}>
                        {row.map((cell, j) =>
                            <div
                                key={j}
                                className={classNames(styles.cell, { [styles.empty_cell]: !cell })}
                            />
                        )}
                    </div>
                ))}
            </div>
        );
    }
}
