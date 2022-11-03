document.querySelector('#btnProcesar').addEventListener('click', procesar)
document.querySelector('#btnSeleccionar').addEventListener('click', seleccionar)

let option
function seleccionar(){
    option = document.getElementById('selector').value 
    if(option == "Guardar"){
        habilitacion(false, false, false, false, false)
    }
    else if (option == "Consultar"){
        habilitacion(false, true, true, true, false)
    }
    else if (option == "Actualizar"){
        habilitacion(false, false, false, false, false)
    }
    else {
        habilitacion(false, true, true, true, false)
    }
}

function procesar () {
    if(option == "Guardar"){
        let datos = {
            id: document.getElementById('id').value,
            nombre: document.getElementById('name').value,
            apellido:document.getElementById('lastname').value,
            edad: document.getElementById('age').value,
        }
        fetch('/guardar', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(datos)
        })
        .then(resp => resp.text())
        .then(data => alert(data))
        
    }
    else if (option == "Consultar"){
        let datos = {
            id: document.getElementById('id').value
        }
        fetch('/consultar', {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(datos)
        })
        .then(res => res.json())
        .then(data => establecerValores(data))
        .catch(err => {let data = {nombre:"", apellido:"", edad:""}
                    establecerValores(data)
                    alert("usuario no existe")        
        })
    }
    else if (option == "Actualizar"){
    }
    else {
    }

}

let habilitacion = (id, name, lastname, age, btnProcesar) => {
    document.getElementById('id').disabled = id
    document.getElementById('name').disabled = name
    document.getElementById('lastname').disabled = lastname
    document.getElementById('age').disabled = age
    document.getElementById('btnProcesar').disabled = btnProcesar
}

function establecerValores(data){
    document.getElementById('name').value = data.nombre
    document.getElementById('lastname').value = data.apellido
    document.getElementById('age').value = data.edad
}