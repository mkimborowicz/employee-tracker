
DROP DATABASE IF EXISTS tracker;

CREATE DATABASE tracker_db;

USE tracker_db;
CREATE TABLE IF NOT EXISTS department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL.
    department_id INT NOT NULL
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL, 
    manager_id INT NOT NULL

    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL

    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);