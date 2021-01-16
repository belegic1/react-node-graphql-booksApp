import gql from 'graphql-tag'

export const getAuthorsQuery = gql`
{
    authors{
        id
        name
    }
}`

export const getBooksQuery = gql`
{
  books{
      name
      id
    }
}`

export const getBookQuery = gql`
query($id: ID!){
    book(id: $id){
        id
        name
        genre
        author{
            id
            name
            age
            books{
                name
                id
            }
        }
    }
}`

export const AddBookMutation = gql`
mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
        name
        id
        author{
            name
            id
        }
    }
}`
