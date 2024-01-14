let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nombre");
let title = document.getElementById("title");
let correoInput = document.getElementById('correo');
let contrasenaInput = document.getElementById('contrasena');

function limpiarCampos() {
    nameInput.value = "";
    correoInput.value = "";
    contrasenaInput.value = "";
}

signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
    limpiarCampos();
}

signUp.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
    limpiarCampos();
}

document.addEventListener('DOMContentLoaded', function() {
    const signInButton = document.getElementById('signIn');
    const signUpButton = document.getElementById('signUp');
    const messageDiv = document.getElementById('messageDiv');

    signInButton.addEventListener('click', function(event) {
        event.preventDefault();
    
        const correo = correoInput.value;
        const contrasena = contrasenaInput.value;
    
        // Limpiar el contenido anterior de messageDiv
        messageDiv.textContent = "";
        messageDiv.style.color = ""; // Reiniciar cualquier estilo aplicado
    
        if (correo === 'nicojerez02@gmail.com' && contrasena === 'contraseña123') {
            // Si las credenciales son correctas, redirige al usuario.
            window.location.replace('productos.html');
            // Limpia los campos después de redirigir
            limpiarCampos();
        } else {
            // Aquí, puedes realizar otras acciones si las credenciales son incorrectas
            console.log('Credenciales incorrectas'); // Muestra un mensaje en la consola en lugar de mostrar un mensaje de error en la interfaz.
            // Limpia los campos después de procesar
            limpiarCampos();
        }
    });
    

    signUpButton.addEventListener('click', function(event) {
        event.preventDefault();

        const nombre = nameInput.value;
        const correo = correoInput.value;
        const contrasena = contrasenaInput.value;

        // Lógica para guardar los datos de registro

        limpiarCampos();
    });
});





