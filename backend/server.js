import ex from 'express'
import path from 'path'
import {consultar, insertar} from "./db.js"

const app = ex()
const dirBackend = path.resolve()
const dirFrontend = path.join(dirBackend, "../frontend")

app.listen('5000', function(pet, res){
    console.log("Servidor iniciado")
})

app.use(ex.static("../frontend"))
app.use(ex.json())

app.get('/', function(pet, res){
    res.sendFile(dirFrontend + "/homePage.html")
})

app.post('/consultar', (pet, res)=> {
    let datos = pet.body
    let documento = consultar(datos.id)
    .then(datos => res.send(datos))
    .catch(err => res.send({error:"Usuario no existe"}))
})

app.post('/guardar', function(req, res){
    let datos = req.body
    insertar(datos)
    .then(() => res.send("Usuario creado exitosamente"))
})

