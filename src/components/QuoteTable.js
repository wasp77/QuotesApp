import React from 'react'
import ReactTable from 'react-table'
import {connect} from 'react-redux'
import 'react-table/react-table.css'

class QuoteTable extends React.Component {
  render() {
    let data = this.props.quotes
    let columns = [{
      Header: 'Lender',
      accessor: 'lenderName'
    },
    {
      Header: 'Product',
      accessor: 'loanType'
    },
    {
      Header: 'Rate',
      accessor: 'interestRate',
      Cell: props => <span>{props.value.toFixed(3) + "%"}</span>
    },
    {
      Header: 'Closing Costs',
      accessor: 'closingCosts',
      Cell: props => <span>{"$" + props.value.toFixed(2)}</span>
    },
    {
      Header: 'Monthly Payment',
      accessor: 'monthlyPayment',
      Cell: props => <span>{"$" + props.value.toFixed(2)}</span>
    },
    {
      Header: 'APR',
      accessor: 'apr',
      Cell: props => <span>{props.value.toFixed(3) + "%"}</span>
    }]
    return <ReactTable data={data} columns={columns} />
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes.quotesList
})

export default connect(mapStateToProps)(QuoteTable)
