import React, { Component } from 'react'
import {  graphql } from 'react-apollo'

import {getAuthorsQuery, AddBookMutation, getBooksQuery} from '../queries/queries'

class AddBook extends Component {
    constructor(props){
        super(props)
        this.state={
            name: '',
            genre: '',
            authorId: ''
        }
    }
    getAuthors() {
        const { loading, authors } = this.props.data
        if (loading) {
            return <option disabled>Loading Authors</option>
        } else {
            return authors.map(author => (
                <option key={author.id}
                    value={author.id}>{author.name}</option>
            ))
        }

    }
   

    handleSubmit(e){
       e.preventDefault()
       console.log(this.props);
       this.props.mutate({
           variables:{
               name: this.state.name,
               genre: this.state.genre,
               authorId: this.state.authorId
           },
           refetchQueries: [{query: getBooksQuery}]
       })
    }
    render() {
        const {name, authorId, genre} = this.state
        return (
            <form onSubmit={this.handleSubmit.bind(this)} id="add-book">
                <div className="field">
                    <label htmlFor="">Book Name: </label>
                    <input type="text"
                    value={name}
                    onChange={e => this.setState({name: e.target.value})}
                     name="" id=""/>
                </div>
                <div className="field">
                    <label htmlFor="">Book Genre: </label>
                    <input type="text" name=""
                        value={genre}
                        onChange={e => this.setState({ genre: e.target.value })}
                     id=""/>
                </div>
                <div className="field">
                    <label htmlFor="">Author Name: </label>
                    <select name="" 
                        value={authorId}
                        onChange={e => this.setState({ authorId: e.target.value })}
                    id="">
                        <option disabled value="">Select Author</option>
                        {this.getAuthors()}
                    </select>
                </div>
                <button type='submit'>+</button>
            </form>
        )
    }
}

export default graphql(AddBookMutation)(
graphql(getAuthorsQuery)(AddBook))
