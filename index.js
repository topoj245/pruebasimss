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
// Función para limpiar texto (elimina espacios antes/después y dentro de la contraseña)
function limpiarTexto(texto) {
    return texto.toLowerCase().replace(/\s+/g, ""); // Convierte a minúsculas y elimina todos los espacios
}

function login() {
    const username = limpiarTexto(document.getElementById("txt-input").value);
    const password = limpiarTexto(document.getElementById("pwd").value);

    // Lista de usuarios (sin espacios)
    const usuariosAccesoGeneral = [
        limpiarTexto("jose ramon enriquez"),
        limpiarTexto("carlos velasco"),
        limpiarTexto("carlos segovia"),
        limpiarTexto("carlos silva")
    ];

    const usuariosAuditoria = [
        limpiarTexto("christopher rivera"),
        limpiarTexto("alejandro miranda")
    ];

    // Contraseñas (sin espacios)
    const CONTRASENA_GENERAL = limpiarTexto("mapa_123");
    const CONTRASENA_AUDITORIA = limpiarTexto("auditoria456");

    // Verificar acceso y mostrar mensaje personalizado
    if (usuariosAccesoGeneral.includes(username) && password === CONTRASENA_GENERAL) {
        alert(`Bienvenido, ${username.split(" ")[0]}! (Acceso General)`);
        window.location.href = "https://farfay.maps.arcgis.com/apps/webappviewer/index.html?id=e95dba9036e844719050945756a98cd0";
    } 
    else if (usuariosAuditoria.includes(username) && password === CONTRASENA_AUDITORIA) {
        alert(`Bienvenido, ${username.split(" ")[0]}! (Acceso Auditoría)`);
        window.location.href = "https://farfay.maps.arcgis.com/apps/webappviewer/index.html?id=477569cd8fd4495c8ef6e0f9883c7e4d";
    } 
    else {
        alert("Nombre o contraseña incorrectos");
    }
}
