import React, { Component } from 'react';
import QuoteTable from './components/QuoteTable'
import SelectionForm from './components/SelectionForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const containerStyle = {
  paddingTop: 50,
  paddingBottom: 50,
  fontFamily: 'Nobile, Georgia, Times, serif',
  boxShadow: '0 0 1em 1em #ccc'

}

class App extends Component {
  render() {
    return (
      <Container style={containerStyle}>
        <Row className="justify-content-md-center">
          <Col>
            <SelectionForm />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <QuoteTable />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
