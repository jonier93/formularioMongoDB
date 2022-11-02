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
        
    }
    else if (option == "Consultar"){
        let datos = {mensaje:"Hola mundo"}
        fetch('/consultar', {
            method: 'post',
            headers: {'Content Type':'application/json'},
            body: JSON.stringify(datos)
        })
        //.then(res => res.json())
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