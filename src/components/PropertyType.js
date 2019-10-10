import React from 'react'

const options = ['Single Family', 'Condo', 'Townhouse', 'Multi Family']
export class PropertyType extends React.Component {
  render() {
    let propertyOptions = options.map((choice, index) => {
      return <option value={choice} key={index}>{choice}</option>
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
