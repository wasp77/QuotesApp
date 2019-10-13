import React from 'react'
import {connect} from 'react-redux'
import {setCreditScore} from '../actions/selectionActions'
import Form from 'react-bootstrap/Form'


export class CreditScore extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.dispatch(setCreditScore(e.target.value))
  }

  render() {
    return <Form.Control placeholder="Enter credit score" type="number" value={this.props.creditScore} onChange={this.handleChange} min="300" max="800" required/>
  }
}

const mapStateToProps = state => ({
  creditScore: state.selection.creditScore
})

export default connect(mapStateToProps)(CreditScore)
