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
    const username = document.getElementById("txt-input").value.toLowerCase();
    const password = document.getElementById("pwd").value;

    // Lista de usuarios
    const usuariosAccesoGeneral = [
        "jose ramon enriquez",
        "carlos velasco",
        "carlos segovia",
        "carlos silva"
    ];

    const usuariosAuditoria = [
        "christopher rivera",
        "alejandro miranda"
    ];

    // Contraseñas
    const CONTRASENA_GENERAL = "mapa_123";
    const CONTRASENA_AUDITORIA = "auditoria456";

    // Verificar acceso y mostrar mensaje personalizado
    if (usuariosAccesoGeneral.includes(username) && password === CONTRASENA_GENERAL) {
        const primerNombre = username.split(" ")[0]; // Extrae "josé", "carlos", etc.
        alert(`Bienvenido, ${primerNombre}! (Acceso General)`); // Mensaje personalizado
        window.location.href = "https://farfay.maps.arcgis.com/apps/webappviewer/index.html?id=e95dba9036e844719050945756a98cd0" ;
    } 
    else if (usuariosAuditoria.includes(username) && password === CONTRASENA_AUDITORIA) {
        const primerNombre = username.split(" ")[0]; 
        alert(`Bienvenido, ${primerNombre}! (Acceso Auditoría)`); 
        window.location.href = "https://farfay.maps.arcgis.com/apps/webappviewer/index.html?id=477569cd8fd4495c8ef6e0f9883c7e4d" ;
    } 
    else {
        alert("Nombre o contraseña incorrectos");
    }
}