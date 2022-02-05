const mysql = require('mysql2');
const inquirer = require('inquirer');
const table = require('console.table');

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'maddy123',
        database: 'tracker_db'
 },
)

const menu = [
    {
        type: "list",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
        name: "menu"
    }
]

const department = [
    {
        type: "input",
        message: "What is the name of the department?",
        name: "newDept"
    }
]

const role = [
    {
        type: "input",
        message: "What is the name of the role?",
        name: "roleName"
    },
    {
        type: "input",
        message: "What is the salary of the role?",
        name: "roleSalary"
    },
    {
        type: "list",
        message: "Which department does the role belong to?",
        choices: ["Engineering", "Finance", "Legal", "Sales", "Service", "Add an employee", "Update an employee role"],
        name: "roleDept"
    }
]

let roleChoices = db.query(
    'select id as value,, title as name from role'
);


const employee = [
    {
        type: "input",
        message: "What is the employee's first name?",
        name: "firstName"
    },
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "lastName"
    },
    {
        type: "list",
        message: "What is the employee's role?",
        choices: roleChoices,
        name: "empRole"
    },
    {
        type: "list",
        message: "Who is the employee's manager?",
        choices: ["John Doe", "Mike Chan", "Ashley Rodriguez", "Kevin Tupik", "Kunal Singh", "Malia Brown"],
        name: "empManager"
    }
]
function askQuestion() {
inquirer.prompt(menu).then((res)=>{
    switch(res.menu){
        case "View all departments":
        showDepartments();
        askQuestion()
        break;

        case "View all roles":
        showRoles()
        // askQuestion()
        break;

        case "View all employees":
        showEmployees()
        // askQuestion()
        break;

        case "Add a department":
        addDepartment()
        break;

        case "Add a role":
        addRole()
        break;

        case "Add an employee":
        addEmployee()
        break;

        case "Update an employee role":
        updateEmployee()
        break;
    }

})
}

function showDepartments() {
       db.query (`select * from department`, (err, result)  => {
            console.table(result);
        });
    }

    function showRoles() {
        db.query (`select * from role`, (err, result)  => {
             console.table(result);
         });
     }

     function showEmployees() {
        db.query (`select * from employee`, (err, result)  => {
             console.table(result);
         });
     }

askQuestion();

