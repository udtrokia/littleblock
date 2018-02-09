import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const store = createStore(todoApp)
const theme = createMuiTheme()

ReactDOM.render(
	<Provider store ={store} style={{display:'flex',flex:1}}>
		<MuiThemeProvider theme={theme}>
			<App />
			</MuiThemeProvider>
	</Provider>	,document.getElementById('root'));
registerServiceWorker();
