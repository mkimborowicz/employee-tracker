USE tracker_db;
INSERT INTO department (name)
VALUES ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('Sales'),
       ('Service');

INSERT INTO role (title, salary)
VALUES ('CEO', 1000000),
       ('CTO', 450000),
       ('CFO', 500000),

       ('VP of Product', 200000),
       ('VP of Finance', 200000),
       ('VP of Legal', 250000),
       ('VP of Sales & Marketing', 200000),

       ('Engineering Director', 175000),
       ('Finance Director', 175000),
       ('Legal Director', 200000),
       ('Sales Director', 175000),
       ('Marketing Director', 175000);

    --    (13, 'Engineering Manager', 150000, 1),
    --    (14, 'Product Manager', 150000, 1),
    --    (15, 'Lead Lawyer', 150000, 3),
    --    (16, 'Sales Manager', 150000, 4),
    --    (17, 'Marketing Manager', 150000, 4),

    --    (18, 'Engineer', 100000, 1),
    --    (19, 'Accountant', 80000, 2),
    --    (20, 'Lawyer', 125000, 3),
    --    (21, 'Salesperson', 80000, 4),
    --    (22, 'Marketer', 75000, 4);

INSERT INTO employee (first_name, last_name)
VALUES ('Bob', 'Joe'),
       ('David', 'Gee'),
       ('Nate', 'Walchenbach'),
       ('Maddy', 'Kimborowicz'),
       ('Ashton', 'Demoinz');