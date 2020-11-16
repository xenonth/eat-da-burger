USE burgers_db;

INSERT INTO burgers (burger_name, devoured) values 
	("Beef Burger Deluxe", FALSE),
    ("Bill's Bucktooth Burger", FALSE),
    ("The Humbugger", FALSE);

UPDATE burgers SET devoured = FALSE WHERE burgers.id = 1;

SELECT * FROM burgers 