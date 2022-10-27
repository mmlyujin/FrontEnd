create database reactjs;
use reactjs;

create table users(
id int not null auto_increment,
username varchar(30),
email varchar(100),
phone char(13),
image varchar(255),
regdate varchar(255),
primary key(id)
);