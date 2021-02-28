import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      inputValue: e.target.value,
    })
  };
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props)
    const{onSubmit}=this.props;
    console.log(onSubmit)
    const{inputValue}=this.state
    onSubmit(inputValue)
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
