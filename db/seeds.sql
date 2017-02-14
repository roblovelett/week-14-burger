-- 4. Still in the `db` folder, create a `seeds.sql` file. In this file, write --
-- insert queries to populate the `burgers` table with at least three entries. --

INSERT INTO burgers (burger_name, date)
VALUES ("Strawberry Flavored Beefsteak", '1970-01-01 00:00:01');
INSERT INTO burgers (burger_name, date)
VALUES ("Quadruple Patty Boigah", '1980-02-02 02:20:20');
INSERT INTO burgers (burger_name, date)
VALUES ("Simple Frog Burger", '1990-03-03 03:30:30');