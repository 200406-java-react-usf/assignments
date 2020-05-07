set search_path chinook;
--Kaneisha Reese

--2.1 Selectm
select * from "Employee" e;
select * from "Employee" e where "LastName" ='King'
select * from "Employee" e where "FirstName" ='Andrew' and "ReportsTo" is null;

--2.2 order by
select * from "Album" a order by "AlbumId" desc;
select "FirstName" from "Customer" c order by "FirstName";

--2.3 insert into
insert into "Genre" values (28, 'Gospel'), (29, 'Band Tunes');
insert into "Employee"("EmployeeId" , "LastName" , "FirstName" ) values (9, 'Reese', 'Kaneisha'),(10,'Kaneisha', 'Reese');
insert into "Customer" ("CustomerId" , "FirstName" , "LastName" , "Email") 
values(60, 'Michelle', 'Wilson', 'mwilson@email.com'), (61,'Mitchell','Wilson', 'mwilson@test.com');

--2.4 update
update "Customer" 
set "FirstName" = 'Robert' , "LastName" = 'Walter'
where "FirstName" = 'Aaron' and "LastName" ='Mitchell';

update "Artist" 
set "Name" ='CCR'
where "Name" = 'Creedence Clearwater Revival';

--2.5 like
select * from "Invoice" i2 where "BillingAddress" like 'T%';
--2.6 between
select * from "Invoice" i2 
where "Total" 
between 15 and 50;
select * from "Employee" e2 
where "HireDate" 
between '2003-06-01' and '2004-03-01';
--2.7 delete
delete from "InvoiceLine" where "InvoiceId" in
(select "InvoiceId" from "Invoice" where "CustomerId" in 
(select "CustomerId" from "Customer" where ("FirstName" , "LastName" ) = ('Robert', 'Walter')));
delete from "Invoice" where "CustomerId" in 
(select "CustomerId" from "Customer" where ("FirstName" , "LastName" ) = ('Robert', 'Walter'));
delete from "Customer" where ("FirstName" , "LastName" ) = ('Robert', 'Walter');

--3.1
create or replace function getTime() 
returns timestamp with time zone as $$
	select now();
$$ language sql;
select * from getTime();

create or replace function mediaTypeLength()
returns integer as $$
	select length("Name") from "MediaType" mt where "MediaTypeId" =1;
$$ language sql;
select * from mediaTypeLength();
--3.2
create or replace function getAvg() returns numeric as $$
	select avg("Total") from "Invoice" i;
$$ language sql;
select * from getavg();
   
create or replace function getMax() returns numeric as $$
    select max("UnitPrice") from "Track" t;
$$ language sql;
select * from getMax();
--3.3
create or replace function getAvgInvoiceLine() returns numeric as $$
    select avg("UnitPrice") from "InvoiceLine" il;
$$ language sql;
select * from getAvgInvoiceLine();
--3.4
create or replace function bday_after1968() returns table (Employeeid int, LastName varchar, FirstName varchar, Title varchar, ReportsTo int, BirthDate timestamp, HireDate timestamp, Address varchar, city varchar, state varchar, country varchar, PostalCode varchar, Phone varchar, Fax varchar, Email varchar)
    as $$ select * from "Employee" e 
    where "BirthDate" > to_timestamp('1968-01-01 12:00:00','YYYY-MM-DD HH:MI:SS')
$$ language sql;
select * from bday_after1968();

--4.1
create or replace function employeeNames() returns table (FirstName varchar, LastName varchar)
as $$ 
begin
    select "FirstName", "LastName" from "Employee" e;
end;
$$ language plpgsql;

--4.2
create function updateEmployeeInformation(id int, newAdd varchar,newCity varchar, newState varchar, newPostal varchar, newPhone varchar, newFax varchar, newEmail varchar) returns void as $$
begin
    update "Employee" set "Address" = newAdd, "City" = newCity, "State" = newState, "PostalCode" = newPostal, "Phone" = newPhone, "Fax" = newFax, "Email" = email where "EmployeeId" = id;
end;
$$ language plpgsql;

create function employeesManager(id int) returns void as $$
begin
	select * from "Employee"  where "EmployeeId"  = (select "ReportsTo" from  "Employee" where "EmployeeId" = id);
end;
$$ language plpgsql;

--4.3
create function customerCompany(id int) returns void as $$
begin
	select "FirstName", "LastName", "Company" from "Customer" where "CustomerId" = id;
end;
$$ language plpgsql;
 select customerCompany(1);
--5.0
begin
	delete from 	
commit

end

--6.1



--6.2

--7.1
select i."InvoiceId", c."FirstName", c."LastName" 
from "Invoice" i 
inner join  "Customer" c 
on c."CustomerId" = i."CustomerId" ;
--7.2
select c."FirstName", c."LastName", i."InvoiceId", i."Total" 
from "Invoice" i 
full outer join  "Customer" c 
on c."CustomerId" = i."CustomerId" ; 
--7.3
select al."Title" , ar"Name" 
from "Album" al 
right join "Artist" ar 
on ar."ArtistId" = al."ArtistId";
--7.4
select ar2."Name", al2."Title" 
from "Artist" ar2 
cross join "Album" al2
order by "Name";
--7.5
select e2."FirstName", e3."FirstName" as "ReportsTo"
from "Employee" e2 
join "Employee" e3
on e3."EmployeeId" = e2."ReportsTo" ;

--8.1
create index "ArtistNames"
on "Artist"("Name");
