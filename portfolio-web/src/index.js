import * as serviceWorker from './serviceWorker';
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import {Provider} from 'react-redux'
import Router from './router'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu');
  body {
    margin: 0;
    font-family: Ubuntu, sans-serif;
  }
`

const App = () => {
	return (
		<Provider store={store}>
			<GlobalStyle/>
				<Router/>
		</Provider>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
