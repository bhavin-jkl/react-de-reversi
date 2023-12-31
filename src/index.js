import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDeReversiContainer from "./containers/ReactDeReversiContainer";
import reducer from "./reducers";

import "./assets/stylesheets/sanitize.min.css";
import "./assets/stylesheets/index.css";
import "./assets/stylesheets/ReactDeReversi.css";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <ReactDeReversiContainer />
  </Provider>
);

render(<App />, document.getElementById("react-de-reversi"));
