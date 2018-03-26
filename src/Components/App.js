import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import List from './Franchises/List'
import Create from './Franchises/Create'

class App extends Component {
  	render() {
    	return (
			<Router>
				<div>
					<div className="container">
						<nav className="navbar navbar-default">
							<div className="container-fluid">
								<div className="navbar-header">
								<Link className="navbar-brand" to="/">
									<img width="40" src="/logo-nba.png" alt=""/>
								</Link>
								</div>
								<ul className="nav navbar-nav">
									<li className="active">
										<Link to="/">Franchises</Link>
									</li>
									<li>
										<a href="/franchises/create">New Franchise</a>
									</li>
									<li>
										<a href="/franchises/create">Franchises per conference</a>
									</li>
									<li>
										<a href="/franchises/create">About</a>
									</li>
								</ul>
							</div>
						</nav>
						<Route exact path="/" component={List} />
						<Route exact path="/franchises/create" component={Create} />
					</div>
				</div>	
			</Router>
    	)
  	}
}

export default App
