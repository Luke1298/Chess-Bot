import {createAction} from 'redux-actions';

export const PATCH_BOARD_STATE = 'PATCH_BOARD_STATE';
export const patchBoardState = createAction(PATCH_BOARD_STATE);

export const PATCH_POSSIBLE_MOVES = 'PATCH_POSSIBLE_MOVES';
export const patchPossibleMoves = createAction(PATCH_POSSIBLE_MOVES);

export const PATCH_CURRENT_SELECTION = 'PATCH_CURRENT_SELECTION';
export const patchCurrentSelection = createAction(PATCH_CURRENT_SELECTION);
