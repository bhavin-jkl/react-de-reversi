import { Action } from 'redux';

// Define the action types
enum ActionTypes {
  SQUARE = 'SQUARE',
}

// Define the action interfaces
interface SquareAction extends Action<ActionTypes> {
  type: ActionTypes.SQUARE;
  number: number;
}

// Create the action creators
export const onSquareClick = (number: number): SquareAction => {
  return {
    type: ActionTypes.SQUARE,
    number,
  };
};


// import * as actionTypes from "../constants/actionTypes";

// export const onSquareClick = (number) => {
//   return {
//     type: actionTypes.SQUARE,
//     number,
//   };
// };
