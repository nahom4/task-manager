# **Task Manger**

Task manger is a simple tool that can be used to organize our daily tasks. Users can provide
the title, description,status and due date of the tasks they want to perform and the web app
helps them to keep track of these tasks.

## **prerequisites**
The web site is developed using Nest js and mysql databse for the back end and html,css and javascript for the front end. As such to get the website up and running the user needs to have NestJs installed on their machine. further more they need to have a mysql server running on thier machine. If a user fullfills these two requirments they should be good to go.

## **Installation**

1. Clone this repository to your local machine.
2. Open the folder containing the project in your command line or VSCode and run the `npm install command` to install all necessary dependencies.
3. Go to `app.Module.ts` file and change the username and password to match your MySQL server credentials.
4. Create a new database called task_management on your MySQL server.
5. Run the `npm run start:dev` command to start the NestJS program.
6. From the `src` folder in the front end directory, open the `signup.html` file in your browser to access the website.

## **Usage**
The website is straight forward to use. After users sign up and login, they will access
all the tasks they have created. They can easily create new tasks by clicking the create button. They can also update the tasks by clicking the update button and providing the changes they need to update.Further more users can delete their tasks by just clicking the delete button on the specific task. Lastly users can logout of the website by clicking on the logout link.`
