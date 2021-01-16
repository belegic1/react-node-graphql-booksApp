import express from 'express'
import{ graphqlHTTP} from 'express-graphql'
import schema from './schema/schema.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const connectDb = async()=>{
try {
    const connect = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    console.log('Database is Connected');
} catch (error) {
    console.log(error.message);
    process.exit(1)
}}
connectDb()

const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(4000, ()=>{
    console.log('Listeing...');
})