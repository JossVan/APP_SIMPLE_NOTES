create database notes;
use notes;

create table notes(
id int auto_increment primary key,
note text,
`status` int,
complete boolean,
creation_date datetime
);