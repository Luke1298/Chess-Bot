import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';

import styles from './chessboard.css';

import * as chessBoardActions from './actions/app';

import ChessBoardTemplate from './ChessBoardTemplate';
import pieceMovement from './utils/pieceMovement';

class ChessBoard extends React.Component{
  constructor(props) {
    super(props);
    this.seeMoves = this.seeMoves.bind(this);
    this.cellClicked = this.cellClicked.bind(this);
  };
  cellClicked(cell) {
    const {dispatch, viewState} = this.props;
    const boardState = viewState.board;
    const possibleMoves = viewState.possibleMoves;
    possibleMoves.map((move) =>{
      document.getElementById(move).classList.remove(styles.friendlyHighlight);
    });
    const currentSelection = viewState.currentSelection;
    if (possibleMoves.indexOf(cell)!=-1) {
      let newBoardState = boardState;
      const oldCell = currentSelection;
      newBoardState[cell] = boardState[oldCell];
      delete newBoardState[oldCell];
      dispatch(chessBoardActions.patchBoardState(newBoardState));
      dispatch(chessBoardActions.patchPossibleMoves([]));
    }
    else if (cell in boardState){
      const newPossibleMoves = this.seeMoves(cell);
      dispatch(chessBoardActions.patchPossibleMoves(newPossibleMoves));
      dispatch(chessBoardActions.patchCurrentSelection(cell));
      newPossibleMoves.map((move) =>{
        document.getElementById(move).classList.add(styles.friendlyHighlight);
      });
    }
  };
  seeMoves(cell){
    const {viewState} = this.props;
    const boardState = viewState.board;
    let moves = [];
    let type = boardState[cell].type;
    let team = boardState[cell].team;
    if (team=="white"){
      switch (type){
        case "pawn":
          return pieceMovement.whitePawn(cell, boardState);
        case "rook":
          return pieceMovement.whiteRook(cell, boardState);
        case "bishop":
          return pieceMovement.whiteBishop(cell, boardState);
        case "knight":
          return pieceMovement.whiteKnight(cell, boardState);
        case "queen":
          return pieceMovement.whiteQueen(cell, boardState);
      }
    }
    else{
      switch (type){
        case "pawn":
          return pieceMovement.blackPawn(cell, boardState);
        case "rook":
          return pieceMovement.blackRook(cell, boardState);
        case "bishop":
          return pieceMovement.blackBishop(cell, boardState);
        case "knight":
          return pieceMovement.blackKnight(cell, boardState);
        case "queen":
          return pieceMovement.blackQueen(cell, boardState);
      }
    }
  }
  render(){
    const {viewState} = this.props;
    const boardState = viewState.board;
    return React.createElement(ChessBoardTemplate, {
      boardState,
      cellClicked: this.cellClicked
    });
  }
};

function select(state) {
  return {
    viewState: state.viewState
  };
}

export default connect(select)(ChessBoard);
