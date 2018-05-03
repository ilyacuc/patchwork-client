import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { PureComponent } from 'react';
import styles from './Board.module.css';

export default class Board extends PureComponent {
    static propTypes = {
        board: PropTypes.array,
        draggedCell: PropTypes.object,
        draggedTileStruct: PropTypes.arrayOf(PropTypes.array),
        setActiveTilePosition: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            tileX: null,
            tileY: null
        };
    }

    handleDragOver = (event) => {
        event.preventDefault();
        this.setState({
            tileX: event.target.dataset.coordinateX - this.props.draggedCell.x,
            tileY: event.target.dataset.coordinateY - this.props.draggedCell.y
        });
        //console.log('handleDragOver', event, event.target);
    };
    handleDrop = (event) => {
        // this.setState({
        //     tileX: null,
        //     tileY: null
        // });
        this.props.setActiveTilePosition({
                x: this.state.tileX,
                y: this.state.tileY,
            }
        );
        console.log('handleDrop', event, event.target);
    };

    render() {
        const highlightedCells = [];
        let isValidPlace = true;
        const { draggedTileStruct } = this.props;

        if (draggedTileStruct) {
            const tile = draggedTileStruct;
            const width = tile[0].length;
            const height = tile.length;
            for (let i = 0; i < height; i++) {
                for (let j = 0; j < width; j++) {
                    if (tile[i][j]) {
                        highlightedCells.push(`${j + this.state.tileX}_${i + this.state.tileY}`);

                        if (isValidPlace) {
                            const y = i + this.state.tileY;
                            const x = j + this.state.tileX;
                            isValidPlace =
                                x >= 0 &&
                                y >= 0 &&
                                y < this.props.board.length &&
                                x < this.props.board[0].length &&
                                !this.props.board[y][x];
                        }
                    }
                }
            }
        }

        return (
            <div className={styles.root}>
                {this.props.board.map((row, i) => (
                    <div className={styles.row} key={i}>
                        {row.map((cell, j) => {
                                const isHighlighted = highlightedCells.includes(`${j}_${i}`);
                                return (
                                    <div
                                        data-coordinate-x={j}
                                        data-coordinate-y={i}
                                        onDragOver={this.handleDragOver}
                                        onDrop={this.handleDrop}
                                        key={j}
                                        className={classNames(styles.cell, { [styles.cell_valid]: isHighlighted && isValidPlace }, { [styles.cell_invalid]: isHighlighted && !isValidPlace })}
                                    >{cell}</div>
                                );
                            }
                        )}
                    </div>
                ))}
                {this.props.children}
            </div>
        );
    }
}
