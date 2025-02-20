// Contrôle des données du formulaire

const form = document.querySelector("#form-contact");
const lastnameField = document.querySelector("#lastname")
const firstnameField = document.querySelector("#firstname")
const emailField = document.querySelector("#email");
const objectField = document.querySelector("#object");
const messageField = document.querySelector("#message");
const agreedBox = document.querySelector("#agreed")
const submitBtn = document.querySelector("#submit-btn");




function validateForm(){
    const name = nameField.value.trim();
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;

    if(!lastname.trim() === "" && lastname.length >= 2 && lastname.length <= 50 && regexName.test(lastname)){

    };
}



submitBtn.addEventListener("click", function () {
    
    console.log(lastname);
}); 