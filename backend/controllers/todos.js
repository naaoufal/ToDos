const Todos = require('../models/todos')
const Archives = require('../models/archives')
require('dotenv').config()

// get all todos :
async function all (req, res) {
    try {
        const todos = await Todos.find()
        res.json(todos)
    } catch (error) {
        res.json({message : error.message})
    }
}

// Create new todo list :
async function createOne (req, res) {
    const todo = new Todos({
        name : req.body.name,
        stat : req.body.stat
    })
    try {
        const newTodo = await todo.save()
        res.json(newTodo)
    } catch (err) {
        res.json({message : err.message})
    }
}

// Edit a todo list by ID :
async function edit (req, res) {
    if(!req.body){
        return res.send({message : "they is not data !!!"})
    }
    const id = req.params.id
    Todos.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.send({
              message: `they is no todo list !`
            });
          } else {
            res.send({ message: "todo list is updated successfully." })
          }
    })
}

// delete todo list by ID :
async function deleteTodos (req, res) {
    const nm = req.body.name
    Todos.findByIdAndDelete(req.params.id).then( () => {
        res.json(newArch)
    })
}

module.exports = {
    all,
    createOne,
    edit,
    deleteTodos
}