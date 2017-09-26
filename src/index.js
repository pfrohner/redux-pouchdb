import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './components/App';
import MessageListContainer from './containers/MessageListContainer';
import MessageContainer from './containers/MessageContainer';
import store from './store';
import './index.css';

const rootEl = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route exact path="/" component={MessageListContainer}/>
					<Route path="/message/:uuid" component={MessageContainer}/>
					<Redirect to="/"/>
				</Switch>
			</App>
		</Router>
	</Provider>,

	rootEl
);
