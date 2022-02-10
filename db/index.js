const connection =  require('./connection')

class DB {
    constructor(connection){
        this.connection =  connection
    }

    getDepartments(){
        return this.connection.promise().query('select * from department;');
    }

    getRoles(){
        return this.connection.promise().query('select role.title, role.id, department.name as department, role.salary from role left join department on role.department_id = department.id;');
    }

    getEmployees(){
        return this.connection.promise().query(`select employee.id, employee.first_name, employee.last_name, role.title, department.name as department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) as manager from employee left join role on employee.role_id = role.id left join department on role.department_id = department.id left join employee manager on manager.id = employee.manager_id;`)
    }

    createEmployee(employee){
        return this.connection.promise().query('insert into employee set ?', employee)
    }

    createDepartment(department){
        return this.connection.promise().query('insert into department set ?', department)
    }

    createRole(role){
        return this.connection.promise().query('insert into role set ?', role)
    }

    changeEmployee(employee){
        return this.connection.promise().query('update employee')
    }
    
}

module.exports = new DB(connection)