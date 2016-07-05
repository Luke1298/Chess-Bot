import React, {PropTypes} from 'react';
import classnames from 'classnames';

import styles from './chessboard.css';
import Piece from './Piece';

export default class ChessBoardTemplate extends React.Component{
  render() {
    var rows = [8, 7, 6, 5, 4, 3, 2, 1];
    var columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const {
      boardState,
      cellClicked
    } = this.props;
    return (
      <div className={styles.chessBoard}>
        {rows.map((row, indexX) =>{
          return(
            <div key={indexX} className={styles.row}>
              {columns.map((column, indexY) =>{
                let parity = ((indexX%2==0 && indexY%2==0) || (indexX%2==1 && indexY%2==1)) ? styles.white : styles.black;
                return( <div key={indexX*8 + indexY} className={classnames(styles.cell, parity)} id={column+row} onClick={cellClicked.bind(this, column+row)}>
                          {(column+row) in boardState ? <Piece type={boardState[column+row].type} colored={boardState[column+row].team == "black"}></Piece> : null}
                        </div>
                );
              })}
            </div>
          );
         })}
      </div>
    );
  };
}
