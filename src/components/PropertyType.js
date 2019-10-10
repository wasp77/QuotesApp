import React from 'react'

const options = ['SingleFamily', 'Condo', 'Townhouse', 'MultiFamily']
const textFriendly = ['Single Family', 'Condo', 'Townhouse', 'Multi Family']
export class PropertyType extends React.Component {
  render() {
    let propertyOptions = options.map((choice, index) => {
      return <option value={choice} key={index}>{textFriendly[index]}</option>
    })
    return (
      <div>
        <label>Property Type </label>
        <select>
          {propertyOptions}
        </select>
      </div>
    )
  }
}
