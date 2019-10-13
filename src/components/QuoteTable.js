import React from 'react'
import ReactTable from 'react-table'
import {connect} from 'react-redux'
import 'react-table/react-table.css'

export class QuoteTable extends React.Component {
  render() {
    let data = this.props.quotes
    let columns = [{
      Header: 'Lender',
      accessor: 'lenderName',
    },
    {
      Header: 'Product',
      accessor: 'loanType',
      Cell: props => <div style={{textAlign: 'center'}}>{props.value}</div>
    },
    {
      Header: 'Rate',
      accessor: 'interestRate',
      Cell: props => <div style={{textAlign: 'center'}}>{props.value.toFixed(3) + "%"}</div>
    },
    {
      Header: 'Closing Costs',
      accessor: 'closingCosts',
      Cell: props => <div style={{textAlign: 'center'}}>{"$" + props.value.toFixed(2)}</div>
    },
    {
      Header: 'Monthly Payment',
      accessor: 'monthlyPayment',
      Cell: props => <div style={{textAlign: 'center'}}>{"$" + props.value.toFixed(2)}</div>
    },
    {
      Header: 'APR',
      accessor: 'apr',
      Cell: props => <div style={{textAlign: 'center'}}>{props.value.toFixed(3) + "%"}</div>
    }]

    if (this.props.error) {
      return <ReactTable data={data} columns={columns}   noDataText='Error!'/>
    }

    if (this.props.loading) {
      return <ReactTable data={data} columns={columns} loading={true} noDataText='No Quotes'/>
    }

    return <ReactTable data={data} columns={columns} noDataText='No Quotes'/>

  }
}

const mapStateToProps = state => ({
  loading: state.quotes.loading,
  quotes: state.quotes.quotesList,
  error: state.quotes.error
})

export default connect(mapStateToProps)(QuoteTable)
