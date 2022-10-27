use reactjs;

drop table person;

create table person(
  id int not null auto_increment primary key,
  username varchar(100),
  position varchar(100),
  attach varchar(100),
  regdate varchar(100)
);