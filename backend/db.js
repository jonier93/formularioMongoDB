import Mongoose from "mongoose";

Mongoose.connect('mongodb+srv://jonier:jhpd123@database.9r8qc7n.mongodb.net/db?retryWrites=true&w=majority')
.then(() => console.log("Conectado a Mongo DB"))
.catch(err => console.log(err))

let esquema = Mongoose.Schema({
    _id: Number,
    nombre: String,
    apellido: String,
    edad: Number
}, {versionKey:false})

let modelo = Mongoose.model('usuarios', esquema)

export let consultar = async (id) => {
    let documento = await modelo.findOne({_id:id})
    console.log(documento)
    return documento
}

export async function insertar (datos){
    let document = new modelo({
        _id: datos.id,
        nombre: datos.nombre,
        apellido: datos.apellido,
        edad: datos.edad
    })
    
    await document.save()
}