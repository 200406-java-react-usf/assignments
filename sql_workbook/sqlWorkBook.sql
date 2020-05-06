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
