import React from 'react'

import Api from './../../Services/franchises'

class List extends React.Component {

    //
    constructor(props) {

        super(props)

        this.state = {
            isLoading: false,
            franchises: []
        }

        this.renderLinesTable = this.renderLinesTable.bind(this)
    }

    //
    componentDidMount() {

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

    //
    renderLinesTable(franchise) {
        return (
            <tr key={ franchise.name }>
                <td width="50">
                    <img width="100" src={ franchise.logo } alt={ franchise.name }/>
                </td>
                <td>{ franchise.name }</td>
                <td>{ franchise.franchisePlayer }</td>
            </tr>
        )
    }

    //
    render() {
        return (
            <div key="table-franchises" className="row">
                <div className="col-md-12">
                    {
                        this.state.isLoading &&
                        <p>Carregando, aguarde...</p>
                    }
                    {
                        ! this.state.isLoading && this.state.franchises.length === 0 &&
                        <div className="alert alert-danger">
                            Nenhuma franquia cadastrada...
                        </div>
                    }
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Franchise Player</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ! this.state.isLoading &&
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