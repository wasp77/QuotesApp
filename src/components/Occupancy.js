import React from 'react'
import {connect} from 'react-redux'
import {setOccupancy} from '../actions/selectionActions'

const options = ['Primary', 'Secondary', 'Investment']

class Occupancy extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.dispatch(setOccupancy(e.target.value))
  }

  render() {
    let occupancyOptions = options.map((choice, index) => {
      return <option value={choice} key={index}>{choice + ' Residence'}</option>
    })
    return (
      <div>
        <label>Occupancy </label>
        <select value={this.props.occupancy} onChange={this.handleChange}>
          {occupancyOptions}
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  occupancy: state.occupancy
})

export default connect(mapStateToProps)(Occupancy)
