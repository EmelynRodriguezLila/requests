const express = require('express')

const app = express()

//http://localhost:3000/emelyn/123
app.get('/:user/:password', (req, res) => {//Endpoint el conjunto del metodo http, la ruta y la funcionalidad
    res.json({msg: 'Hello Get'})
}) 
app.get('/:user/:password', (req, res) => {
    const {user, password} = req.params
    if(user === 'emelyn' && password === '123'){
      res.json({msg: 'Inicio de sesion exitoso'})
      return  
    }
    res.json({msg: 'Fallo en el usuario o contraseña'})
}) 
//OTRO METODO USANDO QUERY
//http://localhost:3000/login?user=emelyn&password=123
app.get('/login', (req, res) => {
    const {user, password} = req.query
    if(!user || !password){
        res.json({msg: "You nedd to provide <user> and <password> params"})
    }

    if(user === 'emelyn' && password === '123'){
      res.status(400).json({msg: 'Sign In succesfully'})
      return  
    }
    res.status(404).json({msg: 'Wrong user or password'})
})

app.post('/', (req, res) => {
    res.json({msg: 'Hello POST'})
})

app.put('/', (req, res) => {
    res.json({msg: 'Hello PUT'})
}) 

app.patch('/', (req, res) => {
    res.json({msg: 'Hello PATCH'})
}) 

app.delete('/', (req, res) => {
    res.json({msg: 'Hello DELETE'})
}) 

/**
 * 
 * FUNCIONALIDAD
 * 
 */

//http://localhost:3000/
app.listen(3000, () => {
    console.log('listening on port 3000')
})