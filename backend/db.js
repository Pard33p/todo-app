const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pardeepsingh0920:xgpUyAbIdcCsLALK@cluster0.9f7qem8.mongodb.net/todo-app');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
};


