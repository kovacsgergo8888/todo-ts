import {Mongoose} from 'mongoose'

const mongoose = new Mongoose()
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
export default mongoose