
const test = (state = false, action ) => {
	switch(action.type){
		case "TEST":
			return action.reddit
		default:
			return state
	}
}

export default test
