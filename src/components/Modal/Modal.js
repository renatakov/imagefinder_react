import React, { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.removeE)
  }
  componentWillUnmount(){
    window.removeEventListener('keydown', this.removeE)
  }
  removeE = (e) => {
    if(e.key === "Escape") {
      this.props.onClose();
    }
  }
  render() {
    return (
      <>

        <div className="Overlay">
          <div className="Modal">
            <img src={this.props.largeImageUrl} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
