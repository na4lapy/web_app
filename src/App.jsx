// @flow
import React, { Component } from 'react';
import './App.css';
import fetchAnimals from './Api';

class App extends Component {
  state: {
    animals: Array<any>
  };

  async componentWillMount(): any {
    const animals = await fetchAnimals();
    this.setState({ animals });
  }

  render() {
    return <div className="App" />;
  }
}

export default App;
