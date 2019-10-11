import React from 'react'
import {connect} from 'react-redux'
import {fetchQuotes} from '../actions/quoteActions'

class RateButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.dispatch(fetchQuotes())
  }
  //remove the valid check 
  render() {
    return <button disabled={!this.props.valid} onClick={this.handleClick}>Quote Rates</button>
  }
}

const mapStateToProps = state => ({
  valid: state.selection.valid
})

export default connect(mapStateToProps)(RateButton)
