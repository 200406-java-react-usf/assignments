
/*2.1 select all fropm employee table */
select * from "Employee"  

/*all employees w last nmae king */
select * from "Employee" where "LastName" = 'King';

/*Task – Select all records from the Employee table where first name is Andrew and REPORTSTO is NULL.*/
select * from "Employee" where "FirstName" = 'Andrew' and "ReportsTo" = null

/*2.2 Task – Select all customers and sort result set in asccending order*/
select "FirstName" from "Customer" order by "FirstName" asc;
/*Select all albums in album table and sort result set in descending order*/
select * from "Album" order by "Album" desc;

/*2.3 insert two new records into Genre table*/
insert into "Genre"("GenreId","Name") 
	values  (222, 'Pop Punk')
			(333,'Japanese Jazz Fusion')
/*Insert two new records into Employee table*/
insert into "Employee" ("EmployeeId","LastName",
"FirstName",
"Title",
"ReportsTo",
"BirthDate",
"HireDate",
"Address",
"City",
"State",
"Country",
"PostalCode",
"Phone",
"Fax",
"Email" )
values (42,'Remy','Lou','the new guy',43,'1996-12-09 00:00:00','1996-12-09 00:00:00','too','much','info','everyone','can','probably','see','this')
values (43,'Singleton','Wezley','jedi master',43,'1970-01-01 00:00:00','1970-01-01 00:00:00','too','much','info','everyone','can','probably','see','this')
/*Insert two new records into Customer table*/
insert into "Customer" ("CustomerId",
"FirstName",
"LastName",
"Company",
"Address",
"City",
"State",
"Country",
"PostalCode",
"Phone",
"Fax",
"Email",
"SupportRepId")
values(999,'bob','boberson','bob and bob','1 bob street','new jersey','bobville','USA','11111','11111111','11111','111',1)
values(777,'b','bb','bbb','bbbb','bbbbb','bbbbb','bbb','b','bbb','b','b',1)
/*2.4 Task – Update Aaron Mitchell in Customer table to Robert Walter */
update "Customer"
set "FirstName" = 'Robert',
	"LastName"  = 'Walker'
where "FirstName" = 'Aaron'

/*Task – Update name of artist “Creedence Clearwater Revival” to “CCR”*/
update "Artist" 
set "Name" = 'CCR'
where "Name" ='Creedence Clearwater Revival'

/*2.5 Task – Select all invoices with a billing address like “T”*/
select * from "Invoice" where "BillingAddress"  like 'T%'

/*2.6 Task – Select all invoices that have a total between 15 and 50*/
select *  from "Invoice" where  "Total" between 15  and 50

/* Task – Select all employees hired between 1st of June 2003 and 1st of March 2004*/
select * from "Employee" where "HireDate" between '2003-06-01 00:00:00' and '2004-03-01 00:00:00'

/*2.7 Task – Delete a record in Customer table where the name is Robert Walter (There may be constraints that rely on this, find out how to resolve them).*/
delete from "Customer" where "FirstName" = 'Robert'and "LastName" = 'Walter'

/*3.1 Task – Create a function that returns the current time.*/
--select current_timestamp; 
create function my_current_timestamp() returns time as $$
begin
	return current_timestamp;
end; $$
language plpgsql

select my_current_timestamp()
/*Task – create a function that returns the length of a mediatype from the mediatype table*/

create function mediatype_length(n varchar) 
returns integer as $$
begin
	return select * from "MediaType" where 'Name' = $1
end $$
language plpgsql
 select media_type_length('AAC audio file')
 select length('AAC audio file')