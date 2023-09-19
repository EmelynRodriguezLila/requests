const express = require('express')

const app = express()

//http://localhost:3000/emelyn/123
app.get('/:user/:password', (req, res) => {
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