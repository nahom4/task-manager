const firstName = document.getElementById('FirstName')
const lastName = document.getElementById('LastName')
const userName = document.getElementById('UserName')
const password = document.getElementById('password')
const submit_btn = document.getElementById('submit_btn')
const form = document.getElementById('form')


form.addEventListener('submit',createUser)

async function createUser(e) {
    

    e.preventDefault()

    let userData = {

        "firstName" : firstName.value,
        "lastName" : lastName.value,
        "userName" : userName.value,
        "password" : password.value

    }
  
    const response = await fetch("http://localhost:3000/users",{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(userData)
    });
    const jsonData = await response.json();
    window.location.assign('../html/login.html')
    
  }



