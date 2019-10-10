import React from 'react'

export class LoanSize extends React.Component {
  render() {
    return (
      <div>
        <label>Loan Size $</label>
        <input type="number" min="0.01" step="0.01" />
      </div>
    )
  }
}
