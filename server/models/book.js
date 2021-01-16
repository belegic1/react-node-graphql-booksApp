import pkg from 'mongoose'
const {model, Schema} = pkg

const bookSchema = new Schema({
    name: {type: String},
    genre: {type: String},
    authorId: {type:String}
})

export default model('Book', bookSchema)