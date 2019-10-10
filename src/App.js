import React, { Component } from 'react';
import CreditScore from './components/CreditScore'
import LoanSize from './components/LoanSize'
import Occupancy from './components/Occupancy'
import PropertyType from './components/PropertyType'
import {QuoteTable} from './components/QuoteTable'
import {RateButton} from './components/RateButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreditScore />
        <LoanSize />
        <Occupancy />
        <PropertyType />
        <RateButton />
        <QuoteTable />
      </div>
    );
  }
}

export default App;
