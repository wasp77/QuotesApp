import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class QuoteTable extends React.Component {
  render() {
    let data = []
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
