import React from "react";
import { connect } from "react-redux";
import { purgeTodo } from "../redux/actions";

class PurgeTodo extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePurgeTodo = () => {
    this.props.purgeTodo();
  };

  render() {
    return (
      <div>
        <button onClick={this.handlePurgeTodo}>
          Purge Todos
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { purgeTodo }
)(PurgeTodo);
