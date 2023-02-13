const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const emailAddress = document.querySelector('#email-address')
const password = document.querySelector('#Password')
const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
}); 

const validateInput = () =>{
const firstNameValue = firstName.value.trim()
const lastNameValue = lastName.value.trim()
const emailAddressValue = emailAddress.value.trim()
const passwordValue = password.value.trim()
    

    if(firstNameValue ===''){
        setErrorFor(firstName, 'First Name cannot be empty')
        changeColor()
    } else {
        setSucessFor(firstName)
    }

    if(lastNameValue ===''){
        setErrorFor(lastNameValue, 'Last Name cannot be empty')
    } else {
        setSucessFor(lastName)
    }

    if(emailAddressValue ===''){
        setErrorFor(emailAddress, 'Looks like this is not an email')
    } else {
        setSucessFor(emailAddress)
    }

    if(passwordValue ===''){
        setErrorFor(password, 'Password cannot be empty')
    } else {
        setErrorFor(password)
    }
}



