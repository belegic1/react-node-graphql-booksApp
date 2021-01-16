import React, { Component } from 'react'
import {ApolloClient, InMemoryCache} from '@apollo/client'
import { ApolloProvider } from 'react-apollo'






//Components
import BookList from './components/BookList'
import AddBook from './components/AddBook'

//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})



export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id='main'>
          <BookList />
          <AddBook />
        
        </div>
      </ApolloProvider>
    )
  }
}
