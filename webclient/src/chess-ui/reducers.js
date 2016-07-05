import * as chessBoardActions from './components/actions/app';

var initialViewState = {
  board : {
    "a1": {"team" : "white", "type" : "rook"},
    "b1": {"team" : "white", "type" : "knight"},
    "c1": {"team" : "white", "type" : "bishop"},
    "d1": {"team" : "white", "type" : "queen"},
    "e1": {"team" : "white", "type" : "king"},
    "f1": {"team" : "white", "type" : "bishop"},
    "g1": {"team" : "white", "type" : "knight"},
    "h1": {"team" : "white", "type" : "rook"},
    "a2": {"team" : "white", "type" : "pawn"},
    "b2": {"team" : "white", "type" : "pawn"},
    "c2": {"team" : "white", "type" : "pawn"},
    "d2": {"team" : "white", "type" : "pawn"},
    "e2": {"team" : "white", "type" : "pawn"},
    "f2": {"team" : "white", "type" : "pawn"},
    "g2": {"team" : "white", "type" : "pawn"},
    "h2": {"team" : "white", "type" : "pawn"},
    "a8": {"team" : "black", "type" : "rook"},
    "b8": {"team" : "black", "type" : "knight"},
    "c8": {"team" : "black", "type" : "bishop"},
    "d8": {"team" : "black", "type" : "queen"},
    "e8": {"team" : "black", "type" : "king"},
    "f8": {"team" : "black", "type" : "bishop"},
    "g8": {"team" : "black", "type" : "knight"},
    "h8": {"team" : "black", "type" : "rook"},
    "a7": {"team" : "black", "type" : "pawn"},
    "b7": {"team" : "black", "type" : "pawn"},
    "c7": {"team" : "black", "type" : "pawn"},
    "d7": {"team" : "black", "type" : "pawn"},
    "e7": {"team" : "black", "type" : "pawn"},
    "f7": {"team" : "black", "type" : "pawn"},
    "g7": {"team" : "black", "type" : "pawn"},
    "h7": {"team" : "black", "type" : "pawn"}
  },
  possibleMoves : [],
  currentSelection: null
};

function viewState(state=initialViewState, action){
  switch (action.type) {
    case chessBoardActions.PATCH_BOARD_STATE:
      console.log(action.payload);
      return Object.assign({}, state, { board : action.payload });
    case chessBoardActions.PATCH_POSSIBLE_MOVES:
      return Object.assign({}, state, { possibleMoves : action.payload });
    case chessBoardActions.PATCH_CURRENT_SELECTION:
      return Object.assign({}, state, { currentSelection : action.payload });
    default:
      return state;
  }
}

export default {
  viewState
};
