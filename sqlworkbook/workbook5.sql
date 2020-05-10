--5.0 issues resolved in 2.7

begin;

delete from "Invoice"
where "InvoiceId" = 5
end;
commit;

create or replace procedure insertCustomer(firstname varchar, lastname varchar, company varchar, address varchar, city varchar, state varchar, country varchar, postalcode varchar, phone varchar, fax varchar, email varchar, supportrepid varchar)
language plpgsql as $$
begin 
	insert into "Customer" ("FirstName", "LastName", "Company", "Address", "City", "State", "Country", "PostalCode", "Phone", "Fax", "Email", "SupportRepId") values
		(firstname, lastname, company, address, city, state, country, postalcode, phone, fax, email, supportrepid);
end; $$;