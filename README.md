# **Task Manger**

Task manger is a simple tool that can be used to organize our daily tasks. Users can provide
the title, description,status and due date of the tasks they want to perform and the web app
helps them to keep track of these tasks.

## **prerequisites**
The web site is developed using Nest js and mysql databse for the back end and html,css and javascript for the front end. As such to get the website up and running the user needs to have NestJs installed on their machine. further more they need to have a mysql server running on thier machine. If a user fullfills these two requirments they should be good to go.

## **Installation**
step 1 - The user needs to clone this repository on thier machine.
step 2 - After opening the folder containing the project on the command line or vscode, the user
should run the `npm install` command and this will install all the necessary dependencies.
step 3 - The user should go to the environment file and change user name and password to thier
user name and password on the mysql server.
step 4 - The user should create a database called task_management on mysql server.
step 5 - run `npm run start:dev` command to run the Nest programm
step 6 - From the front end folder in the src file open the signup.html file in a browser, after this step the user can freely use the website.

## **Usage**
The website is straight forward to use. After users sign up and login, they will access
all the tasks they have created. They can easily create new tasks by clicking the create button. They can also update the tasks by clicking the update button and providing the changes they need to update.Further more users can delete their tasks by just clicking the delete button on the specific task. Lastly users can logout of the website by clicking on the logout link.
