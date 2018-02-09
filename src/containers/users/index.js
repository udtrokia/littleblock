import React, { Component } from 'react'
import UsersModel from '../../components/users'
import { connect } from 'react-redux'
import Gun from 'gun'
const gun = Gun(['http://106.14.205.225:8080/gun'])

document.addEventListener('touchmove', function (e) {
    e.preventDefault()
})

class Users extends Component{
	state = {
		activeStep: -1,
		completed: {},
		totalMined: 0,
		planet:"",
		disabled: false
	}
	componentWillMount(){
		const that = this		
		const check = ()=>{
			gun.get('mine').on((data,key)=>{
				that.setState({
					totalMined:data.totalMined,
					planet: data.planet
				})
			})
		}
		check()
	}
	render(){
		const handleStep = step => () => {
			this.setState({
				activeStep: step,
			});
		};
		const mine = async() => {
			await gun.get('mine').put({'totalMined':this.state.totalMined -1 }).on((data,key)=>{})
			if(this.state.totalMined < 0){
				this.setState({disabled:true})
			}
		}
		return(
			<UsersModel ats={this.state.activeStep}
			hst={handleStep} that={this} disabled={ this.state.disabled }
			mine = {mine}
			/>
		)
	}		
}

const mapStatesToProps = state => ({
	gun : state.gun
})

export default connect(mapStatesToProps)(Users)
