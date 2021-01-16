import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import {getBooksQuery} from '../queries/queries'

import BookDetails from './BookDetails'


 class BookList extends Component {
     constructor(props){
         super(props)
         this.state={
             selected: null
            }
     }
    render() {
        const { loading, books } = this.props.data
        return (
            <div>
                {
                    loading ? <h3>Loading</h3> :
                    <ul id='book-list'>
                        {books.map(book =>(
                            <li onClick={e => this.setState({selected: book.id})}
                             key={book.id}>{book.name}</li>
                        ))}
                    </ul>
                }
                <BookDetails bookId={this.state.selected}/>
            </div>
        )
    }
}


export default graphql(getBooksQuery)(BookList)