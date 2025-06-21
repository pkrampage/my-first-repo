const loginForm = document.getElementById('login-form')
const userName = document.getElementById('username')
const userPass = document.getElementById('userpassword')
const checkUserName = document.getElementById('checkUsername')
const checkUserPass = document.getElementById('checkPassword')

let userData = {
    userName: "admin",
    userPass: "P@ssword"
}

loginForm.addEventListener('submit',function(){
    event.preventDefault(); // prevent Form loading page
    const inputUsername = userName.value;
    const inputPassword = userPass.value;

    checkUsername.innerText = "";
    checkUsername.style.color = "";
    checkPassword.innerText = "";
    checkPassword.style.color = "";

    let isValid = true; // login data validation

    if(userName.value !== userData.userName){
        checkUserName.innerText = "Username is invalid"
        checkUserName.style.color = "red"
        isValid = false;
    }
    if(userPass.value !== userData.userPass){
        checkUserPass.innerText = "Password is invalid" 
        checkUserPass.style.color = "red"
        isValid = false;
    }

    if(isValid){
        alert("Login Successful!")
        loginForm.reset();
        // window.location.href = "admin.html"; in case of redirect to another page
    }else{
        alert("Username or Password is invalid!")
    }
})