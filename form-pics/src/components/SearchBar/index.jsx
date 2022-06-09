import React, { Component } from "react";

export default class SearchBar extends Component {
  // state = { password: "", message: "Password must be more than 4 character" };
  state = { term: "" };

  //to prevent undefined state in function scope
  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.term);
  };

  render() {
    return (
      <>
        <div className="ui segment">
          <form className="ui form">
            <div className="field">
              <label>Image search</label>
              <input
                type="text"
                value={this.state.term}
                onChange={(e) => {
                  this.setState({ term: e.target.value });
                }}
              />
            </div>
          </form>
        </div>

        {/* <div className="ui segment">
          <div className="ui form">
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                value={this.state.password}
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
              />
              <label>
                {this.state.password.length < 5
                  ? "Password must be more than 4 charater"
                  : ""}
              </label>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}
