
const pieceMovement = {
  whitePawn,
  blackPawn,
  whiteRook,
  blackRook,
  whiteBishop,
  blackBishop,
  whiteKnight,
  blackKnight,
  whiteQueen,
  blackQueen
};

function pawn(color, cell, boardState){
  let moves = [];
  let column = cell[0];
  let row = cell[1];
  let enemy = (color == "white") ? "black" : "white";
  let direction = (color == "white") ? 1 : -1;
  let boostRow = (color == "white") ? 2 : 7;
  let leftDiag = (String.fromCharCode(column.charCodeAt(0)-1)+(parseInt(row)+direction));
  let rightDiag = (String.fromCharCode(column.charCodeAt(0)+1)+(parseInt(row)+direction));
  if(row==boostRow){
    moves.push(column+(parseInt(row)+direction));
    moves.push(column+(parseInt(row)+2*direction));
  }
  else{
    moves.push(column+(parseInt(row)+direction));
  }
  if(leftDiag in boardState && boardState[leftDiag].team==enemy){
    moves.push(leftDiag);
  }
  if(rightDiag in boardState && boardState[rightDiag].team==enemy){
    moves.push(rightDiag);
  }
  if(column+(parseInt(row)+2*direction) in boardState){//There is a piece here blocking it
    let index = moves.indexOf(column+(parseInt(row)+2*direction));
    if (index!==-1){
      moves.splice(index, 1);
    }
  }
  if(column+(parseInt(row)+direction) in boardState){//There is a piece here blocking it
    let index = moves.indexOf(column+(parseInt(row)+direction));
    if (index!==-1){
      moves.splice(index, 1);
    }
    index = moves.indexOf(column+(parseInt(row)+2*direction));
    if (index!==-1){
      moves.splice(index, 1);
    }
  }
  return moves;
}

function rook(color, cell, boardState){
  let moves = [];
  let column = cell[0];
  let row = cell[1];
  let enemy = (color == "white") ? "black" : "white";
  let rows = [1, 2, 3, 4, 5, 6, 7, 8];
  let columns = ['a','b','c','d','e','f','g', 'h'];
  let currentRow = parseInt(row);
  let currentColumnIndex = columns.indexOf(column);
  let currentColumn = columns[currentColumnIndex];
  while(currentRow < 8){//get all the rows you can move to upward
    currentRow++;
    if (currentColumn+currentRow in boardState){
      if (boardState[currentColumn+currentRow].team == enemy){
        moves.push(currentColumn+currentRow);
      }
      currentRow = 9; //break out of the loop
    }
    else {
      moves.push(currentColumn+currentRow);
    }
  }
  currentRow = parseInt(row);
  while(currentRow > 1){//get all the rows you can move to downward
    currentRow--;
    if (currentColumn+currentRow in boardState){
      if (boardState[currentColumn+currentRow].team == enemy){
        moves.push(currentColumn+currentRow);
      }
      currentRow = 0; //break out of the loop
    }
    else {
      moves.push(currentColumn+currentRow);
    }
  }
  currentRow = parseInt(row);
  while(currentColumnIndex < 7){//get all the columns you can move to rightward
    currentColumnIndex++;
    currentColumn = columns[currentColumnIndex];
    if (currentColumn+currentRow in boardState){
      if (boardState[currentColumn+currentRow].team == enemy){
        moves.push(currentColumn+currentRow);
      }
      currentColumnIndex = 9; //break out of the loop
    }
    else {
      moves.push(currentColumn+currentRow);
    }
  }
  currentColumnIndex = columns.indexOf(column);
  while(currentColumnIndex > 0){//get all the columns you can move to leftward
    currentColumnIndex--;
    currentColumn = columns[currentColumnIndex];
    if (currentColumn+currentRow in boardState){
      if (boardState[currentColumn+currentRow].team == enemy){
        moves.push(currentColumn+currentRow);
      }
      currentColumnIndex = -1; //break out of the loop
    }
    else {
      moves.push(currentColumn+currentRow);
    }
  }
  return moves;
}

function bishop(color, cell, boardState){
  let moves = [];
  let column = cell[0];
  let row = cell[1];
  let enemy = (color == "white") ? "black" : "white";
  let rows = [1, 2, 3, 4, 5, 6, 7, 8];
  let columns = ['a','b','c','d','e','f','g', 'h'];
  let currentColumnIndex = columns.indexOf(column);
  let currentRow = parseInt(row);
  let currentColumn = columns[currentColumnIndex];

  while(currentColumnIndex > 0 && currentRow > 1){//get all the cells you can move to bottom-left
    currentColumnIndex--;
    currentRow--;
    currentColumn = columns[currentColumnIndex];
    if (currentColumn+currentRow in boardState){
      if (boardState[currentColumn+currentRow].team == enemy){
        moves.push(currentColumn+currentRow);
      }
      currentColumnIndex = -1; //break out of the loop
    }
    else {
      moves.push(currentColumn+currentRow);
    }
  }

  currentColumnIndex = columns.indexOf(column);
  currentRow = parseInt(row);

  while(currentColumnIndex < 7 && currentRow < 8){//get all the cells you can move to top-right
    currentColumnIndex++;
    currentRow++;
    currentColumn = columns[currentColumnIndex];
    if (currentColumn+currentRow in boardState){
      if (boardState[currentColumn+currentRow].team == enemy){
        moves.push(currentColumn+currentRow);
      }
      currentColumnIndex = 9; //break out of the loop
    }
    else {
      moves.push(currentColumn+currentRow);
    }
  }

  currentColumnIndex = columns.indexOf(column);
  currentRow = parseInt(row);

  while(currentColumnIndex < 7 && currentRow > 1){//get all the cells you can move to bottom-right
    currentColumnIndex++;
    currentRow--;
    currentColumn = columns[currentColumnIndex];
    if (currentColumn+currentRow in boardState){
      if (boardState[currentColumn+currentRow].team == enemy){
        moves.push(currentColumn+currentRow);
      }
      currentColumnIndex = 9; //break out of the loop
    }
    else {
      moves.push(currentColumn+currentRow);
    }
  }

  currentColumnIndex = columns.indexOf(column);
  currentRow = parseInt(row);

  while(currentColumnIndex > 0 && currentRow < 8){//get all the cells you can move to bottom-right
    currentColumnIndex--;
    currentRow++;
    currentColumn = columns[currentColumnIndex];
    if (currentColumn+currentRow in boardState){
      if (boardState[currentColumn+currentRow].team == enemy){
        moves.push(currentColumn+currentRow);
      }
      currentColumnIndex = -1; //break out of the loop
    }
    else {
      moves.push(currentColumn+currentRow);
    }
  }
  return moves;
}

function knight(color, cell, boardState){
  let moves = [];
  let column = cell[0];
  let row = cell[1];
  let enemy = (color == "white") ? "black" : "white";
  let rows = [1, 2, 3, 4, 5, 6, 7, 8];
  let columns = ['a','b','c','d','e','f','g', 'h'];
  let currentColumn = columns[currentColumnIndex];
  function addLeftToRightLs(currentColumnIndex){
    let subMoves = [];
    currentColumn = columns[currentColumnIndex];
    let currentRow = parseInt(row) - 1;
    if (currentColumn+currentRow in boardState && rows.indexOf(currentRow)!=-1){
      if (boardState[currentColumn+currentRow].team == enemy){
        subMoves.push(currentColumn+currentRow);
      }
    }
    else if(rows.indexOf(currentRow)!=-1) {
      subMoves.push(currentColumn+currentRow);
    }

    currentRow = parseInt(row) + 1;

    if (currentColumn+currentRow in boardState && rows.indexOf(currentRow)!=-1){
      if (boardState[currentColumn+currentRow].team == enemy){
        subMoves.push(currentColumn+currentRow);
      }
    }
    else if(rows.indexOf(currentRow)!=-1) {
      subMoves.push(currentColumn+currentRow);
    }
    return subMoves;
  }
  function addUpToDownLs(currentRow){
    let subMoves = [];
    let currentColumnIndex = columns.indexOf(column) + 1;
    currentColumn = columns[currentColumnIndex];

    if (currentColumn+currentRow in boardState && columns.indexOf(currentColumn)!=-1){
      if (boardState[currentColumn+currentRow].team == enemy){
        subMoves.push(currentColumn+currentRow);
      }
    }
    else if(columns.indexOf(currentColumn)!=-1) {
      subMoves.push(currentColumn+currentRow);
    }

    currentColumnIndex = columns.indexOf(column) - 1;
    currentColumn = columns[currentColumnIndex];

    if (currentColumn+currentRow in boardState && columns.indexOf(currentColumn)!=-1){
      if (boardState[currentColumn+currentRow].team == enemy){
        subMoves.push(currentColumn+currentRow);
      }
    }
    else if(columns.indexOf(currentColumn)!=-1) {
      subMoves.push(currentColumn+currentRow);
    }
    return subMoves;
  }
  let currentColumnIndex = columns.indexOf(column) + 2;

  if(currentColumnIndex < columns.length){
    moves.push.apply(moves, addLeftToRightLs(currentColumnIndex));
  };

  currentColumnIndex = columns.indexOf(column) - 2;

  if(currentColumnIndex >= 0){
    moves.push.apply(moves, addLeftToRightLs(currentColumnIndex));
  };

  let currentRow = parseInt(row) + 2;

  if(currentRow < rows.length+1){
    moves.push.apply(moves, addUpToDownLs(currentRow));
  };

  currentRow = parseInt(row) - 2;

  if(currentRow > 0){
    moves.push.apply(moves, addUpToDownLs(currentRow));
  };

  return moves;
}

function queen(color, cell, boardState){
  let moves = [];
  moves.push.apply(moves, rook(color, cell, boardState));//A queen is really just a rook bishop hybrid
  moves.push.apply(moves, bishop(color, cell, boardState));
  return moves;
};

function whitePawn(cell, boardState){
  return pawn("white", cell, boardState);
}

function blackPawn(cell, boardState){
  return pawn("black", cell, boardState);
}

function whiteRook(cell, boardState){
  return rook("white", cell, boardState);
}

function blackRook(cell, boardState){
  return rook("black", cell, boardState);
}

function whiteBishop(cell, boardState){
  return bishop("white", cell, boardState);
}

function blackBishop(cell, boardState){
  return bishop("black", cell, boardState);
}

function whiteKnight(cell, boardState){
  return knight("white", cell, boardState);
}

function blackKnight(cell, boardState){
  return knight("black", cell, boardState);
}

function whiteQueen(cell, boardState){
  return queen("white", cell, boardState);
}

function blackQueen(cell, boardState){
  return queen("black", cell, boardState);
}

export default pieceMovement;
