import React from 'react'

const options = ['Primary', 'Secondary', 'Investment']

export class Occupancy extends React.Component {
  render() {
    let occupancyOptions = options.map((choice, index) => {
      return <option value={choice} key={index}>{choice + ' Residence'}</option>
    })

    return (
      <div>
        <label>Occupancy </label>
        <select>
          {occupancyOptions}
        </select>
      </div>
    )
  }
}
