import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { fetching, dog, onRequestDog, error, onRequestCat, cat, catfetching, caterror } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={ dog || logo} className="App-logo" alt="logo" />
          {cat? <img src={ cat} className="App-logo" alt="logo" />:<p/>}
          <h1 classNamto Ce="App-title">Welcome To Cat/Dog Redux Saga</h1>
        </header>
          {console.log(cat)}
        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
            <p className="App-intro">Replace the React icon with a dog!</p>
          )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
            <button onClick={onRequestDog}>Request a Dog</button>
          )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

        <button onClick={onRequestCat}>Request a Cat</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error,
    catfetching: state.catfetching,
    cat: state.cat,
    caterror: state.caterror
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" }),
    onRequestCat: () => dispatch({ type: "API_CAT_REQUEST" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
