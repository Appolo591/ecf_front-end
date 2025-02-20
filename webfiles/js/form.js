// Contrôle des données du formulaire


//Je cible les éléments du DOM utiles
const form = document.querySelector("#form-contact");
const lastnameField = document.querySelector("#lastname")
const firstnameField = document.querySelector("#firstname")
const emailField = document.querySelector("#email");
const objectField = document.querySelector("#object");
const messageField = document.querySelector("#message");
const agreedBox = document.querySelector("#agreed")
const submitBtn = document.querySelector("#submit-btn");

//la fonction de contrôle avant la validation des données
function validateForm(){
    const lastname = lastnameField.value.trim();
    const firstname = firstnameField.value.trim();
    const email = emailField.value.trim();
    const object = objectField.value.trim();
    const agreed = agreedBox.value;
    const message = messageField.value.trim();

    const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   



    if(!lastname === "" && lastname.length >= 2 && lastname.length <= 50 && regexName.test(lastname)){
        console.log("votre nom est valide");  
    }else{
        console.log("votre nom est incorrect");
    }
        if(!firstname === "" && firstname.length >= 2 && firstname.length <= 50 && emailRegex.test(lastname)){
            console.log("votre prénom est valide");
        }else{
            console.log("votre prénom est incorrect");
        }
            if(!email === "" &&  regexName.test(email)){
                console.log("votre email est valide");
            }else{
                console.log("votre prénom est incorrect");
            }
                if(!object === "" && object.length >= 3 && object.length <= 250 ){
                    console.log("votre Objet est valide");
                }else{
                    console.log("votre Objet est  incorrect");
                }
                    if(!message === "" && message.length >= 3 && message.length <= 250 ){
                        console.log("votre message est valide");
                    }else{
                        console.log("votre Objet est  incorrect");
                    }
                        if(agreed){
                            console.log("votre avez accepté les mentions légales");
                        }else{
                            console.log("vous devez accepter les mentions légales");
                        }
                    
    };


submitBtn.addEventListener("submit", (event)=> {
    validateForm();
    console.log("votre formulaire a bien été validé .");
    event.preventDefault;
}); 



