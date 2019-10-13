import React from 'react'
import {useDispatch} from 'react-redux'
import CreditScore from './CreditScore'
import LoanSize from './LoanSize'
import Occupancy from './Occupancy'
import PropertyType from './PropertyType'
import {RateButton} from './RateButton'
import {fetchQuotes} from '../actions/quoteActions'


const SelectionForm = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchQuotes())
  }
  return (
    <form onSubmit={handleSubmit}>
      <CreditScore />
      <LoanSize />
      <Occupancy />
      <PropertyType />
      <RateButton />
    </form>
  )
}

export default SelectionForm
