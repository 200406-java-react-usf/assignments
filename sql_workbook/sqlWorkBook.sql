--set search_path to public;
2.1 select 
--Task – Select all records from the Employee table.
select * from "Employee"

--Task – Select all records from the Employee table where last name is King.
select * from "Employee" where "LastName" = 'King';

--Task – Select all records from the Employee table where first name is Andrew and REPORTSTO is NULL.
select * from "Employee" where "FirstName" = 'Andrew' and "ReportsTo" is null;

--Task – Select all albums in album table and sort result set in descending order
select * from "Album" order by "AlbumId" desc
select * from "Album" order by "Title" desc

--Select first name from Customer and sort result set in ascending order
select "FirstName" from "Customer" order by "FirstName"

--Insert two new records into Genre table
select * from "Genre" 
insert into "Genre" ("GenreId" , "Name" ) 
values (26,'K-Pop'),(27, 'J-Pop')

--Insert two new records into Employee table
select * from "Employee" 
insert into "Employee"("EmployeeId", "LastName", "FirstName") values (9, 'salt', 'elam');
insert into "Employee"("EmployeeId", "LastName", "FirstName") values (10, 'pepper', 'elam');

--Insert two new records into Customer table
select * from "Customer"
insert into "Customer"("CustomerId", "FirstName", "LastName", "Email") values(62,'Kennedy', 'Wsomething','something@gmail.com');
insert into "Customer"("CustomerId", "FirstName", "LastName", "Email" ) values(61, 'Korey', 'Ksomething', 'something@gmail.com');

--Update Aaron Mitchell in Customer table to Robert Walter
select * from "Customer" 
update "Customer" set "FirstName" ='Robert' where "FirstName" = 'Aaron';
update "Customer" set "LastName"  ='Waler' where "LastName" = 'Mitchell';

--Update name of artist Creedence Clearwater Revival to CCR
select * from "Artist" where "Name" like 'CC%';
update "Artist" set  "Name" = 'CCR' where "Name" = 'Creedence Clearwater Revival';

--Select all invoices with a billing address like "T"
select * from "Invoice" where "BillingAddress" like '%T%';

--Select all invoices that have a total between 15 and 50
select * from "Invoice" where "Total" between '15' and '50';

--Select all employees hired between 1st of June 2003 and 1st of March 2004
select * from "Employee";
select * from "Employee" where "HireDate" between '2003-01-01 00:00:00' and '2004-01-01 00:00:00';

--Delete all record in Customer table where the name is Robert Walter(There may be constraints that rely on this, findo out how to resolve them)
alter table "Invoice" 
drop constraint fk_invoicecustomerid;

alter table "Invoice"
add constraint fk_invoicecustomerid
foreign key ("customerid") references "Customer" ("customerid") on delete cascade on update cascade;


delete from "Customer" where "FirstName" = 'Robert' and "LastName" = 'Walker';
--3.1 System Defined FUnctions
--Create a function that returns the current time.
CREATE OR REPLACE FUNCTION public.getdate()
 RETURNS time without time zone
 LANGUAGE plpgsql
AS $function$
begin
return current_timestamp;
end; $function$
;
select public.getDate();

--Create a function that returns the length of a mediatype from the mediatype table
select count(*) from "MediaType";
create or replace function mediaLength(Input int) returns int as $$
begin 
	return (select length("Name") from "MediaType" where "MediaTypeId" = input);
end
$$ language plpgsql;
select mediaLength(3);
--Create a function that returns the average total of all invoices
select * from "Invoice";
select avg("Total") from "Invoice";
create or replace function invoiceAverage() returns int as $$
begin 
	return avg("Total") from "Invoice";
end
$$ language plpgsql;
select invoiceAverage();

--Create a function that returns the most expensive track
select "Name" from "Track" where "UnitPrice" = (select max("UnitPrice") from "Track");
create or replace function expensiveTrack()
returns text as $$
begin 
	return (select "Name" from "Track" where "UnitPrice" = (select max("UnitPrice") from "Track"));
end;
$$ language plpgsql;
select expensiveTrack();

--Create a function that returns the average price of invoice-line items in the invoice-line table
select * from "InvoiceLine";
select avg("UnitPrice") from "InvoiceLine"; 
create or replace function averagePrice() returns float as $$
begin 
	return(select avg("UnitPrice") from "InvoiceLine");
end;
$$ language plpgsql;
select averagePrice();

--Task Create a function that returns all the employees who are born after 1968.
select * from "Employee";
select * from "Employee" where "BirthDate" > '1968-12-31';
create or replace function after1968() returns float as $$
begin 
	return (select * from "Employee" e  where "BirthDate" > '1968-12-31');
end;
$$ language plpgsql;
select after1968();

--4.0 Stored Procedures
-- In this section you will be creating and executing stored procedures. You will be creating various types of stored procedures that take input and output parameters.

--4.1 Basic Stored Procedure
-- Create a stored procedure that selects the first and last names of all the employees.

--4.2 Stored Procedure Input Parameters
-- Create a stored procedure that updates the personal information of an employee.
-- Create a stored procedure that returns the managers of an employee

--4.3 Stored Procedure Output Parameters
-- Create a stored procedure that returns the name and company of a customer.

--5.0 Transactions
--In this section you will be working with transactions. Transactions are usually nested within a stored procedure. You will also be working with handling errors in your SQL.
-- Create a transaction that given an invoiceId will delete that invoice (There may be constraints that rely on this, find out how to resolve them)...
-- Create a transaction nested within a stored procedure that inserts a new record in the Customer table


--6.1 AFTER/FOR
--Task - Create an after insert trigger on the employee table fired after a new record is inserted into the table.

create trigger employee_insert
    after insert on "Employee"
    for each row
    execute procedure some_function();
--Task – Create an after update trigger on the album table that fires after a row is updated in the table

create trigger album_update
	after update on "Album"
	for each row 
	execute procedure some_function(); 
--Task – Create an after delete trigger on the customer table that fires after a row is deleted from the table.
create trigger customer_delete
	after delete on "Customer"
	for each row
	execute procedure some_function()
	
--6.2 BEFORE
--Task – Create a before trigger that restricts the deletion of any invoice that is priced over 50 dollars.


--7.1 INNER
--Task – Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId.
select "FirstName", "LastName", "InvoiceId" from "Customer" inner join "Invoice" on "Customer"."CustomerId"  = "Invoice"."InvoiceId";

--7.2 OUTER
--Task – Create an outer join that joins the customer and invoice table, specifying the CustomerId, firstname, last name, invoiceId, and total.
select "Customer"."CustomerId", "FirstName", "LastName", "InvoiceId", "Total" from "Customer" full outer join "Invoice" on "Customer"."CustomerId" = "Invoice"."InvoiceId";


--7.3 RIGHT
--Task – Create a right join that joins album and artist specifying artist name and title.
select "Name", "Title" from "Album" right join "Artist" on "Album"."ArtistId" = "Artist"."ArtistId";

--7.4 CROSS
--Task – Create a cross join that joins album and artist and sorts by artist name in ascending order.
select "Name" as "Artist", "Title" as "Album" from "Artist" 
cross join "Album" where "Artist"."ArtistId" = "Album"."ArtistId" 
order by "Artist"."Name" asc;

--7.5 SELF
--Task – Perform a self-join on the employee table, joining on the reports to column.

--8.1 Indexes
--Task – Create an index on of table of your choice
create index something_ranomd
on "Artist" ("Name");



