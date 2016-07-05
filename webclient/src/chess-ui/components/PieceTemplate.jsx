import React, {PropTypes} from 'react';
import classnames from 'classnames';

import styles from './piece.css';

export default class PieceTemplate extends React.Component{
  render() {
    const {colored, type} = this.props;
    return(
      <div className={styles.piece} draggable="true">
      {(() => {
        switch (type) {
          case "pawn":   return (
            colored ?
              "♟"
              :
              "♙"
          );
          case "rook":   return (
            colored ?
              "♜"
              :
              "♖"
          );
          case "knight":   return (
            colored ?
              "♞"
              :
              "♘"
          );
          case "bishop":   return (
            colored ?
              "♝"
              :
              "♗"
          );
          case "queen":   return (
            colored ?
              "♛"
              :
              "♕"
          );
          case "king":   return (
            colored ?
              "♚"
              :
              "♔"
          );
        }
      })()}
      </div>
    );
  }
}
