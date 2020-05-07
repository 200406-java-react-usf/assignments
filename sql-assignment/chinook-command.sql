-- 2.1 SELECT
-- Task – Select all records from the Employee table. 
SELECT
	*
FROM
	"Employee" -- Task – Select all records from the Employee table where last name is King.
SELECT
	*
FROM
	"Employee"
WHERE
	"LastName" = "King" -- Task – Select all records from the Employee table where first name is Andrew and REPORTSTO is NULL.
SELECT
	*
FROM
	"Employee"
WHERE
	"FirstName" = 'Andrew'
	AND "ReportsTo" = null -- 2.2 ORDER BY
	-- Task – Select all albums in album table and sort result set in descending order
SELECT
	*
FROM
	"Album"
ORDER BY
	"AlbumId" -- Task – Select first name from Customer and sort result set in ascending order
SELECT
	*
FROM
	"Customer"
ORDER BY
	"FirstName" -- 2.3 INSERT INTO
	-- Task – Insert two new records into Genre table
insert into
	"Genre"("GenreId", "Name")
values
	('998', 'test1'),
('999', 'test2') -- Task – Insert two new records into Employee table
insert into
	"Employee"("EmployeeId", "LastName", "FirstName")
values
	('998', 'LastName1', 'Firstname1'),
	('999', 'LastName2', 'Firstname2') -- Task – Insert two new records into Customer table
insert into
	"Customer" ("CustomerId", "LastName", "FirstName", "Email")
values
	(
		'998',
		'LastName1',
		'Firstname1',
		'test1@test.com'
	),
	(
		'999',
		'LastName2',
		'Firstname2',
		'test2@test.com'
	) -- 2.4 UPDATE
	-- Task – Update Aaron Mitchell in Customer table to Robert Walter
update
	"Customer"
set
	"FirstName" = 'Robert',
	"LastName" = 'Walter'
where
	"FirstName" = 'Aaron'
	and "LastName" = 'Mitchell' -- Task – Update name of artist “Creedence Clearwater Revival” to “CCR”
update
	"Artist"
set
	"Name" = 'CCR'
where
	"Name" = 'Creedence Clearwater Revival' -- 2.5 LIKE
	-- Task – Select all invoices with a billing address like “T”
select
	*
from
	"Invoice"
where
	"BillingAddress" like '%T%' -- 2.6 BETWEEN
	-- Task – Select all invoices that have a total between 15 and 50
select
	*
from
	"Invoice"
where
	"Total" between '15'
	and '50' -- Task – Select all employees hired between 1st of June 2003 and 1st of March 2004
select
	*
from
	"Employee"
where
	"HireDate" between '2003-06-01'
	and '2004-03-01' -- 2.7 DELETE
	-- Task – Delete a record in Customer table where the name is Robert Walter (There may be constraints that rely on this, find out how to resolve them).
delete from
	"Customer"
where
	"FirstName" = 'Robert'
	and "LastName" = 'Walter' -- 3.0 SQL Functions
	-- In this section you will be using the Oracle system functions, as well as your own functions, to perform various actions against the database
	-- 3.1 System Defined Functions
	-- Task – Create a function that returns the current time.
	CREATE
	OR REPLACE FUNCTION getCurrentTime() RETURNS TIME AS $ $ BEGIN RETURN CURRENT_TIMESTAMP;

END;

$ $ LANGUAGE PLPGSQL;

-- Task – create a function that returns the length of a mediatype from the mediatype table
CREATE
OR REPLACE FUNCTION mediaTypelength(val integer) RETURNS integer AS $ $ begin Return LENGTH("Name")
from
	"MediaType"
where
	"MediaTypeId" = val;

END;

$ $ LANGUAGE PLPGSQL;

-- 3.2 System Defined Aggregate Functions
-- Task –Create a function that returns the average total of all invoices
CREATE
OR REPLACE FUNCTION meanInvoice() RETURNS float AS $ $ begin Return avg("Total")
from
	"Invoice";

END;

$ $ LANGUAGE PLPGSQL;

-- Task – Create a function that returns the most expensive track
CREATE
OR REPLACE FUNCTION maxCostTrack() RETURNS float AS $ $ begin Return max("UnitPrice")
from
	"Track";

END;

$ $ LANGUAGE PLPGSQL;

-- 3.3 User Defined Scalar Functions
-- Task – Create a function that returns the average price of invoice-line items in the invoice-line table
CREATE
OR REPLACE FUNCTION meanInvoiceLine() RETURNS float AS $ $ begin Return avg("UnitPrice")
from
	"InvoiceLine";

END;

$ $ LANGUAGE PLPGSQL;

-- 3.4 User Defined Table Valued Functions
-- Task – Create a function that returns all employees who are born after 1968.
CREATE
OR REPLACE FUNCTION bornAfter1968 () RETURNS TABLE (
	FirstName VARCHAR,
	LasttName VARCHAR,
	Birthdate TIMESTAMP
) AS $ $ BEGIN RETURN QUERY
SELECT
	"FirstName",
	"LastName",
	"BirthDate"
FROM
	"Employee"
WHERE
	"BirthDate" >= '1968-01-01';

END;

$ $ LANGUAGE 'plpgsql';

-- 4.0 Stored Procedures
--  In this section you will be creating and executing stored procedures. You will be creating various types of stored procedures that take input and output parameters.
-- 4.1 Basic Stored Procedure
-- Task – Create a stored procedure that selects the first and last names of all the employees.

CREATE
OR REPLACE FUNCTION SelectEmployeeName () RETURNS TABLE (FirstName VARCHAR, LasttName VARCHAR) AS $ $ BEGIN RETURN QUERY
SELECT
	"FirstName",
	"LastName"
FROM
	"Employee";

end;

$ $ LANGUAGE 'plpgsql';


-- 4.2 Stored Procedure Input Parameters
-- Task – Create a stored procedure that updates the personal information of an employee.
CREATE
or REPLACE PROCEDURE updateEmployee(
	in id int,
	in firstNameNew VARCHAR,
	in lastNameNew VARCHAR
) as $ $ BEGIN
Update
	"Employee"
set
	"FirstName" = firstNameNew,
	"LastName" = lastNameNew
where
	"EmployeeId" = id;

end;

$ $ LANGUAGE plpgsql 
-- Task – Create a stored procedure that returns the managers of an employee

create or replace function managers(firstName text, lastName text)
returns table(fn varchar, ln varchar, title varchar)
as $$
begin 
	return query select 
	"FirstName", "LastName", 
	"Title" from "Employee" 

where "EmployeeId" = (select "ReportsTo" from "Employee" where "FirstName" = firstName and "LastName" = lastName) ;
end;
$$
language plpgsql;


-- 4.3 Stored Procedure Output Parameters
-- Task – Create a stored procedure that returns the name and company of a customer.

create or replace function companyName(firstName text, lastName text)
returns table(fn varchar, ln varchar, Company_Title varchar)
as $$
begin
	return query select "FirstName", "LastName", "Company" from "Customer" where "FirstName" = firstName and "LastName" = lastName;
end;
$$
language plpgsql;

-- 5.0 Transactions
-- In this section you will be working with transactions. Transactions are usually nested within a stored procedure. You will also be working with handling errors in your SQL.
-- Task – Create a transaction that given a invoiceId will delete that invoice (There may be constraints that rely on this, find out how to resolve them)...poiij
create or replace procedure delete_Invoice(id int)
language plpgsql
as $$
declare 
i record;
begin 
	for i in select "InvoiceId" from "InvoiceLine" il where "InvoiceId" = id
	loop
		delete from "InvoiceLine" where "InvoiceId" = id;
	end loop;
	delete from "Invoice"  where "InvoiceId" = id; 
end;
$$;




-- Task – Create a transaction nested within a stored procedure that inserts a new record in the Customer table

create or replace procedure insert_Customer(id int, fn text, ln text, comp text, addr text, city text, state varchar(2), country text, pc varchar, phone varchar, fax varchar, email varchar, srId int)
language plpgsql
as $$
begin 
	select max( "CustomerId" ) into id from "Customer";
	id := id + 1;
	insert into "Customer" values (id, fn, ln, comp, addr, city, state, country, pc, phone, fax, email, srId);
end;
$$;

-- 6.0 Triggers 
-- In this section you will create various kinds of triggers that work when certain DML statements are executed on a table.
-- 6.1 AFTER/FOR
-- Task - Create an after insert trigger on the employee table fired after a new record is inserted into the table.
create or replace function trigger_new_employee()
returns trigger
as $$
begin 
	return new;
end;
$$
language plpgsql;

create trigger new_employee
after insert 
on "Employee"
for each statement 
execute procedure trigger_new_employee();
-- Task – Create an after update trigger on the album table that fires after a row is updated in the table
create or replace function album_after_update()
returns trigger 
as $$
begin 
	return new;
end
$$
language plpgsql;

create trigger update_album
after update 
on "Album"
for each row
execute procedure album_after_update();


-- Task – Create an after delete trigger on the customer table that fires after a row is deleted from the table.
create or replace function trigger_new_employee()
returns trigger
as $$
begin 
	return new;
end;
$$
language plpgsql;

create trigger new_employee
after insert 
on "Employee"
for each statement 
execute procedure trigger_new_employee();

-- 6.2 BEFORE
-- Task – Create a before trigger that restricts the deletion of any invoice that is priced over 50 dollars.
create or replace function trigger_delete_invoice()
returns trigger
as $$
begin 
	if ("Total">50)
	 then 
		rollback;
	end if;
	return new;
end;
$$
language plpgsql;

create trigger new_employee
before delete 
on "Invoice"
for each row 
execute procedure trigger_delete_invoice();

-- 7.0 JOINS
-- In this section you will be working with combining various tables through the use of joins. You will work with outer, inner, right, left, cross, and self joins.
-- 7.1 INNER
-- Task – Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId.
select
	"Customer"."FirstName",
	"Customer"."LastName",
	"Invoice"."InvoiceId"
from
	"Customer"
	INNER join "Invoice" ON "Customer"."CustomerId" = "Invoice"."CustomerId" -- 7.2 OUTER
	-- Task – Create an outer join that joins the customer and invoice table, specifying the CustomerId, firstname, last name, invoiceId, and total.
SELECT
	"Customer"."CustomerId",
	"Customer"."FirstName",
	"Customer"."LastName",
	"Invoice"."InvoiceId",
	"Invoice"."Total"
from
	"Customer"
	INNER join "Invoice" ON "Customer"."CustomerId" = "Invoice"."CustomerId" -- 7.3 RIGHT
	-- Task – Create a right join that joins album and artist specifying artist name and title.
SELECT
	"Artist"."Name",
	"Album"."Title"
from
	"Artist"
	right JOIN "Album" on "Artist"."ArtistId" = "Album"."ArtistId" -- 7.4 CROSS
	-- Task – Create a cross join that joins album and artist and sorts by artist name in ascending order.
SELECT
	"Artist"."Name",
	"Album"."Title"
from
	"Artist"
	cross JOIN "Album"
ORDER by
	"Artist"."Name" -- 7.5 SELF
	-- Task – Perform a self-join on the employee table, joining on the reports to column.
select
	*
from
	"Employee" a,
	"Employee" b
where
	b."ReportsTo" = a."EmployeeId" -- 8.0 Indexes
	-- In this section you will be creating Indexes on various tables. Indexes can speed up performance of reading data.
	-- 8.1 Indexes
	-- Task – Create an index on of table of your choice