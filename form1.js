
const theme = document.querySelector('#theme');
const mainDiv = document.querySelector('.main-div')
theme.addEventListener('click', ()=>{
    mainDiv.classList.toggle('dark')
})





const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password')

form.addEventListener('submit', (e)=>{
    checkUsername(username, e);
    checkPassword(password, e);
});


username.addEventListener('input', (e)=>{
    checkUsername(username, e);
})

password.addEventListener('input', (e)=>{
    checkPassword(password, e);
})


function checkUsername(username, e){
    const usernameValue = username.value.trim()
    
    if (usernameValue === '' || usernameValue.length < 3 || usernameValue.length > 20) {
        e.preventDefault()
        setErrorFor(username)
    } else {
        setSuccessFor(username)
    }

}
function checkPassword(password, e){
    const passwordValue = password.value.trim()
    if (passwordValue === '' || passwordValue.length<6 || passwordValue.length > 15) {
        e.preventDefault()
        setErrorFor(password)
    } else {
        setSuccessFor(password)
    }
}
function setErrorFor(input, message) {
    const formControl = input.parentElement
    formControl.className = "form-control error";
}
function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = "form-control success";
}