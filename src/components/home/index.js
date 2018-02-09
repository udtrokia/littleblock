import React from 'react'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import './index.css'
const HomeModel = ({ that, oct }) =>(
	<Grid container alignItems="center" justify="center" direction="column"
		  alignContent="center" style={{height:'100%',display:'flex',flex:1}}>
		<TextField id="name" label="Name" value={that.state.name}
				   margin="normal" onChange={ e => {oct(e.target.value, 'name')}}/>
		<Button style={{marginTop:30}} variant="raised" color="primary" >Login!</Button>
	</Grid>
)

export default HomeModel

