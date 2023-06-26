import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as actions from "../actions";
import ReactDeReversi from "../components/ReactDeReversi";
// import { RootState } from "../types"; // Assuming you have a RootState type defined

interface Props {
  squares: any; // Replace 'any' with the appropriate type for squares
  actions: typeof actions; // Adjust the type based on the actions import
}

const ReactDeReversiContainer: React.FC<Props> = ({ squares, actions }) => {
  return <ReactDeReversi squares={squares} actions={actions} />;
};

const mapStateToProps = (state: any) => ({
  squares: state.squares,
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactDeReversiContainer);

// import React from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as actions from "../actions";
// import ReactDeReversi from "../components/ReactDeReversi";

// const ReactDeReversiContainer = ({ squares, actions }) => {
//   return <ReactDeReversi squares={squares} actions={actions} />;
// };

// const mapStateToProps = (state) => ({
//   squares: state.squares,
// });

// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators(actions, dispatch),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ReactDeReversiContainer);
