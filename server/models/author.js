import pkg from 'mongoose'
const { model, Schema } = pkg

const autorSchema = new Schema({
    name: {type: String},
    age: {type: Number}
})

export default model('Author', autorSchema)