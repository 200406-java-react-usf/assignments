2.1 SELECT

-- Task – Select all records from the Employee table. --
select * from "Employee"

-- Task – Select all records from the Employee table where last name is King --
select * from "Employee"
 where "LastName" = 'King';

--Task – Select all records from the Employee table where first name is Andrew and REPORTSTO is null
select * from "Employee" 
where "FirstName" = 'Andrew' and "ReportsTo" is null;

-- Task – Select all albums in album table and sort result set in descending order
select "Title" from "Album" order by "Title" desc

2.2 ORDER BY

-- Task – Select first name from Customer and sort result set in ascending order
select "FirstName" from "Customer"
 order by "FirstName" asc

2.3 INSERT INTO

-- Task – Insert two new records into Genre table
insert into "Genre" ("GenreId", "Name") 
values (26, 'Salsa'), (27, 'Techno');

-- Task – Insert two new records into Employee  table
insert into "Employee" ("EmployeeId", "LastName", "FirstName", 
"Title", "BirthDate") values 
(9, 'Albelice', 'Anna', 'IT Staff', '1986/3/08'), 
(10, 'Singleton', 'Wezley', 'IT Staff', '1990/07/09');

-- Task – Insert two new records into Customer  table
insert into "Customer" ("CustomerId", "LastName", "FirstName", 
"Email") values 
(60, 'Anderson', 'Alice', 'aanderson@revature.com'),
(61, 'Bailey', 'Bob', 'bbailey@revature.com');

2.4 UPDATE

-- Task – Update Aaron Mitchell in Customer table to Robert Walter
update "Customer" set "FirstName" = 'Robert', "LastName" = 'Walter' 
where "FirstName" = 'Aaron' and "LastName" = 'Mitchell';

-- Task – Update name of artist “Creedence Clearwater Revival” to “CCR”
update "Artist" set "Name" = 'CCR'
where "Name" = 'Creedence Clearwater Revival';

2.5 LIKE

-- Task – Select all invoices with a billing address like “T”
select * from "Invoice" 
where "BillingAddress" like 'T%';

2.6 BETWEEN

-- Task – Select all invoices that have a total between 15 and 50
select * from "Invoice"
where "Total" between 15 and 50

--Task – Select all Employeess hired between 1st of June 2003 and 1st of March 2004
select * from "Employee" 
where "HireDate" between '6/1/2003' and '3/1/2004'

2.7 DELETE

--Task – Delete a record in Customer table where the name is Robert Walter 
--(There may be constraints that rely on this, find out how to resolve them).
alter table "Invoice" 
drop constraint "FK_InvoiceCustomerId";
delete from "Customer" 
where "FirstName" = 'Robert' and "LastName" = 'Walter';

3.1 System Defined Functions

--Task – Create a function that returns the current time.
create or replace function myCurrentTime() returns  time 
as 
$$ 
	begin 
		return current_time;
	end
$$ language plpgsql;

select myCurrentTime();

3.2 System Defined Aggregate Functions

-- Task –Create a function that returns the average total of all invoices
create or replace function InvoiceAverage() returns numeric(2) 
as 
$$
	begin 
		return round(avg("Total"),2) from "Invoice";
	end; 
$$ language plpgsql;	

select InvoiceAverage(); 
	
-- Task – Create a function that returns the most expensive track 
create or replace function PriciestTrack()  
returns setof "Track" as 
$$
declare mstrack numeric(3,2) = max("UnitPrice") from "Track";
	begin
		return query
			select * from "Track" t
			where t."UnitPrice" = mstrack;
	end
	
$$ language plpgsql;	

select PriciestTrack(); 

3.3 Employees Defined Scalar Functions

--Task – Create a function that returns the average price of invoice-line items in the invoice-line table
create or replace function InvoiceLineAverage() returns numeric(3,2)
as 
$$
begin 
	return round(avg("UnitPrice"), 2) from "InvoiceLine";
end
$$ language plpgsql;

select InvoiceLineAverage(); 

3.4 Employees Defined Table Valued Functions

--Task – Create a function that returns all Employees who are born after 1968.
create or replace function newEmployees() 
returns setof "Employee"
as 
$$
	begin 
		return query
		select * from "Employee" e 
		where "BirthDate" >= '1968-01-01 00:00:00';
	end
$$ language plpgsql;

select newEmployees();

4.0 Stored Procedures

 In this section you will be creating and executing stored procedures. You will be creating various types of stored procedures that take input and output parameters.


4.1 Basic Stored Procedure
--Task – Create a stored procedure that selects the first and last names of all the Employeess.

4.2 Stored Procedure Input Parameters

Task – Create a stored procedure that updates the personal information of an employee.

Task – Create a stored procedure that returns the managers of an employee

4.3 Stored Procedure Output Parameters

Task – Create a stored procedure that returns the name and company of a customer.

5.0 Transactions
In this section you will be working with transactions. Transactions are usually nested within a stored procedure. You will also be working with handling errors in your SQL.

Task – Create a transaction that given a invoiceId will delete that invoice (There may be constraints that rely on this, find out how to resolve them)...poiij

Task – Create a transaction nested within a stored procedure that inserts a new record in the Customer table

6.0 Triggers 
In this section you will create various kinds of triggers that work when certain DML statements are executed on a table.

6.1 AFTER/FOR

Task - Create an after insert trigger on the employee table fired after a new record is inserted into the table.

Task – Create an after update trigger on the album table that fires after a row is updated in the table

Task – Create an after delete trigger on the customer table that fires after a row is deleted from the table.

6.2 BEFORE
Task – Create a before trigger that restricts the deletion of any invoice that is priced over 50 dollars.

7.0 JOINS
In this section you will be working with combining various tables through the use of joins. You will work with outer, inner, right, left, cross, and self joins.

7.1 INNER

Task – Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId.

7.2 OUTER

Task – Create an outer join that joins the customer and invoice table, specifying the CustomerId, firstname, last name, invoiceId, and total.

7.3 RIGHT

Task – Create a right join that joins album and artist specifying artist name and title.
7.4 CROSS

Task – Create a cross join that joins album and artist and sorts by artist name in ascending order.

7.5 SELF

Task – Perform a self-join on the employee table, joining on the reports to column.
8.0 Indexes
In this section you will be creating Indexes on various tables. Indexes can speed up performance of reading data.

8.1 Indexes
Task – Create an index on of table of your choice

