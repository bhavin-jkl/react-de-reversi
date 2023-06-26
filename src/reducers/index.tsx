// import { combineReducers } from "redux";
// import squares from "./squares.js";

// const reducer = combineReducers({
//   squares,
// });

// export default reducer;

import { combineReducers, Reducer } from "redux";
import squares from "./squares";

interface RootState {
  // Define your root state properties here
}

const reducer: Reducer<RootState> = combineReducers({
  squares,
});

export default reducer;
