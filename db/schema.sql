### Schema
DROP DATABASE IF EXISTS task_db;

CREATE DATABASE task_db;
USE task_db;

CREATE TABLE tasks
(
	id int NOT NULL AUTO_INCREMENT,
	task_name varchar(255) NOT NULL,
	done BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
