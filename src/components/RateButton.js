import React from 'react'
import {connect} from 'react-redux'

export class RateButton extends React.Component {
  render() {
    return <button disabled={!this.props.valid}>Quote Rates</button>
  }
}

const mapStateToProps = state => ({
  valid: state.selection.valid
})

export default connect(mapStateToProps)(RateButton)
