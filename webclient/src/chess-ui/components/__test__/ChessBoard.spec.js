import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import * as chessBoardActions from '../actions/app';
import ChessBoard from '../ChessBoard';
import Piece from '../Piece';

import expect from 'expect';

var store;

function setup() {
  let props = Object.assign({}, {store});

  let output = TestUtils.renderIntoDocument(<ChessBoard {...props} />);

  return output;
}

function scryRenderedDOMComponentsWithId(tree, id) {
  return TestUtils.findAllInRenderedTree(tree, function(inst) {
    return TestUtils.isDOMComponent(inst) && inst.id === id;
  });
}

describe('ChessBoard', () =>{
  beforeEach(() => {
    store = createStore(combineReducers(require('../../reducers').default));
  });
  describe('Pieces', () =>{
    it('initializes the board correctly', () => {
      var output = setup();
      expect(scryRenderedDOMComponentsWithId(output, 'a1')[0].children[0].innerHTML).toBe("♖");
      expect(scryRenderedDOMComponentsWithId(output, 'b1')[0].children[0].innerHTML).toBe("♘");
      expect(scryRenderedDOMComponentsWithId(output, 'c1')[0].children[0].innerHTML).toBe("♗");
      expect(scryRenderedDOMComponentsWithId(output, 'd1')[0].children[0].innerHTML).toBe("♕");
      expect(scryRenderedDOMComponentsWithId(output, 'e1')[0].children[0].innerHTML).toBe("♔");
      expect(scryRenderedDOMComponentsWithId(output, 'f1')[0].children[0].innerHTML).toBe("♗");
      expect(scryRenderedDOMComponentsWithId(output, 'g1')[0].children[0].innerHTML).toBe("♘");
      expect(scryRenderedDOMComponentsWithId(output, 'h1')[0].children[0].innerHTML).toBe("♖");
      expect(scryRenderedDOMComponentsWithId(output, 'a2')[0].children[0].innerHTML).toBe("♙");
      expect(scryRenderedDOMComponentsWithId(output, 'b2')[0].children[0].innerHTML).toBe("♙");
      expect(scryRenderedDOMComponentsWithId(output, 'c2')[0].children[0].innerHTML).toBe("♙");
      expect(scryRenderedDOMComponentsWithId(output, 'd2')[0].children[0].innerHTML).toBe("♙");
      expect(scryRenderedDOMComponentsWithId(output, 'e2')[0].children[0].innerHTML).toBe("♙");
      expect(scryRenderedDOMComponentsWithId(output, 'f2')[0].children[0].innerHTML).toBe("♙");
      expect(scryRenderedDOMComponentsWithId(output, 'g2')[0].children[0].innerHTML).toBe("♙");
      expect(scryRenderedDOMComponentsWithId(output, 'h2')[0].children[0].innerHTML).toBe("♙");
      expect(scryRenderedDOMComponentsWithId(output, 'a8')[0].children[0].innerHTML).toBe("♜");
      expect(scryRenderedDOMComponentsWithId(output, 'b8')[0].children[0].innerHTML).toBe("♞");
      expect(scryRenderedDOMComponentsWithId(output, 'c8')[0].children[0].innerHTML).toBe("♝");
      expect(scryRenderedDOMComponentsWithId(output, 'd8')[0].children[0].innerHTML).toBe("♛");
      expect(scryRenderedDOMComponentsWithId(output, 'e8')[0].children[0].innerHTML).toBe("♚");
      expect(scryRenderedDOMComponentsWithId(output, 'f8')[0].children[0].innerHTML).toBe("♝");
      expect(scryRenderedDOMComponentsWithId(output, 'g8')[0].children[0].innerHTML).toBe("♞");
      expect(scryRenderedDOMComponentsWithId(output, 'h8')[0].children[0].innerHTML).toBe("♜");
      expect(scryRenderedDOMComponentsWithId(output, 'a7')[0].children[0].innerHTML).toBe("♟");
      expect(scryRenderedDOMComponentsWithId(output, 'b7')[0].children[0].innerHTML).toBe("♟");
      expect(scryRenderedDOMComponentsWithId(output, 'c7')[0].children[0].innerHTML).toBe("♟");
      expect(scryRenderedDOMComponentsWithId(output, 'd7')[0].children[0].innerHTML).toBe("♟");
      expect(scryRenderedDOMComponentsWithId(output, 'e7')[0].children[0].innerHTML).toBe("♟");
      expect(scryRenderedDOMComponentsWithId(output, 'f7')[0].children[0].innerHTML).toBe("♟");
      expect(scryRenderedDOMComponentsWithId(output, 'g7')[0].children[0].innerHTML).toBe("♟");
      expect(scryRenderedDOMComponentsWithId(output, 'h7')[0].children[0].innerHTML).toBe("♟");
    });
    it('renders the correct pieces in the correct spots on state change', () => {
      let test_state = {
        "a1": {"team" : "white", "type" : "rook"},
        "b1": {"team" : "white", "type" : "knight"},
        "c1": {"team" : "white", "type" : "bishop"},
        "d1": {"team" : "white", "type" : "king"},
        "e1": {"team" : "white", "type" : "queen"},
        "f1": {"team" : "white", "type" : "pawn"},
        "a2": {"team" : "black", "type" : "rook"},
        "b2": {"team" : "black", "type" : "knight"},
        "c2": {"team" : "black", "type" : "bishop"},
        "d2": {"team" : "black", "type" : "king"},
        "e2": {"team" : "black", "type" : "queen"},
        "f2": {"team" : "black", "type" : "pawn"}
      };
      store.dispatch(chessBoardActions.patchBoardState(test_state));
      let output = setup();
      expect(scryRenderedDOMComponentsWithId(output, 'a1')[0].children[0].innerHTML).toBe("♖");
      expect(scryRenderedDOMComponentsWithId(output, 'b1')[0].children[0].innerHTML).toBe("♘");
      expect(scryRenderedDOMComponentsWithId(output, 'c1')[0].children[0].innerHTML).toBe("♗");
      expect(scryRenderedDOMComponentsWithId(output, 'd1')[0].children[0].innerHTML).toBe("♔");
      expect(scryRenderedDOMComponentsWithId(output, 'e1')[0].children[0].innerHTML).toBe("♕");
      expect(scryRenderedDOMComponentsWithId(output, 'f1')[0].children[0].innerHTML).toBe("♙");
      expect(scryRenderedDOMComponentsWithId(output, 'a2')[0].children[0].innerHTML).toBe("♜");
      expect(scryRenderedDOMComponentsWithId(output, 'b2')[0].children[0].innerHTML).toBe("♞");
      expect(scryRenderedDOMComponentsWithId(output, 'c2')[0].children[0].innerHTML).toBe("♝");
      expect(scryRenderedDOMComponentsWithId(output, 'd2')[0].children[0].innerHTML).toBe("♚");
      expect(scryRenderedDOMComponentsWithId(output, 'e2')[0].children[0].innerHTML).toBe("♛");
      expect(scryRenderedDOMComponentsWithId(output, 'f2')[0].children[0].innerHTML).toBe("♟");
    });
  });
});
