import React from 'react'
import {connect} from 'react-redux'
import {setCreditScore} from '../actions/selectionActions'

class CreditScore extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.dispatch(setCreditScore(e.target.value))
  }

  render() {
    return (
      <div>
        <label>Credit Score </label>
        <input type="number" value={this.props.creditScore} onChange={this.handleChange} min="300" max="800" required/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  creditScore: state.selection.creditScore
})

export default connect(mapStateToProps)(CreditScore)
