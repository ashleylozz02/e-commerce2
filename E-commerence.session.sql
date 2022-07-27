ALTER TABLE `CRUD`.`Products` 
CHANGE COLUMN `Primary Key` `Primary Key` VARCHAR(45) NOT NULL ,
DROP PRIMARY KEY,
ADD PRIMARY KEY (`idProducts`, `Primary Key`);
USE CRUD ;

CREATE table products(
id Products INT AUTO_INCREMENT,,
number INT,
name VARCHAR(45),
type VARCHAR(45),
price INT,
price INT,
  Item description VARCHAR (150),
  );
