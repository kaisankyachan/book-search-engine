
// Set up React
import React from 'react';

// Set up connection for Apallo Client

import { 
  ApolloClient, 
  InMemoryCache, 
// eslint-disable-next-line
  ApolloProvider, 
  createHttpLink
  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// Set up authentication
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
	headers: {
	  ...headers,
	  authorization: token ? `Bearer ${token}` : '',
	},
  };
});

// Set up HTTP Link for GraphQL
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Set up Apollow Client
// eslint-disable-next-line
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// App Function
function App() {
  return (
	<Router>
	  <>
		<Navbar />
		<Switch>
		  <Route exact path='/' component={SearchBooks} />
		  <Route exact path='/saved' component={SavedBooks} />
		  <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
		</Switch>
	  </>
	</Router>
  );
}

export default App;
