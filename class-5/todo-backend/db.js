const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ranamohit2051:user123@100xdevs.q5dmy0i.mongodb.net/");
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model('todos', todoSchema);
module.exports = {todo};