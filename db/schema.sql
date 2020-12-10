
USE t8dzb7qhpjbddk6m;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (30) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) values 
	("Beef Burger Deluxe", FALSE),
    ("Bill's Bucktooth Burger", FALSE),
    ("The Humbugger", FALSE);

SELECT * FROM burgers