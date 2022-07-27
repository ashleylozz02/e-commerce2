ALTER TABLE `CRUD`.`Products` 
CHANGE COLUMN `Primary Key` `Primary Key` VARCHAR(45) NOT NULL ,
DROP PRIMARY KEY,
ADD PRIMARY KEY (`idProducts`, `Primary Key`);
