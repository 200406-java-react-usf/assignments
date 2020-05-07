/*

	2.0 SQL Queries

*/

--2.1

--Task 1
select * from "Employee";

--Task 2
select * from "Employee"
where "LastName" = 'King';

--Task 3
select * from "Employee"
where "FirstName" = 'Andrew' and "ReportsTo" is null;

--2.2

--Task 1
select * from "Album" 
order by "Title" desc;

--Task 2
select "FirstName" from "Customer"
order by "FirstName";

--2.3

--Task 1
insert into "Genre" ("GenreId", "Name")
values ('26', 'Electronic'), ('27', 'Easy Listening');

--Task 2

insert into "Employee" ("EmployeeId", "LastName", "FirstName")
values('9', 'Wagenheim', 'Kevin'), ('10', 'Wandelt', 'Kennedy');

--Task 3

insert into "Customer" ("CustomerId", "LastName", "FirstName", "Email")
values('60', 'Elam', 'Jeremy', 'elam@gmail.com'), ('61', 'Keipe', 'Korey', 'keipe@gmail.com');

--2.4

--Task 1

update "Customer" 
set "FirstName" = 'Robert'
where "FirstName" = 'Aaron';

update "Customer" 
set "LastName" = 'Walter'
where "LastName" = 'Mitchell';

--Task 2

update "Artist" 
set "Name" = 'CCR'
where "Name" = 'Creedence Clearwater Revival';

--2.5

--Task 1

select * from "Invoice"
where "BillingAddress" like 'T%';

--2.6

--Task 1

select * from "Invoice"
where "Total" between 15 and 20;

--Task 2

select * from "Employee"
where "HireDate" between '2003-06-1' and '2007-03-1'

--2.7

--Task 1

alter table "Customer"
drop constraint "PK_Customer" cascade;
alter table "Invoice" 
drop constraint "FK_InvoiceCustomerId" cascade;
delete from "Customer"
where "FirstName" = 'Robert' and "LastName" = 'Walter';

/*
 * 
 * 	3.0 SQL Functions
 * 
 */

--3.1

--Task 1

create or replace function current_time_function()
returns time as $$
	begin 
		return current_timestamp;
	end;
$$ language plpgsql;	

select current_time_function()

--Task 2

create or replace function length_of_mediatype(x int)
returns int as $$
	begin 
		return length("Name") from "MediaType" where "MediaTypeId" = x;
	end;
$$ language plpgsql;

select length_of_mediatype(1);

--3.2

--Task 1

create or replace function avg_invoices()
returns numeric(3,2) as $$
	begin 
		return round(avg("Total"),2) from "Invoice";
	end;
$$ language plpgsql;

select avg_invoices();

--Task 2

create or replace function max_price()
returns setof "Track" as $$
	declare 
		max_p numeric(3,2) := max("UnitPrice") from "Track";
	begin 
		return query select * from "Track" where "UnitPrice" = max_p;
	end;
$$ language plpgsql;

select max_price();

--3.3

--Task 1

create or replace function avg_price_invoices()
returns numeric(3,2) as $$
	begin 
		return round(avg("UnitPrice"), 2) from "InvoiceLine";
	end;
$$ language plpgsql;

select avg_price_invoices();

--3.4

--Task 1

create or replace function employees()
returns setof "Employee" as $$
	begin 
		return query select * from "Employee" where "BirthDate" >= '1968-01-01';
	end;
$$ language plpgsql;

select employees();

/*
 * 
 * 4.0
 * 
 */

--4.1

select "LastName" , "FirstName" from "Employee";

drop procedure namesOfEmployees()

create or replace procedure namesOfEmployees()
as $$
	begin 
		select "LastName" , "FirstName" from "Employee";
		commit;
	end
	
$$ language plpgsql;

call namesOfEmployees();




/*
 * 
 * 6.0 
 * 
 */


--6.1

--Task 1

/*drop function select_all_employees() 

create or replace function select_all_employees()
returns trigger as $$
	begin 
		select * from "Employee";
	end;
$$ language plpgsql;

select select_all_employees();

create trigger return_all_employees
	after insert on "Employee"
	execute function select_all_employees()
	
insert into "Employee" ("EmployeeId", "LastName", "FirstName")
values(11, 'test', 'test');*/


/*
 * 
 * 7.0
 * 
 */
	
--7.1

select c."FirstName",
		c."LastName",
		i."InvoiceId" 
from "Customer" c 
inner join "Invoice" i
on i."CustomerId" = c."CustomerId";

--7.2

select c."CustomerId",
		c."FirstName",
		c."LastName",
		i."InvoiceId",
		i."Total" 
from "Customer" c 
full outer join "Invoice" i
on i."CustomerId" = c."CustomerId";

--7.3

select "Name",
		"Title"
from "Artist" ar
right join "Album" a
on ar."ArtistId" = a."ArtistId";

--7.4

select * from "Album" a 
cross join "Artist" ar
order by ar."Name";

--7.5

select * from "Employee" e 
inner join "Employee" e1
on e."ReportsTo" = e1."ReportsTo" ;

/*
 * 
 * 8.0
 * 
 */

--8.1

/*select * from "Employee" e 

create index reports_to_index
on "Employee"("Employee"."EmployeeId");
*/



		



	






