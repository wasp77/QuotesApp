import React from 'react'
import {connect} from 'react-redux'
import {setLoanSize} from '../actions/selectionActions'


class LoanSize extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.dispatch(setLoanSize(e.target.value))
  }

  render() {
    return (
      <div>
        <label>Loan Size </label>
        <input type="number" value={this.props.loanSize} onChange={this.handleChange} min="0.01" step="0.01" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loanSize: state.loanSize
})

export default connect(mapStateToProps)(LoanSize)
