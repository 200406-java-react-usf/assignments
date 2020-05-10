/*
 * Where clause comparison operators:
 * 		=, >, <, <=, >=
 * 		NOT EQUAL: != or <>
 * 
 */


select *
from "Employee";

select "LastName"
from "Employee"
where "LastName" = 'King';

select "FirstName"
from "Employee"
where "FirstName" = 'Andrew' and "ReportsTo" is null;

select *
from "Album" 
order by 1 desc; 

select "FirstName"
from "Customer"
order by 1 asc;

insert into "Genre" ("GenreId" , "Name" )
values (26, 'Spaghetti');

insert into "Genre" ("GenreId" , "Name" )
values (27, 'Alfredo');

delete from "Genre"
where "GenreId" = '26';

delete from "Genre"
where "GenreId" = '27';

select *
from "Employee";

insert into "Employee" ("EmployeeId", "LastName", "FirstName", "Title", "ReportsTo")
values (9, 'Doe', 'John', 'Janitor', 1);

insert into "Employee" ("EmployeeId", "LastName", "FirstName", "Title", "ReportsTo")
values (10, 'Doe', 'Jane', 'Janitor', 1);

delete from "Employee" 
where "EmployeeId" = '9';

delete from "Employee" 
where "EmployeeId" = '10';

update "Customer" 
set "FirstName" = 'Robert', "LastName" = 'Walter'
where "FirstName" = 'Aaron' and "LastName" = 'Mitchell';

update "Artist" 
set "Name" = 'CCR'
where "Name" = 'Creedence Clearwater Revival';

select * 
from "Invoice"
where "BillingAddress" like 'T';

select *
from "Invoice" 
where "InvoiceId" between 15 and 50;

select *
from "Employee"
where "BirthDate" between '2003-06-01' and '2004-03-01';

select *
from "Customer";


--I give up... JUST CASCADE DELETE EVERYTHING!!!
alter table "Customer" 
drop constraint "FK_CustomerSupportRepId";

alter table "Customer" 
add constraint "FK_CustomerSupportRepId" foreign key ("SupportRepId") references chinook."Employee"("EmployeeId") on delete cascade;

alter table "Invoice" 
drop constraint "FK_InvoiceCustomerId";

alter table "Invoice" 
add constraint "FK_InvoiceCustomerId" foreign key ("CustomerId") REFERENCES chinook."Customer"("CustomerId") on delete cascade; 

alter table "InvoiceLine"
drop constraint "FK_InvoiceLineInvoiceId",
drop constraint "FK_InvoiceLineTrackId",
add CONSTRAINT "FK_InvoiceLineInvoiceId" FOREIGN KEY ("InvoiceId") REFERENCES chinook."Invoice"("InvoiceId") on delete cascade,
add CONSTRAINT "FK_InvoiceLineTrackId" FOREIGN KEY ("TrackId") REFERENCES chinook."Track"("TrackId");

delete from "Customer" 
where "FirstName" = 'Robert' and "LastName" = 'Walter';

select *
from "Customer" 
where "FirstName" = 'Robert' and "LastName" = 'Walter'

select *
from "Customer";



