import React from 'react'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import './index.css'

const steps = ['♆', '♅', '♄', '♃', '♂','⊕','♀','☿']
const planet = ['mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune']
const UsersModel = ({ats, hst, that, mine,}) =>(
	<Grid id="mine-bg"  alignItems="center" justify="center" direction="column"
		  alignContent="center" style={{height:'100%',display:'flex',flex:1}}>
		<Typography style={{color:'#EDEDED'}} variant="title" >{that.state.totalMined}</Typography>
		<Grid style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
			<IconButton style={{margin:30}}><img src="/imgs/mine/mercury.png"/></IconButton>
			<IconButton style={{margin:30}}><img src="/imgs/mine/venus.png"/></IconButton>
			<IconButton style={{margin:30}}><img src="/imgs/mine/mars.png"/></IconButton>
			<IconButton style={{margin:30}}><img src="/imgs/mine/jupiter.png"/></IconButton>
		</Grid><Grid container style={{display:'flex', marginTop:'20px',
									   justifyContent:'center',alignItems:'center'}}>
			<IconButton style={{margin:30}}><img src="/imgs/mine/saturn.png"/></IconButton>
			<IconButton style={{margin:30}}><img src="/imgs/mine/uranus.png"/></IconButton>
			<IconButton style={{margin:30}}><img src="/imgs/mine/neptune.png"/></IconButton>
			<IconButton style={{margin:30}}><img src="/imgs/mine/earth.png"/></IconButton>
		</Grid>
		<Button style={{margin:50}} onClick={()=>mine()}
			color="primary" variant="raised" disabled={that.state.disabled}>mine</Button>
		<Button color="primary" variant="raised">TX</Button>		
	</Grid>
)

export default UsersModel

