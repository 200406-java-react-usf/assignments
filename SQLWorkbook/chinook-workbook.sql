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
and "ReportsTo" = null;
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
update "Customer" set "FirstName" "LastName" = 'Robert' 'Walter' where "FirstName" "LastName" = 'Aaron' 'Mitchell';
select * 
from "Employee" 
where "LastName" = 'Mitchell';
/*Task – Update name of artist “Creedence Clearwater Revival” to “CCR”*/

/*Task – Select all invoices with a billing address like “T”*/

/*Task – Select all invoices that have a total between 15 and 50*/

/*Task – Select all employees hired between 1st of June 2003 and 1st of March 2004*/

/*Task – Delete a record in Customer table where the name is Robert Walter 
 * (There may be constraints that rely on this, find out how to resolve them).*/
delete from 
where 