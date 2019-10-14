import React from 'react'
import {connect} from 'react-redux'
import {setLoanSize} from '../actions/selectionActions'
import Form from 'react-bootstrap/Form'

export class LoanSize extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.dispatch(setLoanSize(e.target.value))
  }

  render() {
    // Step required to allow for decimal entries
    return <Form.Control type="number" min="0.00" step="0.01" value={this.props.loanSize} placeholder="Enter loan amount" onChange={this.handleChange} required/>
  }
}

const mapStateToProps = state => ({
  loanSize: state.selection.loanSize
})

export default connect(mapStateToProps)(LoanSize)
