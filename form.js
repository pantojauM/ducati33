const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', function(){
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const correo = document.getElementById('correo').value
    console.log ('el nombre es' + nombre)
    console.log ('el apellido es' + apellido)
    console.log ('el correo es' + correo)
    alert('sus datos se guardaron exitosamente')
})