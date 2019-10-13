import React from 'react'
import {connect} from 'react-redux'
import {setOccupancy} from '../actions/selectionActions'
import Form from 'react-bootstrap/Form'


const options = ['Primary', 'Secondary', 'Investment']

export class Occupancy extends React.Component {
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
      <Form.Control as='select' value={this.props.occupancy} onChange={this.handleChange}>
        {occupancyOptions}
      </Form.Control>
      // <Form.Group>
      //   <Form.Label>Occupancy </Form.Label>
      //   <Form.Control as='select' value={this.props.occupancy} onChange={this.handleChange}>
      //     {occupancyOptions}
      //   </Form.Control>
      // </Form.Group>
    )
  }
}

const mapStateToProps = state => ({
  occupancy: state.selection.occupancy
})

export default connect(mapStateToProps)(Occupancy)
