import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import List from './Franchises/List'

class App extends Component {
  	render() {
    	return (
			<Router>
				<div>
					<div className="container">
						<nav className="navbar navbar-default">
							<div className="container-fluid">
								<div className="navbar-header">
								<a className="navbar-brand" href="#">NBA Franchises</a>
								</div>
								<ul className="nav navbar-nav">
									<li className="active">
										<Link to="/">Franchises</Link>
									</li>
									<li>
										<a href="#">Franchises per conference</a>
									</li>
									<li>
										<a href="#">About</a>
									</li>
								</ul>
							</div>
						</nav>
						<h1>NBA Franchises</h1>
						<Route exact path="/" component={List} />
					</div>
				</div>	
			</Router>
    	)
  	}
}

export default App
