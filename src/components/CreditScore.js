import React from 'react'

export class CreditScore extends React.Component {
  render() {
    return (
      <div>
        <label>Credit Score </label>
        <input type="number" min="250" max="900"/> 
      </div>
    )
  }
}
