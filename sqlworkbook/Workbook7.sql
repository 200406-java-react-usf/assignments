--inner join example, orders table doesnt exist?
select al."AlbumId", al."Title", ar."Name" as Artist
from "Album" al
join "Artist" ar
using ("ArtistId");

SELECT c."CustomerId", c."FirstName", c."LastName", i."InvoiceId", i."Total"
FROM "Customer" c
FULL OUTER JOIN "Invoice" i
on c."CustomerId"=i."CustomerId" 
ORDER BY "CustomerId";

SELECT ar."Name", a."Title" 
FROM "Album" a 
RIGHT JOIN "Artist" ar
ON a."AlbumId" = ar."ArtistId";

SELECT a."Name", ar."Title" 
FROM "Artist" a 
CROSS JOIN "Album" ar;

SELECT e."ReportsTo" 
FROM "Employee" e 
INNER JOIN "Employee" f
ON e."EmployeeId" = f."EmployeeId";


