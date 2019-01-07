import React, { Component } from "react";

class SearchBar extends Component {
  //term is short for term search
  state = { term: "" };

  inputHandler = event => {
    this.setState({ term: event.target.value });
  };

  onformHandler = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    //make sure we call callback from parent component
    //our parent component is told what the current state is
  };

  render() {
    return (
      <div className="seacrh-bar ui segment">
        <form className="ui form" onSubmit={this.onformHandler}>
          <div className="field" />
          <label>
            <strong>Video Search</strong>
          </label>
          <input
            onChange={this.inputHandler}
            value={this.state.term}
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
