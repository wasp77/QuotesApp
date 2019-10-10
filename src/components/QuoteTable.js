import React from 'react'
import ReactTable from 'react-table'
import {connect} from 'react-redux'
import 'react-table/react-table.css'

export class QuoteTable extends React.Component {
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
      accessor: 'interestRate'
    },
    {
      Header: 'Closing Costs',
      accessor: 'closingCosts'
    },
    {
      Header: 'Monthly Payment',
      accessor: 'monthlyPayment'
    },
    {
      Header: 'APR',
      accessor: 'apr'
    }]
    return <ReactTable data={data} columns={columns} />
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes.quotesList
})

export default connect(mapStateToProps)(QuoteTable)
