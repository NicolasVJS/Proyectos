


let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");
let correoInput = document.getElementById('correo');
let contrasenaInput = document.getElementById('contrasena');

// Función para limpiar los campos del formulario
// ... (tu código anterior)

// Función para limpiar los campos del formulario
// Función para limpiar los campos del formulario
function limpiarCampos() {
    if (nameInput) {  // Verifica si el elemento existe antes de intentar cambiar su valor
        nameInput.value = "";
    }
    correoInput.value = "";
    contrasenaInput.value = "";
}


signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
    // Limpia los campos al hacer clic en SignIn
    limpiarCampos();
}

signUp.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
    // Limpia los campos al hacer clic en SignUp
    limpiarCampos();
}

document.addEventListener('DOMContentLoaded', function() {
    const signInButton = document.getElementById('signIn');
    const signUpButton = document.getElementById('signUp');
    const messageDiv = document.getElementById('messageDiv'); // Asegúrate de obtener la referencia a messageDiv

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
            // Si las credenciales son incorrectas, muestra el mensaje de error.
            messageDiv.textContent = 'Correo o contraseña incorrectos';
            messageDiv.style.color = 'red';
        }
    });

    signUpButton.addEventListener('click', function(event) {
        event.preventDefault();

        const nombre = nameInput.value;
        const correo = correoInput.value;
        const contrasena = contrasenaInput.value;

        // Aquí puedes agregar tu lógica para guardar los datos de registro, por ejemplo, enviarlos a un servidor, etc.
        
        // Limpia los campos después de procesar el registro
        limpiarCampos();
    });
});





