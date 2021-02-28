import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.js";
import imageApi from "./services/imageApi.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.js";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";
import Button from "./components/Button/Button.js";
import Loader from "./components/Loader/Loader.js";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    query: "",
    page: 1,
    images: [],
    isOpen: false,
    largeImageUrl: "",
  };
  componentDidMount() {
    console.log("mount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("update");
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }

    if (this.state.images !== prevState.images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  closeModal = () => {
    this.setState({isOpen: false })
  }

  componentWillUnmount() {}
  getQuery = (value) => {
    this.setState({
      query: value,
    });
  };
  fetchImages = () => {
    const { query, page } = this.state;
    imageApi
      .getFetch(query, page)
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          this.setState((prev) => ({
            images: [...prev.images, ...data],
            page: prev.page + 1,
          }));
        }
      })
      .catch((error) => console.log(error));
  };
  showModal = (largeImageUrl) => {
    this.setState({ isOpen: true, largeImageUrl: largeImageUrl,});
  };

  render() {
    return (
      <>
        <h2> ImageFinder </h2>
        <SearchBar onSubmit={this.getQuery} />
        <ImageGallery props={this.state.images} showModal={this.showModal} />
        <Button fetchImages={this.fetchImages} />
        <Loader />
        {this.state.isOpen === true && (
          <Modal largeImageUrl={this.state.largeImageUrl} onClose={this.closeModal}/>
        )}
      </>
    );
  }
}

export default App;
