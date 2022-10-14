create table member(
    id int not null auto_increment primary key,
    userid varchar(20),
    passwd varchar(20),
    username varchar(20),
    regdate date
);