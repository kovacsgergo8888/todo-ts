import {Mongoose} from 'mongoose'

const mongoose = new Mongoose()
const host = process.env.MONGO_HOST || 'localhost'
const port = process.env.MONGO_PORT || '27017'
const collection = process.env.MONGO_COLLECTION || 'todos'
mongoose.connect(`mongodb://${host}:${port}/${collection}`, {useNewUrlParser: true, useUnifiedTopology: true});
export default mongoose