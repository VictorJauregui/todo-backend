const ToDo = require("../models/ToDo")

const addTodo = async (req, res) => {
    try {
        const todo = new ToDo(req.body)
        await todo.save()
        return res.status(200).json({ok:true, todo:todo})
    } catch (error) {
        return res.status(303).json({ok: false, msg: "Something happened", error:error})  
    }
}

const getTodos = async (req, res) => {
    try {
        const todos = await ToDo.find()      
        return res.status(200).json({ok:true, todos:todos})
    } catch (error) {
        return res.status(303).json({ok: false, msg: "Something happened", error:error}) 
    }
}

const deleteTodo = async (req, res) => {
    try {
        const deleteTask = await ToDo.findById(req.params.id).exec()
        await ToDo.deleteOne(deleteTask)
        return res.status(200).json({ok:true, deleteTodo:deleteTodo})
    } catch (error) {
        return res.status(303).json({ok: false, msg: "Something happened", error:error}) 
    }
}

const deleteAllTodos = async (req, res) => {
    try {
        await ToDo.deleteMany({status: "Completed"}).exec()
        return res.status(200).json({ok:true})
    } catch (error) {
        return res.status(303).json({ok: false, msg: "Something happened", error:error}) 
    }
}

const editTodo = async (req, res) => {

    try {
        const todo = await ToDo.findOneAndUpdate({_id:req.body.todoId}, {title: req.body.newValue}, {new: true})
        return res.status(200).json({ok:true, todo: todo})
    } catch (error) {
        return res.status(303).json({ok: false, msg: "Something happened", error:error})  
    }
}

const updateTodosStatus = async (req, res) => {
    console.log(req.body)
    try {
        const todo = await ToDo.findOneAndUpdate({_id:req.body.todo._id}, {status: req.body.status}, {new: true})
        return res.status(200).json({ok:true, todo: todo})
    } catch (error) {
        return res.status(303).json({ok: false, msg: "Something happened", error:error})  
    }
}



module.exports = {addTodo, getTodos, deleteTodo, editTodo, updateTodosStatus, deleteAllTodos}