import React from "react";
import { render } from "react-dom";
import AddField from "./AddField";

export default class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    return (
      <div>
        <button
          className="btn-open"
          onClick={(e) => this.setState({ show: !this.state.show })}
        >
          Open form todos
        </button>
        {this.state.show && (
          <AddField
            text={this.props.text}
            descr={this.props.descr}
            handleText={this.props.handleText}
            handleDescr={this.props.handleDescr}
            handleSubmit={this.props.handleSubmit}
          />
        )}
      </div>
    );
  }
}
