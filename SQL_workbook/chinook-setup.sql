-- select all records from the Employee table*/

select * from "Employee"

--select all records from the Employee tabe where last name is King

select * from "Employee" where "LastName" = 'King'

--select all frcords from the employee table where first name is Andrew and Reportsto is null

select * from "Employee" where "FirstName" = 'Andrew' and "ReportsTo" is null

--select all albums in album table and sort set in descending order

select * from "Album" 
order by "Album" desc;

--select frist name from customer and sort result ser in ascending order

select * from "Customer" 
order by "FirstName";

--Insert two new records into Genre table

insert into "Genre" ("GenreId", "Name")
values
('26', 'EDM'), 
('27', 'Country')


--insert two new records into Employee table

insert into "Employee" ("EmployeeId", "LastName", "FirstName")
values
('9', 'Wandelt', 'Kennedy'),
('10', 'Elam', 'Jeremy')

--insert two new records into customer table

insert into "Customer" ("CustomerId", "FirstName", "LastName", "Email")
values
('60', 'Korey', 'Kiepe', 'korey@email.com'), 
('61', 'Kevin', 'Wagenheim', 'Wagenheimer@email.com')

--update Aaron Mitchell in Customer table to Robert Walter

update "Customer" set "FirstName" = 'Robert', "LastName" = 'Walter' where "FirstName" = 'Aaron'

-- Updatename of artist "Creedence Clearwater Revival" to "CCR"

update "Artist" set "Name" = 'CCR' where "Name" = 'Creedence Clearwater Revival'

--select all invoices with a billing address like "T"

select * from "Invoice" where "BillingAddress" like '%T%'

--select all invoice that have a total between 15 and 50

select * from "Invoice" where "Total" between '15' and '50'

--select all employees hired between 1st of June 2003 and 1st of March 2004

select * from "Employee" where "HireDate" between '2003-06-01 00:00:00' and '2004-03-01 00:00:00'

--delete a record in Customer table where the name is Robert Walter There may be contraints that rely on this find out how to reolve them

select * from "Invoice" where "CustomerId" = '32'
alter table "Invoice"
drop constraint "FK_InvoiceCustomerId";
alter table "Customer"
drop constraint "PK_Customer";

delete from "Customer" where "LastName" = 'Walter'

alter table "Invoice"
add constraint "FK_InvoiceCustomerId";
alter table "Customer"
add constraint "PK_Customer";

--create a function that returns the current time

select public.getdate()
CREATE OR REPLACE FUNCTION public.getdate()
 RETURNS time without time zone
 LANGUAGE plpgsql
AS $function$
begin 
return current_timestamp;
end; $function$
;

--create a function that returns the length of a mediatype from the mediatype table

select mediatypeLength(1)
CREATE OR REPLACE FUNCTION public."mediatype-length"(a integer)
 RETURNS integer
 LANGUAGE plpgsql
AS $function$
begin
	return length("Name") from "MediaType" where "MediaTypeId" = a;
end; $function$
;

--create a function that returns the average total of all invoices

select averageinvoice()
CREATE OR REPLACE FUNCTION public.averageinvoice()
 RETURNS numeric
 LANGUAGE plpgsql
AS $function$
begin
	return round(avg("Total"),2) from "Invoice";
end; $function$
;

--create a function that returns the mst expensive track

select expensivetrack()
CREATE OR REPLACE FUNCTION public.expensivetrack()
 RETURNS SETOF "Track"
 LANGUAGE plpgsql
AS $function$
declare
	max_p numeric(3,2) := max("UnitPrice") from "Track"; 
begin
	return query select * from "Track" where "UnitPrice" = max_p; 
end; $function$
;

--create a function that returns the average price of invoice-line items in the invoice-line table

select averageinvoiceline()
CREATE OR REPLACE FUNCTION public.averageinvoiceline()
 RETURNS numeric
 LANGUAGE plpgsql
AS $function$
begin
	return round(avg("UnitPrice"),2) from "InvoiceLine";
end; $function$
;

--create a function that returns all employees who were born after 1968

select bornafter1968()
CREATE OR REPLACE FUNCTION public.bornafter1968()
 RETURNS SETOF "Employee"
 LANGUAGE plpgsql
AS $function$
begin
	return query select * from "Employee" where "BirthDate" > '1968-12-31 00:00';
end; $function$
;


-- create a stored procedure that selects the first and last name of all employees

call firstandlast()
CREATE OR REPLACE PROCEDURE public.firstandlast()
 LANGUAGE plpgsql
AS $procedure$
	declare
		names text;
	begin
		names = "FirstName", "LastName" from "Employee";
	end;
$procedure$
;

-- create a stored procedure that updates the personal information of an employee (I only did FN anf LN but more parameters could easily be updated)

call updatepersonal(10, 'Elton', 'John')
CREATE OR REPLACE PROCEDURE public.updatepersonal(id integer, newfirst character varying, newlast character varying)
 LANGUAGE plpgsql
AS $procedure$
	begin
	update "Employee" set "FirstName" = newfirst, "LastName" = newlast where "EmployeeId" = id;
	end;
$procedure$
;


-- create a stored procedure that returns the manager of an employee

call getmanager(1) -- doesn't output
CREATE OR REPLACE PROCEDURE public.getmanager(id integer)
 LANGUAGE sql
AS $procedure$

	select * from "Employee" where "EmployeeId" = (select "ReportsTo" from "Employee" where "EmployeeId" = id);

$procedure$
;

--create a stored procedure that returns the name and company of a customer

call customerinfo(1) -- doesnt output
CREATE OR REPLACE PROCEDURE public.customerinfo(id integer)
 LANGUAGE sql
AS $procedure$
	select "FirstName" , "Company" from "Customer" where "CustomerId" = id;
$procedure$
;

-- create a transaction that given a invoiceID will delete that invoice

call deleteinvoice(1) -- doesn't work

--create a transaction nested within a stored procedure that inserts a new record in the customer table



--crate an after trigger on the employee table after a new record is inserted into the table



--create an after update trigger on the album table that fires after a row is updated in the table



--create an after delete trigger on the customer table that fires after a row is delted from the table



--create a before trigger that restricts the deletion of any invoice that is priced over 50 dollars



--create an inner join that noijs customers and orders and specifies the name of the customer and the invoiceId



--create an outer join that joins the customer and invoice table specifying the customerId, firstname, lastname, invoiceID, and total



--create a right join that joins album and artist specifying artist name and title



--create a cross join that joins album and artist and sorts by artist name in ascending order



--perform a selfjoin on the employee table joining on the reports to column



--create an index on a table of your choice

set 
create table user_roles(
	id serial,
	name varchar(25) not null,
	
	constraint user_roles_pk primary key (id)
	
);

create table app_users(
	id serial ,
	username varchar(25) unique not null,
	password varchar(256) not null,
	first_name varchar(25) not null,
	last_name varchar(25) not null,
	email varchar(256) unque not null,
	role_id int not null,
	
	constraint app_users_pk primary key (id),
	constraint user_role_fk foreign key (role_id) references user_roles
	
);

create table threads(
	id serial,
	title varchar(35) not null,
	created_time timestamp with time zone default current_timestamp,
	creator_id int not null,
	
	constraint threads_pk primary key (id),
	constraint thread_creator_fk foreign key (creator_id) references app_users
	
);

create table posts(
	id serial,
	title varchar(35) not null,
	body varchar(2056) not null,
	created_time timestamp with time zone default current_timestamp,
	likes int default 0,
	thrad_eid int not null,
	posterid int no_t null,
	
	constraint posts_pk primary key (id),)
	
	constraint post_thread_fk foreign key (thread_id)
	references threads on delete cascade,
	
	constraint post_user_fk foreign key (poster_id)
	references app_users
	
);

create table post_likers(
	user_id int not null,
	post_id int not null,
	
	constraint post_likers_pks primary key (user_id, post_id),
	constraint pl_user foreign key (user_id) references app_users,
	constraint pl_post foreign key (post_id) references posts
	
);

create table thread_followers(
	user_id int not null,
	thread_id int not null,
	
	constraint thread_followers_pks primary key (user_id, thread_id),
	constraint tf_user foreign key (user_id) references app_users,
	constraint tf_post foreign key (post_id) references threads
	
);

