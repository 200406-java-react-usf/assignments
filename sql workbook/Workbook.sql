
/*2.1 */
SELECT * FROM "Employee";
SELECT * FROM "Employee" WHERE "LastName" = 'King';
select * from  "Employee" where "FirstName" = 'Andrew' and "ReportsTo" is null  ;

/*2.2 */

select * from "Album" order by "AlbumId" ,"Title" ,"ArtistId" desc;
select "FirstName" from "Customer" order by "FirstName" asc;

/* 2.3 */


insert into "Genre" values ( 26,'Hip-Hop');
insert into "Genre" values (27, 'Reggaeton');
insert into "Employee" values ( 9, 'Valencia', 'Juan', 'IT Staff', null, '1/7/1994', '1/7/2020','123 Elm Street','Tampa','FL','United States', '33403', '+1 (888) 123-4567', '+1 (888) 123-4567', 'juan@revature.com');
insert into "Employee" values ( 10, 'Valencia', 'John', 'IT Staff', null, '1/7/1994', '1/7/2020','1234 Elm Street','Orlando','FL','United States', '33403', '+1 (888) 123-4567', '+1 (888) 123-4567', 'john@revature.com');
select * from "Customer";
insert into "Customer" values ( 60, 'Jake', 'Valencia', 'Revature', '1234 Elm Street','Orlando','FL','United States', '33403', '+1 (888) 123-4567', '+1 (888) 123-4567', 'jake@revature.com', 8);
insert into "Customer" values ( 61, 'Johna', 'Valencia', 'Revature', '1234 Elm Street','Orlando','FL','United States', '33403', '+1 (888) 765-4321', '+1 (888) 123-4567', 'johna@revature.com', 8);


/* 2.4 */

update "Customer" set "FirstName" = 'Robert', "LastName" = 'Walter' where "CustomerId" = 32;
update "Artist" set "Name" ='CCR' where "Name" like 'Cree%';

/* 2.5 */

select * from "Invoice" where "BillingAddress" like 'T%';

/* 2.6 */

select * from "Invoice" where "Total" between 15 and 50;
select * from "Employee" where "HireDate" between '2003-06-01' and '2004-03-01';

/* 2.7 */

select i."InvoiceId"  from "Invoice" i where i."CustomerId" = (select c."CustomerId" from "Customer" c where "FirstName" = 'Robert' and "LastName" = 'Walter' );
delete from "InvoiceLine" il where il."InvoiceId" = 116;
delete from "InvoiceLine" il where il."InvoiceId" = 245;
delete from "InvoiceLine" il where il."InvoiceId" = 268;
delete from "InvoiceLine" il where il."InvoiceId" = 290;
delete from "InvoiceLine" il where il."InvoiceId" = 342;
select c."CustomerId" from "Customer" c where "FirstName" = 'Robert' and "LastName" = 'Walter';
delete from "Invoice" where "CustomerId" = 32;
delete from "Customer" where "CustomerId" = 32;


/* 3.1 */

select now();
select  length ("Name") from "MediaType" where "MediaTypeId" = 3;

/* 3.2 */

select round( avg("Total"), 2) as "Average" from "Invoice";

--------------------------------------------------

select * from "Track" where  "UnitPrice" =  ( select  max("UnitPrice") from "Track");

/* 3.3 */


create or replace function average(rInt integer)
returns numeric
as $$
declare 
total numeric;
i record;
counter integer;
avrg numeric;
begin 
	total := 0;
	counter := 0;
	for i in (select "UnitPrice" from "InvoiceLine" ) loop
	total := i."UnitPrice" + total;
	counter := counter + 1;
	end loop;
	avrg = total / counter;
	avrg := round(avrg, rInt);
	return avrg;
end;
$$
language plpgsql;

select * from average(2) ;

/* 3.4 */

create or replace function born_after_date(fromDate date)
returns setof public."Employee" 
as $$
begin 
	return query select * from "Employee" e where "BirthDate" >= fromDate ;	
end;
$$
language plpgsql;

select * from born_after_date('1968-1-1');


/* 4.1 */

create type entire_name as ("FirstName" text, "LastName" text);
create or replace function all_names()
returns setof entire_name
as $$
select "FirstName", "LastName" from "Employee" e ;

$$ 
language sql;

select * from all_names();


/* 4.2 */

create or replace procedure update_Employee(firstName text, lastName text, address text, city text, state varchar(2), country text, zipcode varchar, phone varchar, fax varchar)
language plpgsql
as $$
begin 
	update "Employee" 
	set "Address" = address, 
		"City" = city, 
		"State" = state, 
		"Country" = country,
		"PostalCode" = zipcode,
		"Phone" = phone,
		"Fax" = fax
	where "FirstName" = firstName and "LastName" = lastName;
end;
$$;

call update_Employee('John','Valencia','123 Tampa St','Tampa','FL','United States', '33401','+1(888) 888-8888','+1(888) 888-8888');

-----------------------------------------------

create or replace function managers(firstName text, lastName text)
returns table(fn varchar, ln varchar, title varchar)
as $$
begin 
	return query select "FirstName", "LastName", "Title" from "Employee" where "EmployeeId" = (select "ReportsTo" from "Employee" where "FirstName" = firstName and "LastName" = lastName) ;
end;
$$
language plpgsql;

select * from managers('Margaret', 'Park');

/* 4.3 */

create or replace function name_company(firstName text, lastName text)
returns table(fullName text, Company_Title varchar)
as $$
begin
	return query select concat(c."FirstName", ' ', c."LastName") as "fln" , "Company" from "Customer" c where "FirstName" = firstName and "LastName" = lastName;
end;
$$
language plpgsql;

select name_company('Alexandre','Rocha');

select * from "Customer";

/* 5.0 */

create or replace procedure delete_Invoice(id int)
language plpgsql
as $$
declare 
rec record;
begin 
	for rec in select "InvoiceId" from "InvoiceLine" il where "InvoiceId" = id
	loop
		delete from "InvoiceLine" where "InvoiceId" = id;
	end loop;
	delete from "Invoice"  where "InvoiceId" = id; 
end;
$$;

call delete_invoice(402);

---------------------------------------------------------------

create or replace procedure new_Customer(id int, fn text, ln text, comp text, addr text, city text, state varchar(2), country text, pc varchar, phone varchar, fax varchar, email varchar, srId int)
language plpgsql
as $$
begin 
	select max( "CustomerId" ) into id from "Customer";
	id := id + 1;
	insert into "Customer" values (id, fn, ln, comp, addr, city, state, country, pc, phone, fax, email, srId);
end;
$$;

call new_customer(1,'Johna','Valencia','Revature','123 Orlando Dr','Orlando','FL','United States','33403','+1 (603) 123-4567', null, 'johna@revature.com', 7) ;

/* 6.1 */


create or replace function trigger_insert()
returns trigger
as $$
begin 
		update "Employee" set "ReportsTo" = 6 where "Title" ilike 'IT S%' and "EmployeeId" = new."EmployeeId" ;
	return new;
end;
$$
language plpgsql;

create trigger after_new_Employee
after insert 
on "Employee"
for each statement 
execute procedure trigger_insert();

insert into "Employee" values ( 11, 'Anderson', 'Alice', 'IT Staff', null, '1/7/1994', '1/7/2020','1234 Elm Street','Orlando','FL','United States', '33403', '+1 (888) 123-4567', '+1 (888) 123-4567', 'aanderson@revature.com');
delete from "Employee" where "LastName" = 'Anderson';

-----------------------------------------------------------

create or replace function trigger_after_update_album()
returns trigger 
as $$
begin 
	if exists (select "Title" from "Album" a where "Title" = new."Title" ) then 
		rollback;
	end if;
	return new;
end
$$
language plpgsql;

create trigger after_upd_album
after update 
on "Album"
for each row 
execute procedure trigger_after_update_album();

update "Album" set "Title" = 'Out of Exile' where "AlbumId" = 10;


