/*Task – Select all records from the Employee table.*/
select * 
from "Employee";
/*Task – Select all records from the Employee table where last name is King.*/
select * 
from "Employee" 
where "LastName" = 'King';
/*Task – Select all records from the Employee table where first name is Andrew and REPORTSTO is NULL.*/
select * 
from "Employee" 
where "FirstName" = 'Andrew' 
and "ReportsTo" is null;
/*Task – Select all albums in album table and sort result set in descending order*/
select * 
from "Album" 
order by "Album" desc;
/*Task – Select first name from Customer and sort result set in ascending order*/
select * 
from "Customer" 
order by "FirstName" asc;
/*Task – Insert two new records into Genre table*/
insert into "Genre" ("GenreId", "Name") 
values ('26', 'Melodic Techno');
/*Task – Insert two new records into Employee table*/
insert into "Employee" ("EmployeeId", "LastName", "FirstName") 
values (9, 'Peters', 'Drew');
/*Task – Insert two new records into Customer table*/
insert into "Customer" ("CustomerId", "FirstName", "LastName", "Email") 
values (60, 'Fish', 'Molley', 'fishmolley@email.com');
/*Task – Update Aaron Mitchell in Customer table to Robert Walter*/
update "Customer" set "FirstName" = 'Robert', "LastName" = 'Walter' 
where "FirstName"='Aaron' and "LastName" = 'Mitchell';
/*Task – Update name of artist “Creedence Clearwater Revival” to “CCR”*/
update "Artist" set "Name" = 'CCR' 
where "Name" = 'Creedence Clearwater Revival';
/*Task – Select all invoices with a billing address like “T”*/
select * from "Invoice" 
where "BillingAddress" like '%T%';
/*Task – Select all invoices that have a total between 15 and 50*/
select * from "Invoice" 
where "Total" between 15 and 50;
/*Task – Select all employees hired between 1st of June 2003 and 1st of March 2004*/
select * from "Employee" 
where "HireDate" between '2003-06-01 00:00:00' and '2004-03-01 00:00:00';
/*Task – Delete a record in Customer table where the name is Robert Walter 
 * (There may be constraints that rely on this, find out how to resolve them).*/
update "Customer" set "FirstName" = 'empty', "LastName" = 'empty' where "FirstName" = 'Robert' and "LastName" = 'Walter'
update "Customer" set "Address" = null, "City" = null, "State" = null, "Country" = null, "PostalCode" = null, "Phone" = null, "Email" = 'empty' where "LastName" = 'empty'
/*Task – Create a function that returns the current time*/
create function public.currentTime() 
returns time 
as $$ begin return current_timestamp; end; 
$$ language plpgsql;
/*Task – create a function that returns the length of a mediatype from the mediatype table*/
create or replace function public.MediaLength(a int) 
returns int 
as $$ begin return length("Name") 
from "MediaType" 
where "MediaTypeId" = a; end; 
$$ language plpgsql;
select public.MediaLength(1);
/*Task –Create a function that returns the average total of all invoices*/
create or replace function public.Average() returns numeric(2,2) 
as $$ begin return round(avg("Total"),2) 
from "Invoice"; end; 
$$ language plpgsql;
select public.Average();
/*Task – Create a function that returns the most expensive track*/
create or replace function public.MaxPrice() 
returns setof "Track" 
as $$ begin return Query select * 
from "Track" where "UnitPrice" = (select "UnitPrice" from "Track" order by "UnitPrice" desc limit 1); end; 
$$ language plpgsql;
drop function MaxPrice();
select public.MaxPrice();
/*Task – Create a function that returns the average price of invoice-line items in the invoice-line table*/
create function getAvgInvoiceLine() returns numeric as $$
select avg("UnitPrice") from "InvoiceLine" il;
$$ language sql;
select * from getAvgInvoiceLine();
/*Task – Create a function that returns all employees who are born after 1968*/
create function date_after1968() 
returns table (Employeeid int, LastName varchar, FirstName varchar, Title varchar, ReportsTo int, BirthDate timestamp, HireDate timestamp, Address varchar, city varchar, state varchar, country varchar, PostalCode varchar, Phone varchar, Fax varchar, Email varchar)
as $$ select * from "Employee" e 
where "BirthDate" > to_timestamp('1968-01-01 01:00:00','YYYY-MM-DD HH:MI:SS')
$$ language sql;
select * from date_after1968();
/*Task – Create a stored procedure that selects the first and last names of all the employees*/
create function employeeNames() returns table (FirstName varchar, LastName varchar)
as $$ 
begin
select "FirstName", "LastName" from "Employee" e;
end;
$$ language plpgsql;
/*Task – Create a stored procedure that updates the personal information of an employee*/
create function updateEmployeeEmail(id int, newEmail varchar) returns void as $$
begin
update "Employee" set "Email" = email where "EmployeeId" = id;
end;
$$ language plpgsql;
/*Task – Create a stored procedure that returns the managers of an employee*/
create function showManger(id int) returns varchar as $$
begin
select "ReportsTo" from "Employee" e where "EmployeeId" = id;
end;
$$ language plpgsql;
/*Task – Create a stored procedure that returns the name and company of a customer*/
create function nameAndCompany(id int) returns table (FirstName varchar, LastName varchar, Company varchar) as $$
begin
select ("FirstName" , "LastName" , "Company" ) from "Customer" where "CustomerId" = id;
end;
$$ language plpgsql;
/*Task – Create a transaction that given an invoiceId will delete that invoice (There may be constraints that rely on this, find out how to resolve them)...*/

/*Task – Create a transaction nested within a stored procedure that inserts a new record in the Customer table*/

/*Task - Create an after insert trigger on the employee table fired after a new record is inserted into the table*/

/*Task – Create an after update trigger on the album table that fires after a row is updated in the table*/

/*Task – Create an after delete trigger on the customer table that fires after a row is deleted from the table*/

/*Task – Create a before trigger that restricts the deletion of any invoice that is priced over 50 dollars*/

/*Task – Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId*/

/*Task – Create an outer join that joins the customer and invoice table, specifying the CustomerId, firstname, last name, invoiceId, and total*/

/*Task – Create a right join that joins album and artist specifying artist name and title*/

/*Task – Create a cross join that joins album and artist and sorts by artist name in ascending order*/

/*Task – Perform a self-join on the employee table, joining on the reports to column*/

/*Task – Create an index on of table of your choice*/
