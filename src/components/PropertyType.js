import React from 'react'
import {connect} from 'react-redux'
import {setPropertyType} from '../actions/selectionActions'

const options = ['SingleFamily', 'Condo', 'Townhouse', 'MultiFamily']
const textFriendly = ['Single Family', 'Condo', 'Townhouse', 'Multi Family']

export class PropertyType extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.dispatch(setPropertyType(e.target.value))
  }

  render() {
    let propertyOptions = options.map((choice, index) => {
      return <option value={choice} key={index}>{textFriendly[index]}</option>
    })
    return (
      <div>
        <label>Property Type </label>
        <select value={this.props.propertyType} onChange={this.handleChange}>
          {propertyOptions}
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  propertyType: state.selection.propertyType
})

export default connect(mapStateToProps)(PropertyType)
