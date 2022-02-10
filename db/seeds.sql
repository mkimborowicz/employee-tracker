USE tracker_db;
INSERT INTO department (name)
VALUES ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('Sales'),
       ('Service');

INSERT INTO role (title, salary, department_id)
VALUES 

       ( 'Engineering Manager', 150000, 1),
       ('Product Manager', 150000, 1),
       ('Lead Lawyer', 150000, 3),
       ('Sales Manager', 150000, 4),
       ('Marketing Manager', 150000, 4),

       ('Engineer', 100000, 1),
       ('Accountant', 80000, 2),
       ('Lawyer', 125000, 3),
       ('Salesperson', 80000, 4),
       ('Marketer', 75000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Bob', 'Joe', 1, NULL),
       ('David', 'Gee', 6, 1),
       ('Nate', 'Walchenbach', 3, NULL),
       ('Maddy', 'Kimborowicz', 8, 3),
       ('Ashton', 'Demoinz', 4, NULL);