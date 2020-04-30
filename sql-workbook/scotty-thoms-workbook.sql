/* Revature Associate SQL Workbook Assignment

    Scotty Thoms
    PostGreSQL
    
    Working with Relational Database Management Systems

*/

-- 2.1 SELECT 

select * from "Employee";
select * from "Employee" where "LastName" = 'King';
select * from "Employee" where "FirstName" = 'Andrew' and "ReportsTo" is null;

--2.2 ORDER BY

select * from "Album" order by "Title" desc
select "FirstName" from "Customer" order by "FirstName" asc

--2.3 INSERT TO

