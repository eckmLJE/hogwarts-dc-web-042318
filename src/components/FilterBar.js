import React, { Component } from "react";

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <form>
          <select
            className="ui selection dropdown"
            onChange={e => this.props.handleSort(e.target.value)}
            defaultValue=""
          >
            <option value="">Not Sorted</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
          <select
            className="ui selection dropdown"
            onChange={e => this.props.handleFilter(e.target.value)}
            defaultValue="both"
          >
            <option value="both">Both Greased and Not</option>
            <option value="greased">Greased</option>
            <option value="not greased">Not Greased</option>
          </select>
        </form>
      </div>
    );
  }
}

export default FilterBar;
