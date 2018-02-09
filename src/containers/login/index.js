import React, { Component } from 'react'
import LoginModel from '../../components/login'
import createHistory from 'history/createBrowserHistory'
import { connect } from 'react-redux'

const history = createHistory()

class Login extends Component{
	state = {
		name: "",
		group: ""
	}
	render(){
		const onChangeText = async( text, id) =>{
			await this.setState({ [id]: text })
		}
		const enter = async() =>{
			if(this.state.group.length ===0){
				alert('请输入小组序号，如第一小组的小伙伴输入数字1， 进入游戏为小组赢取token! ')
			}else{
				await localStorage.setItem('group',this.state.group)
				await localStorage.setItem('name',this.state.name)
				await history.push('/users')
				await history.go(0)
			}
		}
		return(
			<LoginModel that={this} oct={onChangeText} enter={enter}/>
		)
	}
}

const mapStatesToProps = state =>({
	gun : state.gun
})

export default connect(mapStatesToProps)(Login)
