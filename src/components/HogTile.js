import React from "react";
import HogDetails from "./HogDetails";

class HogTile extends React.Component {
  constructor() {
    super();
    this.state = {
      details: false
    };
    this.getHogImg = this.getHogImg.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      details: !this.state.details
    });
  };

  getHogImg = () => {
    let imgUrl = `${this.props.hog.name
      .toLowerCase()
      .split(" ")
      .join("_")}`;
    imgUrl = require(`../hog-imgs/${imgUrl}.jpg`);
    return imgUrl;
  };

  render() {
    return (
      <div style={{ marginTop: 14 }} className="column ui card">
        <img src={this.getHogImg()} alt={this.props.hog.name} />
        <h3>{this.props.hog.name}</h3>
        {this.state.details ? (
          <div>
            <button onClick={this.handleClick}>Hide Details</button>
            <HogDetails hog={this.props.hog} />
          </div>
        ) : (
          <button onClick={this.handleClick}>Show Details</button>
        )}
      </div>
    );
  }
}

export default HogTile;
