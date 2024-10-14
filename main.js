const username = document.getElementById("Username")
const email = document.getElementById("Email")
const password = document.getElementById("Password")
const cpassword = document.getElementById("CPassword")
const form = document.querySelector("form")
const button = form.querySelector("button")


const inputs = [username,email,password,cpassword]
const validations = [nameValidation,emailValidation,passwordValildation,cpasswordValidation]

button.addEventListener("click",(e) => {
    if(!validateForm()){
        window.alert("Invalid User Incredentials")
        e.preventDefault()
    }     
})

inputs.map((input, index) => {
    input.addEventListener('focusin',validations[index])
})

inputs.map((input, index) => {
    input.addEventListener('input', validations[index])
})

inputs.map((input) => {
    input.addEventListener('focusout',() => showMessage(input,"",""))
})


function nameValidation(){
    const usvalue = username.value

    if(usvalue === ''){
        showMessage(username,"username is empty","error")
        return false
    }
    else
        showMessage(username,"","success")
    return true
}

function emailValidation(){
    const evalue = email.value
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i;

    if(evalue === ""){
        showMessage(email,"empty","error")
        return false
    }
    else if(!emailRegex.test(evalue)){
        showMessage(email,"invalid email","error")
        return false
    }
    else
        showMessage(email,"good","success")
    return true
}

function passwordValildation(){
    const pvalue = password.value

    if(pvalue === ""){
        showMessage(password,"empty","error")
        return false
    }
    else if(pvalue.length < 8){
        showMessage(password,"weak password","error")
        return false
    }
    else
        showMessage(password,"strong","success")
    return true
}

function cpasswordValidation(){
    const cpvalue = cpassword.value
    const pvalue = password.value

    if(cpvalue !== pvalue){
        showMessage(cpassword,"password mismatch","error")
        return false
    }
    else if(pvalue === ""){
        showMessage(cpassword,"password empty","error")
        return false
    }
    else
        showMessage(cpassword,"matched","success")
    return true
}

function validateForm(){
    let flag = true

    if(!nameValidation())
        flag = false

    if(!emailValidation())
        flag = false

    if(!passwordValildation())
        flag = false

    if(!cpasswordValidation())
        flag = false

    return flag
}


function showMessage(element, message = "", type) {
    const parent = element.parentElement;
    const messageDiv = parent.querySelector("div");

    messageDiv.innerText = message;
    messageDiv.classList.remove("success", "error");
    messageDiv.classList.add(type);
}
