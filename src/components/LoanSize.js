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
    if (this.props.loanSize > 0) {
      return <Form.Control type="number" value={this.props.loanSize} placeholder="Enter loan amount in dollars" onChange={this.handleChange} min="0.00" required/>
    } else {
      return <Form.Control type="number" placeholder="Enter loan amount in dollars" onChange={this.handleChange} min="0.00" required/>
    }
  }
}

const mapStateToProps = state => ({
  loanSize: state.selection.loanSize
})

export default connect(mapStateToProps)(LoanSize)
