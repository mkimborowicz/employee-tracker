const inquirer = require("inquirer");
const table = require("console.table");
const db = require("./db");

const menu = [
  {
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
    name: "menu",
  },
];

function askQuestion() {
  inquirer.prompt(menu).then((res) => {
    switch (res.menu) {
      case "View all departments":
        showDepartments();
        break;

      case "View all roles":
        showRoles();
        break;

      case "View all employees":
        showEmployees();
        break;

      case "Add a department":
        addDepartment();
        break;

      case "Add a role":
        addRole();
        break;

      case "Add an employee":
        addEmployee();
        break;

      case "Update an employee role":
        updateEmployee();
        break;
    }
  });
}

function showDepartments() {
  db.getDepartments()
    .then(([depts]) => {
      console.table(depts);
    })
    .then(() => askQuestion());
}

function showRoles() {
  db.getRoles()
    .then(([roles]) => {
      console.table(roles);
    })
    .then(() => askQuestion());
}

function showEmployees() {
  db.getEmployees()
    .then(([emps]) => {
      console.table(emps);
    })
    .then(() => askQuestion());
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the department?",
        name: "newDept",
      },
    ])
    .then((res) => {
      const deptName = res.newDept
      let newDept = { name: deptName };
      db.createDepartment(newDept).then(() => console.log(`Added ${deptName} to the database`)).then(() => askQuestion());
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the role?",
        name: "roleName",
      },
      {
        type: "input",
        message: "What is the salary of the role?",
        name: "roleSalary",
      },
    ])
    .then((res) => {
      const roleName = res.roleName;
      const roleSalary = res.roleSalary;

      db.getDepartments().then(([data]) => {
        const departmentChoices = data.map(({ id, name }) => ({
          name: name,
          value: id,
        }));

        inquirer
          .prompt([
            {
              type: "list",
              message: "Which department does the role belong to?",
              choices: departmentChoices,
              name: "roleDept",
            },
          ])
          .then((res) => {
            let newRole = {
              title: roleName,
              salary: roleSalary,
              department_id: res.roleDept,
            };
            db.createRole(newRole).then(() => console.log(`Added ${roleName} to the database`))
            .then(() => askQuestion());
          });
      });
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "lastName",
      },
    ])
    .then((res) => {
      const firstName = res.firstName;
      const lastName = res.lastName;

      db.getRoles().then(([data]) => {
        const roleChoices = data.map(({ id, title }) => ({
          name: title,
          value: id,
        }));

        inquirer
          .prompt({
            type: "list",
            message: "What is the employee's role?",
            choices: roleChoices,
            name: "empRole",
          })
          .then((res) => {
            const roleId = res.empRole;

            db.getEmployees().then(([emps]) => {
              const managerChoices = emps.map(
                ({ id, first_name, last_name }) => ({
                  name: `${first_name} ${last_name}`,
                  value: id,
                })
              );
              managerChoices.unshift({ name: "None", value: null });

              inquirer
                .prompt([
                  {
                    type: "list",
                    message: "Who is the employee's manager?",
                    choices: managerChoices,
                    name: "empManager",
                  },
                ])
                .then((userRes) => {
                  let emp = {
                    first_name: firstName,
                    last_name: lastName,
                    role_id: roleId,
                    manager_id: userRes.empManager,
                  };

                  db.createEmployee(emp).then(() => console.log(`Added ${firstName} ${lastName} to the database`)).then(() => askQuestion());
                });
            });
          });
      });
    });
}

// function updateEmployee() {

//   db.getEmployees().then(([emps]) => {
//     const employeeChoices = emps.map(
//       ({ id, first_name, last_name }) => ({
//         name: `${first_name} ${last_name}`,
//         value: id,
//       }))
  
//   inquirer.prompt ({
//     type: "list",
//     message: "Which employee's role do you want to update?",
//     choices: employeeChoices,
//     name: "empChoice",
//   })
//   .then((res) => {
//     const empChoice = res.empChoice;
//   })

//   db.getRoles().then(([data]) => {
//     const roleChoices = data.map(({ id, title }) => ({
//       name: title,
//       value: id,
//     }))
    
//   inquirer.prompt ({
//     type: "list",
//     message: "Which role do you want to assign the selected employee",
//     choices: roleChoices,
//     name: "roleChoice",
//   })
// .then((res) => {
//   .then(() => console.log(`Updated Employee's role`)).then(() => askQuestion());
// }
//   });
// });

// }

askQuestion();
