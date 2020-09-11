import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { Button } from 'antd';
import 'antd/dist/antd.css';



class App extends Component {
  render() {
    const { fetching, dog, onRequestDog, error, onRequestCat, cat, catfetching, caterror } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          {console.log(dog)}
          <img src={dog || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dog/Cat Saga</h1>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
            <p className="App-intro">Replace the React icon with a dog!</p>
          )}

        {/* {cat ? (
          <p className="App-intro">Keep clicking for new cats</p>
        ) : (
            <p className="App-intro">Replace the React icon with a cat!</p>
          )} */}
        {fetching ? (
          <Button disabled>Fetching...</Button>
        ) : (
            <Button onClick={onRequestDog}>Request a Dog</Button>
          )}

        {/* {catfetching ? (
          <Button disabled>Fetching...</Button>
        ) : (
            <Button onClick={onRequestCat}>Request a Cat</Button>
          )} */}
        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}


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
