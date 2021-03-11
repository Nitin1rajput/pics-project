import React from "react";
import unsplash from "./api/unsplash";
import "./App.css";
import ImageList from "./components/imageList/imageList";
import SearchBar from "./components/searchBar/searchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: res.data.results });
    console.log(this.state.images);
  };
  render() {
    return (
      <div className="App">
        <div className="ui container search-bar">
          <SearchBar onSubmit={this.onSearchSubmit} />
          {/* <h1>Found:{this.state.images.length}</h1> */}
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
