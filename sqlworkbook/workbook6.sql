drop doesnothing

create or replace function doesnothing() returns trigger as $$
begin
	return true;
end; $$
language PLPGSQL;

create trigger afterNewRecord
after insert on "Employee"
for each row 
execute function doesnothing();

create trigger updatedRow
after update on "Album"
for each row
execute function doesnothing();

create trigger deletedRow
after delete on "Customer"
for each row 
execute function doesnothing();

create or replace function before_delete()
returns trigger language plpgsql as $$
begin
    delete from "Invoice" 
    where "Total" < 50;
    return true;
end $$;

create trigger restrictDelete
before delete on "Invoice"
for each row 
execute function before_delete();