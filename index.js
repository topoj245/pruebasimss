// Mostrar/ocultar contraseña
function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}
function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}
var pwShown = 0;
document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

// Función de login
function login() {
    const username = document.getElementById("txt-input").value;
    const password = document.getElementById("pwd").value;

    // Credenciales (modifica estos valores)
    const users = {
        "usuario": { 
            password: "user123", 
            link: "https://farfay.maps.arcgis.com/apps/webappviewer/index.html?id=e95dba9036e844719050945756a98cd0" 
        },
        "admin": { 
            password: "admin123", 
            link: "https://farfay.maps.arcgis.com/apps/webappviewer/index.html?id=477569cd8fd4495c8ef6e0f9883c7e4d" 
        }
    };

    if (users[username] && users[username].password === password) {
        window.location.href = users[username].link; // Redirección
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}