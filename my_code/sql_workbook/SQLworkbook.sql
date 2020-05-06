
-- 200406-Java-React-usf
-- Korey Keipe --

-- Part I – Working with an existing database -- 

-- 2.1 SELECT --
	-- Task – Select all records from the Employee table. 
		select * from "Employee"
	
	-- Task – Select all records from the Employee table where last name is King.
		select * from "Employee" where "LastName" = 'King' 

	-- Task – Select all records from the Employee table where first name is Andrew and REPORTSTO is NULL.
		select * from "Employee" where "FirstName" = 'Andrew' and "ReportsTo" is null

-- 2.2 ORDER BY --
	-- Task – Select all albums in album table and sort result set in descending order
		select * from "Album" order by "AlbumId" desc 

	-- Task – Select first name from Customer and sort result set in ascending order
		select * from "Customer" order by "FirstName"

-- 2.3 INSERT INTO --
	-- Task – Insert two new records into Genre table
		insert into "Genre" ("GenreId" , "Name" ) values ('26','House'),('27','Future-House')

	-- Task – Insert two new records into Employee table
		insert into "Employee" ("EmployeeId" ,"FirstName" ,"LastName" ) values ('9','Korey','Keipe'),('10', 'Jeremy', 'Elam')

	-- Task – Insert two new records into Customer table
		insert into "Customer" ("CustomerId" ,"FirstName" ,"LastName", "Email" ) values('60', 'Kennedy', 'Wandelt','kenW@gmail.com'),('61', 'Kevin', 'Wagenheim','kevW@email.com')

-- 2.4 UPDATE --
	-- Task – Update Aaron Mitchell in Customer table to Robert Walter	
		update "Customer" set "FirstName" = 'Robert', "LastName" = 'Walter' where "FirstName"='Aaron' and "LastName" = 'Mitchell'
	
	-- Task – Update name of artist “Creedence Clearwater Revival” to “CCR”
		update "Artist" set "Name" = 'CCR' where "Name" = 'Creedence Clearwater Revival'

-- 2.5 LIKE --
	-- Task – Select all invoices with a billing address like “T”
		select * from "Invoice" where "BillingAddress" like '%T%'

-- 2.6 BETWEEN --
	-- Task – Select all invoices that have a total between 15 and 50
		select * from "Invoice" where "Total" between 15 and 50
		
	-- Task – Select all employees hired between 1st of June 2003 and 1st of March 2004
		select * from "Employee" where "HireDate" between '2003-06-01 00:00:00' and '2004-03-01 00:00:00' 

-- 2.7 DELETE --
	-- Task – Delete a record in Customer table where the name is Robert Walter (There may be constraints that rely on this, find out how to resolve them).
		update "Customer" set "FirstName" = 'empty', "LastName" = 'empty' where "FirstName" = 'Robert' and "LastName" = 'Walter'
		update "Customer" set "Address" = null, "City" = null, "State" = null, "Country" = null, "PostalCode" = null, "Phone" = null, "Email" = 'empty' where "LastName" = 'empty'
		
-- 3.0 SQL Functions - In this section you will be using the Oracle system functions, as well as your own functions, to perform various actions against the database
-- 3.1 System Defined Functions --
	-- Task – Create a function that returns the current time.
		create function public.currentTime() returns time as $$ begin return current_timestamp; end; $$ language plpgsql;

		select public.currenttime();	
	-- Task – create a function that returns the length of a mediatype from the mediatype table
		create or replace function public.MediaLength(a int) returns int as $$ begin 
						return length("Name") from "MediaType" where "MediaTypeId" = a; end; $$ language plpgsql;
				
		select public.MediaLength(1);
-- 3.2 System Defined Aggregate Functions --
	-- Task –Create a function that returns the average total of all invoices
		create or replace function public.Average() returns numeric(2,2) as $$ begin 
						return round(avg("Total"),2) from "Invoice"; end; $$ language plpgsql;
	
		select public.Average();
	-- Task – Create a function that returns the most expensive track
		create or replace function public.MaxPrice() returns setof "Track" as $$ 
			declare 
			m numeric(3,2) := max("UnitPrice") from "Track";
			begin
						
			return query select * from "Track" where "UnitPrice" = m; end; $$ language plpgsql;

		select public.MaxPrice();					
-- 3.3 User Defined Scalar Functions --
	-- Task – Create a function that returns the average price of invoice-line items in the invoice-line table
		create or replace function public.AvgInvoiceLine() returns numeric(3,2) as $$ begin 
							return round(avg("UnitPrice"),2) from "InvoiceLine"; end; $$ language plpgsql;
	
		select public.AvgInvoiceLine();	
-- 3.4 User Defined Table Valued Functions --
	-- Task – Create a function that returns all employees who are born after 1968.
		create or replace function public.Dob() returns setof "Employee" as $$ begin 
							return query select * from "Employee" where "BirthDate" >= '1969-01-01 00:00:00'; end; $$ language plpgsql;
	
		select public.Dob();		
-- 4.0 Stored Procedures - In this section you will be creating and executing stored procedures. You will be creating various types of stored procedures that take input and output parameters.
-- 4.1 Basic Stored Procedure --
	-- Task – Create a stored procedure that selects the first and last names of all the employees.
		create function employeeNames() returns setof "Employee" 
		    as $$ 
		    begin
			    return query select "FirstName","LastName" from "Employee";
		    end;
		    $$ language plpgsql;
	
		select public.employeeNames();
	
-- 4.2 Stored Procedure Input Parameters --
	-- Task – Create a stored procedure that updates the personal information of an employee.
	
	-- Task – Create a stored procedure that returns the managers of an employee

-- 4.3 Stored Procedure Output Parameters --
	-- Task – Create a stored procedure that returns the name and company of a customer.

-- 5.0 Transactions - In this section you will be working with transactions. Transactions are usually nested within a stored procedure. You will also be working with handling errors in your SQL.
	-- Task – Create a transaction that given a invoiceId will delete that invoice (There may be constraints that rely on this, find out how to resolve them)...poiij
	
	-- Task – Create a transaction nested within a stored procedure that inserts a new record in the Customer table

-- 6.0 Triggers - In this section you will create various kinds of triggers that work when certain DML statements are executed on a table.
-- 6.1 AFTER/FOR --
	-- Task - Create an after insert trigger on the employee table fired after a new record is inserted into the table.
	
	-- Task – Create an after update trigger on the album table that fires after a row is updated in the table
	
	-- Task – Create an after delete trigger on the customer table that fires after a row is deleted from the table.

-- 6.2 BEFORE --
	-- Task – Create a before trigger that restricts the deletion of any invoice that is priced over 50 dollars.

-- 7.0 JOINS - In this section you will be working with combining various tables through the use of joins. You will work with outer, inner, right, left, cross, and self joins.
-- 7.1 INNER --
	-- Task – Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId.
		select * from "Invoice" i 
		inner join "Customer" c
		on i."CustomerId" = c."CustomerId" ;
	
-- 7.2 OUTER --
	-- Task – Create an outer join that joins the customer and invoice table, specifying the CustomerId, firstname, last name, invoiceId, and total.
		select * from "Customer" c 
		left join "Invoice" i
		on c."CustomerId" = i."InvoiceId" ; 
	
-- 7.3 RIGHT --
	-- Task – Create a right join that joins album and artist specifying artist name and title.
		select "Title" t from "Artist" a2 
		right join "Album" al 
		on a2."ArtistId" = al."ArtistId";
	
-- 7.4 CROSS --
	-- Task – Create a cross join that joins album and artist and sorts by artist name in ascending order.
		select "Name" from "Artist" a3  
		cross join "Album" a1 ;
		
-- 7.5 SELF --
	-- Task – Perform a self-join on the employee table, joining on the reports to column.
		select  "FirstName", "LastName", "ReportsTo" from "Employee" e 
		
-- 8.0 Indexes - In this section you will be creating Indexes on various tables. Indexes can speed up performance of reading data.
-- 8.1 Indexes --
	-- Task – Create an index on of table of your choice
		create index myIndex
		on "Employee" ("FirstName");
	