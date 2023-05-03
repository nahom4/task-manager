const userName = document.getElementById('UserName')
const password = document.getElementById('password')
const form = document.getElementById('form')
const submit_btn = document.getElementById('submit_btn')
const error = document.getElementById('error')


form.addEventListener('submit',signInUser)

async function signInUser(event){
    event.preventDefault()

    let signInData = {
        "userName" : userName.value,
        "password" : password.value

    }
 
    const response = await fetch("http://localhost:3000/auth/signIn",{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(signInData)
    });
    console.log(response)
    const jsonData = await response.json();
    
    if (response.status === 201){
        localStorage.setItem('jwtToken',jsonData.accessToken)
        window.location.assign('../html/home.html')

    }
    else{
        error.classList.add('show')

    }
   
    
   



}

