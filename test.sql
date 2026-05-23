-- Creating a table
CREATE TABLE cars (
  brand VARCHAR(255),
  model VARCHAR(255),
  year INT
);

INSERT INTO cars (brand, model, year)
VALUES ('Ford', 'Mustang', 1964);
SELECT * FROM cars;


-- Insert into multiple rows
INSERT INTO cars (brand, model, year)
VALUES
  ('Volvo', 'p1800', 1968),
  ('BMW', 'M1', 1978),
  ('Toyota', 'Celica', 1975);


-- Adding a column to a Table
ALTER TABLE cars
ADD color VARCHAR(255);

-- Updating a particular row in a Table
UPDATE cars SET color = 'red' WHERE brand = 'Volvo'; --If you don't use WHERE clause, it will update all the rows in the table


--Alter the Column in a Table
ALTER TABLE cars
ALTER COLUMN year TYPE VARCHAR(4); --chnaging column type from INT to VARCHAR

--Dropping a column in a Table
ALTER TABLE cars
DROP COLUMN color;

-- Deleting from a table
DROP TABLE cars;

