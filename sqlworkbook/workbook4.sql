--4.1 Basic Stored Procedure
--Task – Create a stored procedure that selects the first and last names of all the employees.
--4.2 Stored Procedure Input Parameters
--Task – Create a stored procedure that updates the personal information of an employee.
--Task – Create a stored procedure that returns the managers of an employee
--4.3 Stored Procedure Output Parameters
--Task – Create a stored procedure that returns the name and company of a customer.

select * from "Customer";

CREATE or replace PROCEDURE getAllNames()
language PLPGSQL as $$
begin
	
	select "FirstName", "LastName" 
	from "Customer";


--	raise notice "FirstName", "LastName" 
--	from "Customer";
end; $$;

create or replace procedure updateEmployeeInfo(id int, lastname varchar, firstname varchar, address varchar)
language plpgsql as $$
begin 
	update "Employee"
	set "LastName" = lastname, "FirstName" = firstname, "Address" = address
	where id = "EmployeeId";
end; $$;

--call updateEmployeeInfo(1,'Bob','Jenson','1234 street lane');


create or replace procedure getManagers(employeeid int)
language plpgsql as $$
begin 
	create table getManagers as
	select "ReportsTo" 
	from "Employee" e 
	where "EmployeeId" = employeeid;
end; $$;

--call getManagers(2);

create or replace procedure getNameAndCompany(customerid int)
language plpgsql as $$
begin 
	create table getNameAndCompany as
	select "FirstName", "LastName", "Company"
	from "Customer"
	where "CustomerId" = customerid;
end; $$;

call getNameAndCompany(5);
