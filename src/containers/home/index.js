import React, { Component } from 'react'
import Login from '../../components/login'
//import createHistory from 'history/createBrowserHistory'
import { connect } from 'react-redux'

//const history = createHistory()
//const login = () =>{
//	history.push('/uesrs')
//	history.go(0)
//}

class Login extends Component{
	state = {
		name: ""
	}
	componentWillMount(){
		const { gun } = this.props
//		gun.get('mark').put({
//			name: "Mark",
//			email: "mark@gunDB.io",
//		});
		const _this = this
		const go = async() => {
			gun.get('users').on((data,key)=>{
				_this.setState({name:data.test})
			})

		}
		go()
	}
	render(){
		const { gun } = this.props
		const onChangeText = async( text, id) =>{
			await this.setState({ [id]: text })
			await gun.get('users').put({test:this.state.name})
		}

		return(
			<HomeModel that={this} oct={onChangeText}/>
		)
	}
}

const mapStatesToProps = state =>({
	gun : state.gun
})

export default connect(mapStatesToProps)(Home)
