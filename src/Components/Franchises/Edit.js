import React from 'react'

import Api from './../../Services/franchises'

class Edit extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      messageSuccessStore: false
    }

    this.updateFranchise = this.updateFranchise.bind(this)
  }

  componentDidMount () {
    Api
      .getFranchiseById(this.props.match.params.id)
      .then((response) => {
        this.refs.name.value = response.data.name
        this.refs.franchisePlayer.value = response.data.franchisePlayer
        this.refs.conference.value = response.data.conference
        this.refs.logo.value = response.data.logo
      })
  }

  updateFranchise (event) {
    const franchise = {
      id: this.props.match.params.id,
      name: this.refs.name.value,
      franchisePlayer: this.refs.franchisePlayer.value,
      conference: this.refs.conference.value,
      logo: this.refs.logo.value
    }

    Api
      .updateFranchise(franchise)
      .then((response) => {
        this.setState({
          messageSuccessStore: `${response.data.name} successfully updated`
        })
      })

    event.preventDefault()
  }

  render () {
    return (
      <div key='new-franchise-form' className='row'>
        <div className='col-md-12'>
          <div className='page-header'>
            <h1>Edit Franchise</h1>
          </div>
          {
            this.state.messageSuccessStore &&
            <div className='alert alert-success' role='alert'>
              { this.state.messageSuccessStore }
            </div>
          }
          <form>
            <div className='form-group'>
              <label htmlFor='name'>Name Franchise: </label>
              <input type='text' ref='name' className='form-control' id='name' placeholder='Name Franchise' />
            </div>
            <div className='form-group'>
              <label htmlFor='franchisePlayer'>Franchise Player: </label>
              <input type='text' ref='franchisePlayer' className='form-control' id='franchisePlayer' placeholder='Franchise Player' />
            </div>
            <div className='form-group'>
              <label htmlFor='logo'>Link Logo: </label>
              <input type='text' ref='logo' className='form-control' id='logo' placeholder='Link Logo' />
            </div>
            <div className='form-group'>
              <label htmlFor='conference'>Conference: </label>
              <select ref='conference' className='form-control'>
                <option value='Eastern'>Eastern</option>
                <option value='Western'>Western</option>
              </select>
            </div>
            <button type='submit' className='btn btn-primary' onClick={this.updateFranchise}>Edit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Edit
