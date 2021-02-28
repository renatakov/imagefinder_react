import React, { Component } from "react";

class Button extends Component {
  render() {
    return(
      <>
    <button type="button" onClick={this.props.fetchImages}>Load more...</button>
      </>
    )
  }
}

export default Button;