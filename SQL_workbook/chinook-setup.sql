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

--create a function that returns the length of a mediatype from the mediatype table

select mediatypeLength(1)

--create a function that returns the average total of all invoices

select averageinvoice()

--create a function that returns the mst expensive track

select expensivetrack()

--create a function that returns the average price of invoice-line items in the invoice-line table

select averageinvoiceline()

--create a function that returns all employees who were born after 1968

select bornafter1968()

-- create a stored procedure that selects the first and last name of all employees

call firstandlast()

-- create a stored procedure that updates the personal information of an employee (I only did FN anf LN but more parameters could easily be updated)

call updatepersonal(10, 'Elton', 'John')

-- create a stored procedure that returns the manager of an employee

call getmanager(1) -- doesn't output

--create a stored procedure that returns the name and company of a customer

call customerinfo(1) -- doesnt output

-- create a transaction that given a invoiceID will delete that invoice

call deleteinvoice(1) -- doesn't work

--create a transaction nested within a stored procedure that inserts a new record in the customer table



--crate an after trigger on the employee table after a new record is inserted into the table

create trigger trig1 after insert on "Employees" for each row execute procedure getManager();

--create an after update trigger on the album table that fires after a row is updated in the table

create trigger trig2 after update on "Albums" for each row execute procedure getDate();

--create an after delete trigger on the customer table that fires after a row is delted from the table

creat trigger trig3 after delete on "Customers" for each row execute procedure firstandlast();

--create a before trigger that restricts the deletion of any invoice that is priced over 50 dollars

create trigger trig4 before delete "Invoice" for each row execute procedure over50();

--create an inner join that noijs customers and orders and specifies the name of the customer and the invoiceId

select "FirstName", "LastName", "InvoiceId" from "Customer" inner join "Invoice" on "Customer"."CustomerId" = "Invoice"."CustomerId";


--create an outer join that joins the customer and invoice table specifying the customerId, firstname, lastname, invoiceID, and total

select "CustomerId", "FirstName", "LastName", "InvoiceId", "Total" from "Customer" full outer join "Invoice" on "Customer"."CustomerId" = "Invoice"."CustomerId";

--create a right join that joins album and artist specifying artist name and title

select "Name", "Title" from "Album" right join "Artist" on "Artist"."ArtistId" = "Album"."ArtistId";


--create a cross join that joins album and artist and sorts by artist name in ascending order

select "Name", "Title" from "Album" cross join "Artist";

--perform a selfjoin on the employee table joining on the reports to column

select e."FirstName" employee, m."FirstName" manager from e."Employee" inner join m."Employee" on m."EmployeeId" = e."ReportsTo"

--create an index on a table of your choice