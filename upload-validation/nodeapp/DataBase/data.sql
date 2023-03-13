create table testNames(
    id int auto_increment PRIMARY KEY,
    name varchar(25)
);

insert into testNames (name) values('Rich');

select *
from testNames;