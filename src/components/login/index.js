import React from 'react'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import './index.css'
const LoginModel = ({ that, oct, enter }) =>(
	<Grid id="lg-bg"  alignItems="center" justify="center" direction="column"
		  alignContent="center" style={{height:'100%',display:'flex',flex:1 }}>
		<TextField id="name" label="Name" value={that.state.name}
				   style={{marginTop:250}}
				   margin="normal" onChange={ e => {oct(e.target.value, 'name')}}/>		
		<TextField id="group" label="Group" value={that.state.group}
				   margin="normal" onChange={ e => {oct(e.target.value, 'group')}}/>
		<Button id="lg-btn" onClick={enter} style={{marginTop:30}}
				variant="raised" color="primary">
			进入星球
		</Button>
	</Grid>
)

export default LoginModel
