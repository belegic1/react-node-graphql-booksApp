import React, { Component } from 'react'
import {graphql} from 'react-apollo'
import { getBookQuery } from '../queries/queries'

class BookDetails extends Component {
    render() {
        const { book} = this.props.data
        return (
            <div id='book-details'>
                {book && (
                    <div>
                        <h2>{book.name}</h2>
                        <p>{book.genre}</p>
                        <p>{book.author.name}</p>
                        <ul>
                            {book.author.books.map(item =>(
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        )
    }
}

export default  graphql(getBookQuery, {
    options: props =>{
        return{
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails)