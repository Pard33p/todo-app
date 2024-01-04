const express = require('express');
const cors = require('cors');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos: todos
    });
});

app.post('/todo', async (req, res) => {
    const body = req.body;
    const parsedBody = createTodo.safeParse(body);
    if(!parsedBody.success) {
        res.status(411).json({
            msg: "You sent wrong input"
        });
        return;
    }

    await todo.create({
        title: body.title,
        description: body.description,
        completed: false
    });

    res.json({
        msg: "Todo created"
    });
});

app.put('/completed', async (req, res) => {
    const body = req.body;
    const parsedBody = updateTodo.safeParse(body);
    if(!parsedBody.success) {
        res.status(411).json({
            msg: "You sent wrong input"
        });
        return;
    }
    
    await todo.findOneAndUpdate({
        _id: req.body.id
    }, {
        completed: true
    });
    res.json({
        msg: 'Todo marked as completed'
    });
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})