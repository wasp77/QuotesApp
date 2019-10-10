import React from 'react'

const options = ['Primary Residence', 'Secondary Residence', 'Investment Residence']

export class Occupancy extends React.Component {
  render() {
    let occupancyOptions = options.map((choice, index) => {
      return <option value={choice} key={index}>{choice}</option>
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
