import React from 'react'
import {useDispatch} from 'react-redux'
import CreditScore from './CreditScore'
import LoanSize from './LoanSize'
import Occupancy from './Occupancy'
import PropertyType from './PropertyType'
import {RateButton} from './RateButton'
import {fetchQuotes} from '../actions/quoteActions'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const formStyle = {
  paddingTop: 20
}

const SelectionForm = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchQuotes())
  }
  return (
    <Form onSubmit={handleSubmit} style={formStyle}>
      <Form.Row>
        <Col>
          <Form.Group as={Row}>
            <Form.Label column sm={3} style={{textAlign: 'right'}}>Loan Size </Form.Label>
            <Col sm={9}>
              <LoanSize />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3} style={{textAlign: 'right'}}>Credit Score </Form.Label>
            <Col sm={9}>
              <CreditScore />
            </Col>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group as={Row}>
            <Form.Label column sm={3} style={{textAlign: 'right'}}>Property Type </Form.Label>
            <Col sm={9}>
              <PropertyType />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3} style={{textAlign: 'right'}}>Occupancy </Form.Label>
            <Col sm={9}>
              <Occupancy />
            </Col>
          </Form.Group>
          <Form.Group as={Row} style={{float: 'right'}}>
            <Col>
              <RateButton />
            </Col>
          </Form.Group>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default SelectionForm
