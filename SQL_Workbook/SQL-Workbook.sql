/* 2.1 Select */
select * from "Employee";
select * from "Employee" where "LastName" = 'King';
select * from "Employee" where "FirstName" = 'Andrew' and "ReportsTo" is NULL;

/* 2.2 Order By */
select * from "Album" order by "Title" desc;
select "FirstName" from "Customer" order by "FirstName" asc;

/* 2.3 Insert Into */
INSERT INTO "Genre" ("GenreId", "Name") VALUES (26, 'Test1');
INSERT INTO "Genre" ("GenreId", "Name") VALUES (27, 'Test2');
INSERT INTO "Employee" ("EmployeeId", "LastName", "FirstName", "Title", "BirthDate", "HireDate", "Address", "City", "State", "Country", "PostalCode", "Phone", "Fax", "Email") 
VALUES (9, 'Angeles', 'Jose', 'Game Developer', '1992/08/27', '2020/04/15', 'Somewhere 123', 'Riverview', 'Florida', 'US', '33578', '+1 (888) 888-8888', '+1 (888) 888-8888', 'jangeles@revature.com');
INSERT INTO "Employee" ("EmployeeId", "LastName", "FirstName", "Title", "BirthDate", "HireDate", "Address", "City", "State", "Country", "PostalCode", "Phone", "Fax", "Email") 
VALUES (10, 'Flores', 'Jose', 'Web Developer', '1992/08/27', '2020/04/15', 'Somewhere 321', 'Riverview', 'Florida', 'US', '33578', '+1 (999) 999-9999', '+1 (999) 999-9999', 'jFlores@revature.com');
INSERT INTO "Customer" ("CustomerId", "FirstName", "LastName", "Address", "City", "Country", "PostalCode", "Phone", "Email", "SupportRepId") 
VALUES (60, 'Ariel', 'Lopez', 'Somewhere 123', 'Nowhere', 'US', '77777', N'+1 (111) 111-1111', 'ArielLopez@revature.com', 5);
INSERT INTO "Customer" ("CustomerId", "FirstName", "LastName", "Address", "City", "Country", "PostalCode", "Phone", "Email", "SupportRepId") 
VALUES (61, 'Ariel', 'Mermaid', 'Somewhere 321', 'No-where', 'US', '66666', N'+2 (222) 222-2222', 'ArielMermaidz@revature.com', 6);

/* 2.4 Update */
UPDATE "Customer" set "FirstName"='Robert', "LastName"='White' WHERE "FirstName"='Aaron' and "LastName"='Mitchell';
UPDATE "Artist" set "Name"='CCR' WHERE "Name" = 'Creedence Clearwater Revival';

/* 2.5 Like */
SELECT * FROM "Invoice" where "BillingAddress" LIKE '%T%';

/* 2.6 Between */
SELECT * FROM "Invoice" where "Total" BETWEEN 15 and 50;
SELECT * FROM "Employee" where "HireDate" BETWEEN '2003/06/01' and '2004/03/01';

/* 2.7 Delete */
DELETE FROM "Customer" where "FirstName" = 'Robert' AND "LastName" = 'Walter';
SELECT * FROM "Customer"; 

/* 3.1 */
CREATE or REPLACE FUNCTION returnTime()
returns timestamp 
as $$
BEGIN 
	return CURRENT_TIMESTAMP; 
END $$
language PLPGSQL;
select returnTime();

CREATE or REPLACE FUNCTION returnLength(id int)
RETURNS int as $$
BEGIN 
	return length("Name") from "MediaType" where "MediaTypeId" = id;
end
$$ language plpgsql;
select returnLength(2);