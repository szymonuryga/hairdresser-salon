const form = document.querySelector('.schedule-form');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const phoneNumber = document.querySelector('.phoneNumber');
const dateClient = document.querySelector('.dateClient');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value;
    const dateClientValue = dateClient.value;

    let tmp = true;

    if(firstNameValue.length<=2){
        setErrorFor(firstName, 'Imie powinno się składać z conajmniej 2 liter');
        tmp=false;
    } else{
        setSuccessFor(firstName);
    }

    if(lastNameValue.length<=3){
        setErrorFor(lastName, 'Nazwisko powinno się składać z conajmniej 3 liter');
        tmp=false;
    } else{
        setSuccessFor(lastName);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email nie może być pusty');
        tmp = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email nieprawidłowy')
        tmp = false;
    } else {
        setSuccessFor(email);
    }

    if(phoneNumberValue.toString().length != 9 ){
        setErrorFor(phoneNumber, 'Numer musi zawierać 9 cyfr');
        tmp=false;
    }else{
        setSuccessFor(phoneNumber);
    }

    if(dateClientValue.toString() ===''){
        setErrorFor(dateClient, 'Podaj datę');
        tmp = false;
    }else{
        setSuccessFor(dateClient);
    }

    if (tmp === true) {
        alert('Udało się zapisać');
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className = 'formControl error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'formControl succes';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}