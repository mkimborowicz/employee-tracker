const mysql = require('mysql2');
const inquirer = require('inquirer');
const table = require('console.table');

const PORT = process.env.PORT || 3001;


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
        choices: ["Sales lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer", "Customer Service"],
        name: "empRole"
    },
    {
        type: "list",
        message: "Who is the employee's manager?",
        choices: ["John Doe", "Mike Chan", "Ashley Rodriguez", "Kevin Tupik", "Kunal Singh", "Malia Brown"],
        name: "empManager"
    }
]

inquirer.prompt(menu).then((res)=>{
    switch(res.menu){
        case "View all departments":
        showDepartments()
        break;

        case "View all roles":
        showRoles()
        break;

        case "View all employees":
        showEmployees()
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

        default:
        createHTML()
   
}
})
