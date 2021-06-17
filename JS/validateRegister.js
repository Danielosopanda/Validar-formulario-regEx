const regEx = {
    name: /^[A-Za-zÁ-ÿ\s]{3,30}$/,
    email: /^[A-Za-z0-9.-_]+[A-Za-z0-9.-_]*\@[A-Za-z0-9.-_]+\.[A-Za-z0-9.-_]+$/,
    password: /^.{4,16}$/
}

const permisos = {
    name: false,
    email: false,
    password: false,
    confirmPassword: false
}

const form = document.querySelector("#form"),
      inputs = document.querySelectorAll(".field__input"),
      terms = document.querySelector("#terms"),
      privacy = document.querySelector("#privacy");


form.addEventListener("submit", (e) => {

    validateName(inputs[0]);
    validateEmail(inputs[1]);
    validatePassword(inputs[2]);
    confirmPassword(inputs[2], inputs[3]);

    if( permisos.name &&
        permisos.email &&
        permisos.password &&
        permisos.confirmPassword &&
        terms.checked &&
        privacy.checked) {
            console.log("Formulario enviado");
    } else {
        e.preventDefault();
    }
});


inputs.forEach(input => {
    input.addEventListener("click", () => {
        input.style.border = "2px solid #03A9F4";
    });
    input.addEventListener("blur", () => {  
        input.style.border = "2px solid #000";
    });
});


const validateName = (nombre) => {
    if(regEx.name.test(nombre.value)) {
        nombre.style.border = "2px solid #4BB543";
        permisos.name = true;
    } else {
        nombre.style.border = "2px solid #cc0000";
        permisos.name = false;
    }
}

const validateEmail = (correo) => {
    if(regEx.email.test(correo.value)) {
        correo.style.border = "2px solid #4BB543";
        permisos.email = true;
    } else {
        correo.style.border = "2px solid #cc0000";
        permisos.email = false;
    }
}

const validatePassword = (pass) => {
    if(regEx.password.test(pass.value)) {
        pass.style.border = "2px solid #4BB543";
        permisos.password = true;
    } else {
        pass.style.border = "2px solid #cc0000";
        permisos.password = false;
    }
}

const confirmPassword = (pass1, pass2) => {
    if((pass1.value === pass2.value) && pass1.value != "") {
        pass2.style.border = "2px solid #4BB543";
        permisos.confirmPassword = true;
    } else {
        pass2.style.border = "2px solid #cc0000";
        permisos.confirmPassword = false;
    }
}