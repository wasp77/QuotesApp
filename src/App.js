import React, { Component } from 'react';
import QuoteTable from './components/QuoteTable'
import SelectionForm from './components/SelectionForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SelectionForm />
        <QuoteTable />
      </div>
    );
  }
}

export default App;
