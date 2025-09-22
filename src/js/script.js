const formAction = document.getElementById("form");

const nameField = document.getElementById("form-part-name");
const emailField = document.getElementById("form-part-email");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");

const successMessage = document.getElementById("success-message");

const regexNumber = /\d/;
const regexSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formAction.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');

    console.log(`Name : ${name}`);
    console.log(`Email : ${email}`);

    console.log(validName(name));
    console.log(validEmail(email));

    if(validName(name) && validEmail(email)) {
        successMessage.style.display = "flex";
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
        
    }
});

function validName(name) {
    if(!regexNumber.test(name) && !regexSpecialCharacter.test(name)) {
        console.log("Valid Name");
        return true;
    } 
    else {
        nameField.style.borderColor = "red";
        nameError.style.display = "flex";
        return false;
    }
}

function validEmail(email) {
    if(regexForEmail.test(email)) {
        console.log("Valid Email");
        return true;
    }
    else {
        emailField.style.borderColor = "red";
        emailError.style.display = "flex";
        return false;
    }
}
