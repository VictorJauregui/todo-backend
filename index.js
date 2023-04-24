const express = require('express');
const cors = require('cors');
const {dbConnection} = require('./dataBase/config.js');
const { addTodo, getTodos, deleteTodo, editTodo, updateTodosStatus, deleteAllTodos } = require('./controllers/ToDosController.js');
const mongoose = require('mongoose');
const { registerUser, loginUser } = require('./controllers/UserController.js');


const app = express();

app.use(cors());
app.use(express.json())

require("dotenv").config();
dbConnection();

app.post('/register', registerUser)
app.post('/login', loginUser)

app.get('/todo', getTodos)
app.post('/todo', addTodo)
app.delete('/deletetodo/:id', deleteTodo)
app.patch('/edittodo', editTodo)
app.post('/updatetodostatus', updateTodosStatus)
app.delete('/deletealltodos', deleteAllTodos)




const PORT = 4000;

const bootstrap = async () => {
  await mongoose.connect(process.env.DB_CNN)
  
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}
bootstrap()