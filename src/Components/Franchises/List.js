import React from 'react'
import { Link } from 'react-router-dom'

import Api from './../../Services/franchises'

class List extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      messageSuccessDelete: false,
      franchises: []
    }

    this.loadFranchises = this.loadFranchises.bind(this)
    this.renderLinesTable = this.renderLinesTable.bind(this)
    this.destroyFranchise = this.destroyFranchise.bind(this)
  }

  componentDidMount () {
    this.loadFranchises()
  }

  loadFranchises () {
    this.setState({ isLoading: true })

    Api
      .getFranchises()
      .then((response) => {
        this.setState({
          isLoading: false,
          franchises: response.data
        })
      })
  }

  destroyFranchise (franchiseId) {
    if (window.confirm('Do you really want to exclude this franchise?')) {
      Api
        .destroyFranchise(franchiseId)
        .then((response) => {
          this.setState({
            messageSuccessDelete: `Franchise successfully excluded`
          })
          this.loadFranchises()
        })
    }
  }

  renderLinesTable (franchise) {
    return (
      <tr key={franchise.name}>
        <td width='50'>
          <img width='100' src={franchise.logo} alt={franchise.name} />
        </td>
        <td>{ franchise.name }</td>
        <td><strong>{ franchise.franchisePlayer }</strong></td>
        <td>
          <Link className='btn btn-warning' to={`/franchises/edit/${franchise.id}`}>
            <span className='glyphicon glyphicon-pencil' aria-hidden='true' /> Edit
          </Link>&nbsp;|&nbsp;
          <a className='btn btn-danger' onClick={() => this.destroyFranchise(franchise.id)}>
            <span className='glyphicon glyphicon-trash' aria-hidden='true' /> Delete
          </a>
        </td>
      </tr>
    )
  }

  render () {
    return (
      <div key='table-franchises' className='row'>
        <div className='col-md-12'>
          <div className='page-header'>
            <h1>NBA Franchises <small>all franchises</small></h1>
          </div>
          {
            this.state.messageSuccessDelete &&
            <div className='alert alert-success' role='alert'>
              { this.state.messageSuccessDelete }
            </div>
          }
          {
            this.state.isLoading &&
            <p>Carregando, aguarde...</p>
          }
          {
            !this.state.isLoading && this.state.franchises.length === 0 &&
            <div className='alert alert-danger'>
                            Nenhuma franquia cadastrada...
            </div>
          }
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th />
                <th>Name</th>
                <th>Franchise Player</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                !this.state.isLoading &&
                this.state.franchises.map(this.renderLinesTable)
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default List
