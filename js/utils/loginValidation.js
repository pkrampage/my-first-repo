const userData = {
    userName: "admin",
    userPass: "P@ssword"
}

// apply deconstructuring to userData object
const {userName: adminUser, userPass: adminPass} = userData

const loginForm = document.getElementById('login-form')
const userNameInput = document.getElementById('username')
const userPassInput = document.getElementById('userpassword')
const checkUserName = document.getElementById('checkUsername')
const checkUserPass = document.getElementById('checkPassword')

const clearErrorMessage = () => {
    checkUserName.innerText = ""
    checkUserName.style.color = ""
    checkPassword.innerText = ""
    checkPassword.style.color = ""
}

const validateLogin = (inputUsername,inputPassword) => {
    let isValid = true;
    if(inputUsername !== adminUser){
        checkUserName.innerText = "Username is invalid"
        checkUserName.style.color = "red"
        isValid = false;
    }
    if(inputPassword !== adminPass){
        checkUserPass.innerText = "Password is invalid" 
        checkUserPass.style.color = "red"
        isValid = false;
    }
    return isValid
}

// apply arrow function
loginForm.addEventListener('submit', (event) => {
    event.preventDefault() // prevent loading page
    
    const inputUsername = userNameInput.value
    const inputPassword = userPassInput.value

    clearErrorMessage();

    const isValid = validateLogin(inputUsername, inputPassword)

    if(isValid){
        alert("Login Successful!")
        loginForm.reset();
        // window.location.href = "admin.html"; in case of redirect to another page
    }else{
        alert("Username or Password is invalid!")
    }
})