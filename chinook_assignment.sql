--2.0 SQL Queries
--In this section you will be performing various queries against the Oracle Chinook database.

--2.1 SELECT
--Task – Select all records from the Employee table. 
--Task – Select all records from the Employee table where last name is King.
--Task – Select all records from the Employee table where first name is Andrew and REPORTSTO is NULL.

SELECT * from "Employee";

Select * from "Employee" where "LastName" = 'King';

select * from "Employee" where "FirstName" = 'Andrew' and "ReportsTo" is null;

--2.2 ORDER BY
--Task – Select all albums in album table and sort result set in descending order
--Task – Select first name from Customer and sort result set in ascending order

select * from "Album" order by "Title" desc ;

select * from "Customer" order by "FirstName" asc;

--2.3 INSERT INTO
--Task – Insert two new records into Genre table
--Task – Insert two new records into Employee table
--Task – Insert two new records into Customer table


insert into "Genre"("GenreId", "Name") values (26,'Children');
insert into "Genre"("GenreId", "Name") values (27,'Maniac');

insert into "Employee" values (9, 'eng', 'john', 'executive', 1, '1962-02-18 00:00:00', '1962-02-18 00:00:00', '123 smith street', 'brooklyn', 'ny', 'New York', '11223', '1 (718) 934-2343', '1 (829) 999-0000', 'sdfjk@hotmail.com');
insert into "Employee" values (10, 'wong', 'daisy', 'staff', 3, '1990-02-18 00:00:00', '1962-02-18 00:00:00', '123 smith street', 'brooklyn', 'ny', 'New York', '11223', '1 (718) 934-2343', '1 (829) 999-5555', 'sdfjk@hotmail.com');

insert into "Customer" values (60, 'Gary', 'Candy', 'Revature', '454 Tom St.', 'New York City', 'NY', 'USA', '12345', '232-2222-2222', '345-334-3443', 'gary123candy@gmail.com', 4);
insert into "Customer" values (61, 'Sally', 'Licker', 'Revature', '454 Tom St.', 'New York City', 'NY', 'USA', '12345', '232-2222-2222', '345-334-3443', 'gary123candy@gmail.com', 4);

--2.4 UPDATE
--Task – Update Aaron Mitchell in Customer table to Robert Walter
--Task – Update name of artist “Creedence Clearwater Revival” to “CCR”

update "Customer" set "FirstName" = 'Robert', "LastName" = 'Walter' where "FirstName" = 'Aaron';
update "Artist" set "Name" = 'CCR' where "Name" = 'Creedence Clearwater Revival';
--2.5 LIKE
--Task – Select all invoices with a billing address like “T”
Select * from "Invoice" where "BillingAddress" like 'T%';

--2.6 BETWEEN
--Task – Select all invoices that have a total between 15 and 50
--Task – Select all employees hired between 1st of June 2003 and 1st of March 2004
select * from "Invoice" i where "Total" >= 15 and "Total" <=50;

--2.7 DELETE
--Task – Delete a record in Customer table where the name is Robert Walter (There may be constraints that rely on this, find out how to resolve them).
--
select * from "Invoice";
select * from "Customer" where "FirstName" = 'Robert' and "LastName" = 'Mitchell';

alter table "Invoice" drop constraint "FK_InvoiceCustomerId";

alter table "Invoice" add constraint "FK_InvoiceCustomerId"
foreign key ("CustomerId")
references "Customer"("CustomerId") 
on delete cascade;

alter table "InvoiceLine" drop constraint "FK_InvoiceLineInvoiceId";

alter table "InvoiceLine" add constraint "FK_InvoiceLineInvoiceId"
foreign key ("InvoiceId")
references "Invoice"("InvoiceId")
on delete cascade;

delete from "Customer" where "FirstName" = 'Robert' and "LastName" = 'Mitchell';


--3.0 SQL Functions
--In this section you will be using the Oracle system functions, as well as your own functions, to perform various actions against the database

--3.1 System Defined Functions
--Task – Create a function that returns the current time.
--Task – create a function that returns the length of a mediatype from the mediatype table

select now();
select * from "MediaType";
select count(*) from "MediaType";

--3.2 System Defined Aggregate Functions
--Task –Create a function that returns the average total of all invoices
--Task – Create a function that returns the most expensive track
select * from "Invoice";
select avg("Total") from "Invoice";
select max("Total") "most expensive track" from "Invoice" i ;

--3.3 User Defined Scalar Functions
--Task – Create a function that returns the average price of invoice-line items in the invoice-line table
select * from "InvoiceLine" il 

create or replace function average()
returns text as $result$
declare	
	avg numeric;
	result text;
begin
		select avg("UnitPrice") into avg From "InvoiceLine";
		result :=  avg || ' is the average';
		return result;
end
$result$ language plpgsql;

select average();


--3.4 User Defined Table Valued Functions
--Task – Create a function that returns all employees who are born after 1968.


--4.0 Stored Procedures
-- In this section you will be creating and executing stored procedures. You will be creating various types of stored procedures that take input and output parameters.
--4.1 Basic Stored Procedure
--Task – Create a stored procedure that selects the first and last names of all the employees.
select * from "Employee";

create or replace function selectFirstLast() 
returns refcursor as $$
		declare
			ref refcursor;
		
		begin 
			open ref for select "FirstName", "LastName" from "Employee";
		
		return ref;
		
		end
		
		
	$$ language plpgsql;


select selectFirstLast();


--4.2 Stored Procedure Input Parameters
--Task – Create a stored procedure that updates the personal information of an employee.
--Task – Create a stored procedure that returns the managers of an employee

create or replace procedure update_personal_info(last_ text, personal_ text)
 as $$
	begin 
 		update "Employee"
 		set "Phone" = 'private'
 		where "LastName" = last_;
 	end
 $$ language plpgsql;

call update_personal_info('Adams', 'haha');
--4.3 Stored Procedure Output Parameters
--Task – Create a stored procedure that returns the name and company of a customer.
--5.0 Transactions
--In this section you will be working with transactions. Transactions are usually nested within a stored procedure. You will also be working with handling errors in your SQL.
--Task – Create a transaction that given a invoiceId will delete that invoice (There may be constraints that rely on this, find out how to resolve them)...poiij
--Task – Create a transaction nested within a stored procedure that inserts a new record in the Customer table
--6.0 Triggers 
--In this section you will create various kinds of triggers that work when certain DML statements are executed on a table.
--6.1 AFTER/FOR
--Task - Create an after insert trigger on the employee table fired after a new record is inserted into the table.
--Task – Create an after update trigger on the album table that fires after a row is updated in the table
--Task – Create an after delete trigger on the customer table that fires after a row is deleted from the table.
--
create trigger new_record
after insert on "Employees"
for each row
execute function



--6.2 BEFORE
--Task – Create a before trigger that restricts the deletion of any invoice that is priced over 50 dollars.

--7.0 JOINS
--In this section you will be working with combining various tables through the use of joins. You will work with outer, inner, right, left, cross, and self joins.
--7.1 INNER
--Task – Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId.
select * 
from "Customer" c 
join "Invoice" i
using("CustomerId");

--7.2 OUTER
--Task – Create an outer join that joins the customer and invoice table, specifying the CustomerId, firstname, last name, invoiceId, and total.
select c."CustomerId", c."FirstName", c."LastName", i."InvoiceId", i."Total" 
from "Customer" c 
full outer join "Invoice" i
using("CustomerId");

--7.3 RIGHT
--Task – Create a right join that joins album and artist specifying artist name and title.

select ar."Name", al."Title" 
from "Album" al
right join "Artist" ar
using("ArtistId");

--7.4 CROSS
--Task – Create a cross join that joins album and artist and sorts by artist name in ascending order.
select *
from "Album" al
cross join "Artist" ar
where (al."ArtistId" = ar."ArtistId" ) order by ar."Name"; 

--7.5 SELF
--Task – Perform a self-join on the employee table, joining on the reports to column.

select "ReportsTo" 
from "Employee" e2
join "Employee" e3
on e2."ReportsTo" = e3."ReportsTo";
--8.0 Indexes
--In this section you will be creating Indexes on various tables. Indexes can speed up performance of reading data.

--8.1 Indexes
--Task – Create an index on of table of your choice
Create index index_last_emp on "Employee"("LastName");

Select * from "Employee" e;