drop database if exists reperio;
create database reperio;
use reperio;

create table user_recipes (
  id bigint primary key auto_increment,
  author bigint not null,
  name varchar(32) not null,
  ingredients varchar(512) not null,
  media varchar(512),
  instructions varchar(1024) not null,
  cost int not null,
  time int not null,
  difficulty int not null,
  likes int not null,
  comments int not null,
  datePosted datetime not null
);
