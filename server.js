const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

const todos = [];

app.get('/', (req, res) => {
    res.render('index', )
})

app.get('/todo', (req, res) => {
    res.render('todo', { todos })
})

app.post('/todo', (req, res) => {
    if (req.body.todo) {
        todos.push(req.body.todo)
        res.render('todo', { todos })
    }
})

app.listen(3000)
