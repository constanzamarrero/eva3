function validar() {
    var ret_nombre = validar_nombre();
    var ret_email = validar_email();
    var ret_nombre = validar_nombre();
    var ret_telefono = validar_telefono();
    var ret_contraseña = validar_contraseña ();


    return ret_nombre && ret_edad && ret_check && ret_email; 
}

function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("err_email");
    var arroba = email.indexOf("@");
    var punto = email.lastIndexOf(".");
    if (arroba < 1) {
        div.innerText = "El correo electrónico no tiene @ (arroba) o nombre de usuario";
        div.className = "text-danger";
        return false;
    } else {
        if (arroba < 2) {
            div.innerText = "El nombre de usuario del correo no es válido";
            div.className = "text-danger";
            return false;
        } else {
            if (arroba + 3 > punto || punto + 1 >= email.length - 1 ) {
                div.innerText = "El nombre de dominio no es válido";
                div.className = "text-danger";
                return false;
            } else {
                div.innerText = "";
                return true;
            }
        }
    }
}


function validar_nombre() {
    var nombre = document.getElementById("nombre").value;
    var div = document.getElementById("err_nombre");
    if (nombre == "") {
        div.innerText = "El nombre no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
        if (nombre.length > 30) {
            div.innerText = "El nombre no puede tener más de 30 caracteres";
            div.className = "text-danger";
            return false;
        } else {
            div.innerText = "";
            return true;
        }
    }
}



function validar_telefono() {
    var tel = document.getElementById("telefono").value;
    var div = document.getElementById("err_telefono");
    if (nombre == "") {
        div.innerText = "El campo telefono no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
        if (nombre.length > 30) {
            div.innerText = "El telefono no puede tener más de 12 numeros";
            div.className = "text-danger";
            return false;
        } else {
            div.innerText = "";
            return true;
        }
    }
}


function validar_contraseña() {
    var tel = document.getElementById("contraseña").value;
    var div = document.getElementById("err_contraseña");
    if (nombre == "") {
        div.innerText = "El campo contraseña no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
        if (nombre.length > 30) {
            div.innerText = "la contraseña debe tener letras, numeros y caracteres";
            div.className = "text-danger";
            return false;
        } else {
            div.innerText = "";
            return true;
        }
    }
}

function validar_direccionpostal() {
    var tel = document.getElementById("direcion_postal").value;
    var div = document.getElementById("err_direccion_postal");
    if (nombre == "") {
        div.innerText = "El campo direccion postal no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
        if (nombre.length > 30) {
            div.innerText = "El codigo postal solo debe ser numerico";
            div.className = "text-danger";
            return false;
        } else {
            div.innerText = "";
            return true;
        }
    }
}






