import Gun from 'gun'
const gun = Gun(['http://106.14.205.225:8080/gun'])

const gunDB = ( state = gun, action )=>{
	switch(action.type){
		default:
			return state
	}
}

export default gunDB 
