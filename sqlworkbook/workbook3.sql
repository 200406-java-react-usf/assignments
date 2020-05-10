--select *
--from "Customer";

CREATE or replace FUNCTION getTime() RETURNS time AS $$
BEGIN
	RETURN localtime;
END; $$
LANGUAGE PLPGSQL;

create or replace function getLengthOfMediaType(theRow int) returns integer as $$
begin
	return length("Name") 
	from "MediaType" mt 
	where "MediaTypeId" = theRow;
end; $$
language PLPGSQL;

select getTime();
select getLengthOfMediaType(1);


create or replace function getInvoiceTotalAverage() returns float as $$
begin 
	return AVG("Total") from "Invoice";
end; $$
language plpgsql;

select getInvoiceTotalAverage();


create or replace function getEmployees() 
returns table (
	firstname varchar,
	lastname varchar
) as $$
begin
	return query select "FirstName", "LastName"
	from "Employee"
	where CAST(EXTRACT(YEAR FROM "BirthDate") AS INTEGER) < 1968;
end; $$
language plpgsql;
--
select getEmployees();