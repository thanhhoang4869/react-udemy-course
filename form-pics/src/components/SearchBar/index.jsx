import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <>
        <div class="ui segment">
          <div className="ui form">
            <div class="field">
              <label>Image search</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
