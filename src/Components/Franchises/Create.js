import React from 'react'
import { Redirect } from 'react-router-dom'

import Api from './../../Services/franchises'

class Create extends React.Component {

    //
    constructor(props) {

        //
        super(props)

        //
        this.state = {
            messageSuccessStore: false
        }

        //
        this.storeFranchise = this.storeFranchise.bind(this)
    }

    //
    storeFranchise(event) {

        //
        const newFranchise = {
            name: this.refs.name.value,
            franchisePlayer: this.refs.franchisePlayer.value,
            conference: this.refs.conference.value,
            logo: this.refs.logo.value,
        }

        // 
        Api
            .storeFranchise(newFranchise)
            .then((response) => {
                this.setState({
                    messageSuccessStore: `${response.data.name} successfully registered`
                })
            })
        
        this.refs.name.value = ''
        this.refs.franchisePlayer.value = ''
        this.refs.logo.value = ''

        event.preventDefault()
    }

    //
    render() {
        return (
            <div key="new-franchise-form" className="row">
                <div className="col-md-12">
                    <div className="page-header">
                        <h1>New franchise <small>add a new franchise</small></h1>
                    </div>
                    {
                        this.state.messageSuccessStore &&
                        <div class="alert alert-success" role="alert">
                            { this.state.messageSuccessStore }
                        </div>  
                    }
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name Franchise: </label>
                            <input type="text" ref="name" className="form-control" id="name" placeholder="Name Franchise" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="franchisePlayer">Franchise Player: </label>
                            <input type="text" ref="franchisePlayer" className="form-control" id="franchisePlayer" placeholder="Franchise Player" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="logo">Link Logo: </label>
                            <input type="text" ref="logo" className="form-control" id="logo" placeholder="Link Logo" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="conference">Conference: </label>
                            <select ref="conference" className="form-control">
                                <option value="Eastern">Eastern</option>
                                <option value="Western">Western</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={ this.storeFranchise }>Create</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Create