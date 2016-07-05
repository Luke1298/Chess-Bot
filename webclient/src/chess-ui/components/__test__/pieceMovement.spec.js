import pieceMovement from '../utils/pieceMovement';
import testHelper from '../../../test-utils/helper';

import expect from 'expect';

describe('Piece Movement', () => {
  describe('White Pawn', () =>{
    it('Can move two if on row 2', () =>{
      let testState = {
        "a2": {"team" : "white", "type" : "pawn"},
        "b2": {"team" : "white", "type" : "pawn"},
        "c2": {"team" : "white", "type" : "pawn"},
        "d2": {"team" : "white", "type" : "pawn"},
        "e2": {"team" : "white", "type" : "pawn"},
        "f2": {"team" : "white", "type" : "pawn"},
        "g2": {"team" : "white", "type" : "pawn"},
        "h2": {"team" : "white", "type" : "pawn"}
      };
      testHelper.arrayExpect(pieceMovement.whitePawn("a2", testState)).toEqual(['a3', 'a4']);
      testHelper.arrayExpect(pieceMovement.whitePawn("b2", testState)).toEqual(['b3', 'b4']);
      testHelper.arrayExpect(pieceMovement.whitePawn("c2", testState)).toEqual(['c3', 'c4']);
      testHelper.arrayExpect(pieceMovement.whitePawn("d2", testState)).toEqual(['d3', 'd4']);
      testHelper.arrayExpect(pieceMovement.whitePawn("e2", testState)).toEqual(['e3', 'e4']);
      testHelper.arrayExpect(pieceMovement.whitePawn("f2", testState)).toEqual(['f3', 'f4']);
      testHelper.arrayExpect(pieceMovement.whitePawn("g2", testState)).toEqual(['g3', 'g4']);
      testHelper.arrayExpect(pieceMovement.whitePawn("h2", testState)).toEqual(['h3', 'h4']);
    });

    it('Can only move one if on any other row', () => {
      let testState = {
        "a3": {"team" : "white", "type" : "pawn"},
      };
      testHelper.arrayExpect(pieceMovement.whitePawn("a3", testState)).toEqual(['a4']);
    });

    it('Can move diagonally if enemy is on the square', () => {
      let testState = {
        "a3": {"team" : "white", "type" : "pawn"},
        "b3": {"team" : "white", "type" : "pawn"},
        "a4": {"team" : "black", "type" : "bishop"},
        "b4": {"team" : "black", "type" : "rook"},
        "c4": {"team" : "black", "type" : "queen"},
        "b5": {"team" : "white", "type" : "pawn"},
        "c6": {"team" : "black", "type" : "queen"}
      };
      testHelper.arrayExpect(pieceMovement.whitePawn("a3", testState)).toEqual(['b4']);
      testHelper.arrayExpect(pieceMovement.whitePawn("b3", testState)).toEqual(['a4', 'c4']);
      testHelper.arrayExpect(pieceMovement.whitePawn("b5", testState)).toEqual(['b6', 'c6']);

      testState = {
        "a2": {"team" : "white", "type" : "pawn"},
        "b3": {"team" : "black", "type" : "rook"},
      };
      testHelper.arrayExpect(pieceMovement.whitePawn("a2", testState)).toEqual(['b3', 'a3', 'a4']);
    });

    it('Cannot move through team pieces at all', () => {
      let testState = {
        "b2": {"team" : "white", "type" : "pawn"},
        "b3": {"team" : "white", "type" : "rook"},
        "a3": {"team" : "white", "type" : "rook"},
        "c3": {"team" : "white", "type" : "rook"},
      };
      testHelper.arrayExpect(pieceMovement.whitePawn("b2", testState)).toEqual([]);

      testState = {
        "b3": {"team" : "white", "type" : "pawn"},
        "b4": {"team" : "white", "type" : "rook"},
        "a4": {"team" : "white", "type" : "rook"},
        "c4": {"team" : "white", "type" : "rook"},
      };
      testHelper.arrayExpect(pieceMovement.whitePawn("b3", testState)).toEqual([]);
    });

    it('Cannot move straight if enemy is in the way', () => {
      let testState = {
        "b2": {"team" : "white", "type" : "pawn"},
        "b3": {"team" : "black", "type" : "queen"},
      };
      testHelper.arrayExpect(pieceMovement.whitePawn("b2", testState)).toEqual([]);

      testState = {
        "b2": {"team" : "white", "type" : "pawn"},
        "b4": {"team" : "black", "type" : "queen"},
      };
      testHelper.arrayExpect(pieceMovement.whitePawn("b2", testState)).toEqual(['b3']);
    });
  });
  describe('Black Pawn', () =>{
    it('Can move two if on row 7', () =>{
      let testState = {
        "a7": {"team" : "black", "type" : "pawn"},
        "b7": {"team" : "black", "type" : "pawn"},
        "c7": {"team" : "black", "type" : "pawn"},
        "d7": {"team" : "black", "type" : "pawn"},
        "e7": {"team" : "black", "type" : "pawn"},
        "f7": {"team" : "black", "type" : "pawn"},
        "g7": {"team" : "black", "type" : "pawn"},
        "h7": {"team" : "black", "type" : "pawn"}
      };
      testHelper.arrayExpect(pieceMovement.blackPawn("a7", testState)).toEqual(['a6', 'a5']);
      testHelper.arrayExpect(pieceMovement.blackPawn("b7", testState)).toEqual(['b6', 'b5']);
      testHelper.arrayExpect(pieceMovement.blackPawn("c7", testState)).toEqual(['c6', 'c5']);
      testHelper.arrayExpect(pieceMovement.blackPawn("d7", testState)).toEqual(['d6', 'd5']);
      testHelper.arrayExpect(pieceMovement.blackPawn("e7", testState)).toEqual(['e6', 'e5']);
      testHelper.arrayExpect(pieceMovement.blackPawn("f7", testState)).toEqual(['f6', 'f5']);
      testHelper.arrayExpect(pieceMovement.blackPawn("g7", testState)).toEqual(['g6', 'g5']);
      testHelper.arrayExpect(pieceMovement.blackPawn("h7", testState)).toEqual(['h6', 'h5']);
    });

    it('Can only move one if on any other row', () => {
      let testState = {
        "a6": {"team" : "black", "type" : "pawn"},
      };
      testHelper.arrayExpect(pieceMovement.blackPawn("a6", testState)).toEqual(['a5']);
    });

    it('Can move diagonally if enemy is on the square', () => {
      let testState = {
        "a6": {"team" : "black", "type" : "pawn"},
        "b6": {"team" : "black", "type" : "pawn"},
        "a5": {"team" : "white", "type" : "bishop"},
        "b5": {"team" : "white", "type" : "rook"},
        "c5": {"team" : "white", "type" : "queen"},
        "b4": {"team" : "black", "type" : "pawn"},
        "c3": {"team" : "white", "type" : "queen"}
      };
      testHelper.arrayExpect(pieceMovement.blackPawn("a6", testState)).toEqual(['b5']);
      testHelper.arrayExpect(pieceMovement.blackPawn("b6", testState)).toEqual(['a5', 'c5']);
      testHelper.arrayExpect(pieceMovement.blackPawn("b4", testState)).toEqual(['b3', 'c3']);

      testState = {
        "a7": {"team" : "black", "type" : "pawn"},
        "b6": {"team" : "white", "type" : "rook"},
      };
      testHelper.arrayExpect(pieceMovement.blackPawn("a7", testState)).toEqual(['b6', 'a6', 'a5']);
    });

    it('Cannot move through team pieces at all', () => {
      let testState = {
        "b7": {"team" : "black", "type" : "pawn"},
        "b6": {"team" : "black", "type" : "rook"},
        "a6": {"team" : "black", "type" : "rook"},
        "c6": {"team" : "black", "type" : "rook"},
      };
      testHelper.arrayExpect(pieceMovement.blackPawn("b7", testState)).toEqual([]);

      testState = {
        "b6": {"team" : "black", "type" : "pawn"},
        "b5": {"team" : "black", "type" : "rook"},
        "a5": {"team" : "black", "type" : "rook"},
        "c5": {"team" : "black", "type" : "rook"},
      };
      testHelper.arrayExpect(pieceMovement.blackPawn("b6", testState)).toEqual([]);
    });

    it('Cannot move straight if enemy is in the way', () => {
      let testState = {
        "b7": {"team" : "black", "type" : "pawn"},
        "b6": {"team" : "white", "type" : "queen"},
      };
      testHelper.arrayExpect(pieceMovement.blackPawn("b7", testState)).toEqual([]);

      testState = {
        "b7": {"team" : "black", "type" : "pawn"},
        "b5": {"team" : "white", "type" : "queen"},
      };
      testHelper.arrayExpect(pieceMovement.blackPawn("b7", testState)).toEqual(['b6']);
    });
  });
  describe('Rook (White and black)', () =>{
    it('Cannot move past (or onto) a friendly peice', () => {
      let testState = {
        "a1": {"team" : "white", "type" : "rook"},
        "b1": {"team" : "white", "type" : "pawn"},
        "a2": {"team" : "white", "type" : "pawn"}
      };
      testHelper.arrayExpect(pieceMovement.whiteRook("a1", testState)).toEqual([]);

      testState = {
        "a1": {"team" : "black", "type" : "rook"},
        "b1": {"team" : "black", "type" : "pawn"},
        "a2": {"team" : "black", "type" : "pawn"}
      };
      testHelper.arrayExpect(pieceMovement.blackRook("a1", testState)).toEqual([]);
    });

    it('Can move onto (but not past) enemy peices', () => {
      let testState = {
        "a1": {"team" : "white", "type" : "rook"},
        "e1": {"team" : "black", "type" : "rook"},
        "a4": {"team" : "black", "type" : "rook"}
      };
      testHelper.arrayExpect(pieceMovement.whiteRook("a1", testState)).toEqual(['a2', 'a3', 'a4', 'b1', 'c1', 'd1', 'e1']);

      testState = {
        "h8": {"team" : "black", "type" : "rook"},
        "e8": {"team" : "white", "type" : "rook"},
        "h4": {"team" : "white", "type" : "rook"}
      };
      testHelper.arrayExpect(pieceMovement.blackRook("h8", testState)).toEqual(['h7', 'h6', 'h5', 'h4', 'f8', 'g8', 'e8']);
    });

    it('Can extend to edges of the board from the middle', () =>{
      let testState = {
        "d4": {"team" : "white", "type" : "rook"},
      };
      let expected = ['a4', 'b4', 'c4', 'e4', 'f4', 'g4', 'h4', 'd1', 'd2', 'd3', 'd5', 'd6', 'd7', 'd8'];
      testHelper.arrayExpect(pieceMovement.whiteRook("d4", testState)).toEqual(expected);

      testState = {
        "d4": {"team" : "black", "type" : "rook"},
      };
      expected = ['a4', 'b4', 'c4', 'e4', 'f4', 'g4', 'h4', 'd1', 'd2', 'd3', 'd5', 'd6', 'd7', 'd8'];
      testHelper.arrayExpect(pieceMovement.blackRook("d4", testState)).toEqual(expected);
    });
  });
  describe('Bishop (White and Black)', () => {
    it('Cannot move past (or onto) friendly peices', () => {
      let testState = {
        "f8": {"team" : "black", "type" : "bishop"},
        "e7": {"team" : "black", "type" : "pawn"},
        "g7": {"team" : "black", "type" : "pawn"},
      };
      let expected = [];
      testHelper.arrayExpect(pieceMovement.blackBishop("f8", testState)).toEqual(expected);

      testState = {
        "f1": {"team" : "white", "type" : "bishop"},
        "e2": {"team" : "white", "type" : "pawn"},
        "g2": {"team" : "white", "type" : "pawn"},
      };
      expected = [];
      testHelper.arrayExpect(pieceMovement.whiteBishop("f1", testState)).toEqual(expected);
    });

    it('Can move onto (but not past) enemy peices', () => {
      let testState = {
        "d7": {"team" : "black", "type" : "bishop"},
        "b5": {"team" : "white", "type" : "queen"},
        "h3": {"team" : "white", "type" : "rook"},
        "c8": {"team" : "black", "type" : "pawn"}
      };
      let expected = ["e8", "e6", "f5", "g4", "h3", "c6", "b5"];
      testHelper.arrayExpect(pieceMovement.blackBishop("d7", testState)).toEqual(expected);

      testState = {
        "d4": {"team" : "white", "type" : "bishop"},
        "d5": {"team" : "black", "type" : "pawn"},
        "d3": {"team" : "black", "type" : "pawn"},
        "c3": {"team" : "black", "type" : "pawn"},
        "c4": {"team" : "black", "type" : "pawn"},
        "c5": {"team" : "black", "type" : "pawn"},
        "e3": {"team" : "black", "type" : "pawn"},
        "e4": {"team" : "black", "type" : "pawn"},
        "e5": {"team" : "black", "type" : "pawn"}

      };
      expected = ['e3', 'c3', 'e5', 'c5'];
      testHelper.arrayExpect(pieceMovement.whiteBishop("d4", testState)).toEqual(expected);
    });

    it('Can move across the board', () => {
      let testState = {
        "d4": {"team" : "white", "type" : "bishop"},
        "e4": {"team" : "black", "type" : "bishop"}
      };
      let expectedOne = ['e3', 'e5', 'f2', 'f6', 'g1', 'g7', 'h8', 'c3', 'c5', 'b2', 'b6', 'a1', 'a7'];
      let expectedTwo = ['d3', 'd5', 'c2', 'c6', 'b1', 'b7', 'a8', 'f3', 'f5', 'g2', 'g6', 'h1', 'h7'];
      testHelper.arrayExpect(pieceMovement.whiteBishop("d4", testState)).toEqual(expectedOne);
      testHelper.arrayExpect(pieceMovement.blackBishop("e4", testState)).toEqual(expectedTwo);
    });
  });
  describe('Knight (White and Black)', () => {
    it('Cannot move onto friendly peices', () =>{
      let testState = {
        "e4" : {"team" : "white", "type" : "knight"},
        "d2" : {"team" : "white", "type" : "pawn"},
        "f2" : {"team" : "white", "type" : "pawn"},
        "d6" : {"team" : "white", "type" : "pawn"},
        "f6" : {"team" : "white", "type" : "pawn"},
        "c5" : {"team" : "white", "type" : "pawn"},
        "c3" : {"team" : "white", "type" : "pawn"},
        "g5" : {"team" : "white", "type" : "pawn"},
        "g3" : {"team" : "white", "type" : "pawn"}
      };
      let expectedOne = [];
      testHelper.arrayExpect(pieceMovement.whiteKnight("e4", testState)).toEqual(expectedOne);
    });
    it('Can move onto enemy peices', () => {
      let testState = {
        "e4" : {"team" : "black", "type" : "knight"},
        "d2" : {"team" : "white", "type" : "pawn"},
        "f2" : {"team" : "white", "type" : "pawn"},
        "d6" : {"team" : "white", "type" : "pawn"},
        "f6" : {"team" : "white", "type" : "pawn"},
        "c5" : {"team" : "white", "type" : "pawn"},
        "c3" : {"team" : "white", "type" : "pawn"},
        "g5" : {"team" : "white", "type" : "pawn"},
        "g3" : {"team" : "white", "type" : "pawn"}
      };
      let expectedOne = ["g3", "g5", "c3", "c5", "f6", "d6", "f2", "d2"];
      testHelper.arrayExpect(pieceMovement.blackKnight("e4", testState)).toEqual(expectedOne);
    });
    it('Can move as expected from the center of the board', () =>{
      let testState = {
        "e4" : {"team" : "black", "type" : "knight"},
        "d5" : {"team" : "white", "type" : "knight"}
      };
      let expectedOne = ["g3", "g5", "c3", "c5", "f6", "d6", "f2", "d2"];
      testHelper.arrayExpect(pieceMovement.blackKnight("e4", testState)).toEqual(expectedOne);
      let expectedTwo = ["f4", "f6", "b4", "b6", "e7", "c7", "e3", "c3"];
      testHelper.arrayExpect(pieceMovement.whiteKnight("d5", testState)).toEqual(expectedTwo);
    });
    it('Can move as expected from the edges of the board', () => {
      let testState = {
        "a1" : {"team" : "black", "type" : "knight"},
        "b2" : {"team" : "white", "type" : "knight"}
      };
      let expectedOne = ['b3', 'c2'];
      testHelper.arrayExpect(pieceMovement.blackKnight("a1", testState)).toEqual(expectedOne);
      let expectedTwo = ["d1", "d3", "c4", "a4"];
      testHelper.arrayExpect(pieceMovement.whiteKnight("b2", testState)).toEqual(expectedTwo);
    });
  });
  describe("Queen (White and Black)", () =>{
    it('Cannot Move through it\'s team mates', () =>{
      let testState = {
        "a1" : {"team" : "white", "type" : "rook"},
        "b1" : {"team" : "white", "type" : "knight"},
        "c1" : {"team" : "white", "type" : "bishop"},
        "d1" : {"team" : "white", "type" : "queen"},
        "e1" : {"team" : "white", "type" : "king"},
        "f1" : {"team" : "white", "type" : "bishop"},
        "g1" : {"team" : "white", "type" : "knight"},
        "h1" : {"team" : "white", "type" : "rook"},
        "c2" : {"team" : "white", "type" : "pawn"},
        "d2" : {"team" : "white", "type" : "pawn"},
        "e2" : {"team" : "white", "type" : "pawn"}
      };
      testHelper.arrayExpect(pieceMovement.whiteQueen('d1', testState)).toEqual([]);
      testState = {
        "a1" : {"team" : "white", "type" : "rook"},
        "b1" : {"team" : "white", "type" : "knight"},
        "c1" : {"team" : "white", "type" : "bishop"},
        "d1" : {"team" : "white", "type" : "queen"},
        "e1" : {"team" : "white", "type" : "king"},
        "f1" : {"team" : "white", "type" : "bishop"},
        "g1" : {"team" : "white", "type" : "knight"},
        "h1" : {"team" : "white", "type" : "rook"},
        "c2" : {"team" : "white", "type" : "pawn"},
        "d2" : {"team" : "white", "type" : "pawn"},
        "e3" : {"team" : "white", "type" : "pawn"}
      };
      testHelper.arrayExpect(pieceMovement.whiteQueen('d1', testState)).toEqual(['e2', 'f3', 'g4', 'h5']);
    });
    it('Can move onto but not past enemy', () => {
      let testState = {
        "e4" : {"team" : "black", "type": "queen"},
        "d4" : {"team" : "white", "type": "bishop"},
        "f4" : {"team" : "white", "type": "rook"},
        "e3" : {"team" : "white", "type": "pawn"},
        "d3" : {"team" : "white", "type": "pawn"},
        "f3" : {"team" : "white", "type": "queen"},
        "e5" : {"team" : "white", "type": "rook"},
        "d5" : {"team" : "white", "type": "bishop"}
      };
      testHelper.arrayExpect(pieceMovement.blackQueen('e4', testState)).toEqual(['d4', 'f4', 'e3', 'd3', 'f3', 'e5', 'd5', 'f5', 'g6', 'h7']);
    });
  });
});
