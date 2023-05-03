// for the home page we fetch all the tasks of the signed in user and render them of the screen
// first get the access token
const Container = document.getElementById('container')
const accessToken = localStorage.getItem('jwtToken')
const  create = document.getElementById('create')
const form_card = document.getElementById('form-card')
const title = document.getElementById('title')
const description = document.getElementById('description')
const update_card = document.getElementById('form-card-update')
const update_btn = document.getElementById('update-btn')
const create_btn = document.getElementById('create-btn')
const update_title = document.getElementById('update-title')
const update_description = document.getElementById('update-description')
const in_progress = document.getElementById('in-progress')
const completed = document.getElementById('completed')
const taskTitle = document.getElementById('taskTitle')
const taskDescription = document.getElementById('taskDescription')
const logout = document.getElementById('logout')
const date = document.getElementById('date')
const update_date = document.getElementById('update-date')
const form = document.getElementById('form')
let taskIdValue = 1


// Create a new task

create.addEventListener('click',createTask)
function createTask(){
    
    form_card.classList.toggle('show')

}
// here we submit our values to the databse
form.addEventListener('submit',async (e) =>{
    // e.preventDefault()
  
    taskData = {
        "title" : title.value,
        "description" : description.value,
        "dueDate" : date.value
    }

    

    const response = await fetch('http://localhost:3000/tasks',{
        method: 'Post',
        headers: {  'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,},
        body: JSON.stringify(taskData)

    })

   

  

})

// // update tasks
update_btn.addEventListener('click',updateTask)

function updateTask(){
    
    
    taskUpdate = {
        'title':update_title.value,
        'description' : update_description.value,
        'status': in_progress.checked ? "in-progress": completed.value,
        'dueDate' : update_date.value
    }

    
   
    const response = fetch(`http://localhost:3000/tasks/${taskIdValue}`,{
        method : 'PATCH',
        headers: {  'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,},
        body:JSON.stringify(taskUpdate)
    })

    location.reload()


}



// get all users form the database 

async function getAllTasks(){
    const response = await fetch('http://localhost:3000/tasks',{
        method: 'Get',
        headers: {  'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,}
    })

    jsonData = await response.json()
   
    jsonData.forEach(element => {
      
        Container.innerHTML += ` <div class="card">
        <h2 class="title" id=title${element.id}>${element['title']}</h2>
        <p class="description" id= description${element.id}>${element['description']}</p>
        <div class="status">
          <span class="label">Status:</span>
          <span class="value in-progress ${element.status}" id=status${element.id}>${element.status}</span><br>
          
        </div>
        <p class="date status" id=date${element.id}>due date :${element.dueDate}</p>
        <div>
        <button class="btn update" id=${element.id} >update</button>
        <button class="btn delete" id=${element.id}>delete</button>
    </div>
      </div>
      
</div>`
        
    });

 // add event listner to all the buttons 

btnList = [].slice.call(document.getElementsByClassName('btn'));


btnList.forEach((button) => {
    
    button.addEventListener('click',main)

})
}

getAllTasks()


// delete tasks
async function deleteTask(id){
    const response = await fetch(`http://localhost:3000/tasks/${id}`,{
        method: 'Delete',
        headers: {  'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,}
    })

    jsonData = await response.json()
}


// This a function used to pick the operations choosen by the user
function main(e) {
    taskId = e.target.id
    btnClass = e.target.classList
    btnClass = [].slice.call(btnClass)

    if(btnClass.includes('delete')){  
        deleteTask(taskId)
        location.reload()
    }
    console.log(btnClass)
    if (btnClass.includes('update')){
        console.log(update_card.classList)
        taskIdValue = taskId
        console.log(document.getElementById(`title${taskId}`).innerText,'here')
        update_card.classList.toggle('show') 
        update_title.value = document.getElementById(`title${taskId}`).innerText
        update_description.value = document.getElementById(`description${taskIdValue}`).innerText

        statusValue = document.getElementById(`status${taskId}`)
        if (statusValue.innerText.toLowerCase() === "in progress"){

            in_progress.checked = true

        }

        else{
            completed.checked = true
        }
        date_value = document.getElementById(`date${taskId}`).innerText
        date_value = date_value.split(':')[1].split('-').join('/')
        
        const dateObj = new Date(date_value);
        const formattedDate = dateObj.toISOString().split('T')[0];
       
        update_date.value = formattedDate

       
    }
}

// logout functionality

logout.addEventListener('click',logoutFunction)

function logoutFunction(){

    localStorage.removeItem('jwtToken')
    var Backlen=history.length;   
    history.go(-Backlen); 
    window.location.assign('../html/login.html')
}




