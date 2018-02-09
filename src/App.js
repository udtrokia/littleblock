import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
	BrowserRouter as Router, Route, Redirect
} from 'react-router-dom'

import Login from './containers/login'
import Users from './containers/users'

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		localStorage.getItem('group') ? (
			<Component {...props}/>
		) : (
			<Redirect to={{
				pathname: '/Login',
				state: { from: props.location }
			}}/>
		)
	)}/>
)

class App extends Component {
	render() {
		return (
			<Router >
				<div style={{display:'flex',height:'100%'}}>
					<Route exact path="/" component={Login} />
					<PrivateRoute path="/users" component={Users} />
				</div>
			</Router>
		);
	}
}

const mapStatesToProps = state =>({
	test: state.test
})

export default connect(mapStatesToProps)(App);
