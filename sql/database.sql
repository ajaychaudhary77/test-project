drop database if exists Temperature;

create database if not exists Temperature;

use Temperature;

create table if not exists Users(
    UserId int auto_increment,
    Username varchar(50) not null,
    Password varchar(40) not null,
    primary key(UserId)
);

create table UserNodes(
    NodeId int auto_increment,
    NodeName varchar(80),
    Description varchar(255),
    UserId int not null,
    primary key(NodeId),
    foreign key(UserId) references Users(UserId)
);

create table Temperatures(
    RecordId int auto_increment,
    NodeId int not null,
    Temperature float not null,
    DateTime TimeStamp DEFAULT CURRENT_TIMESTAMP,
    IPAddress char(15),
    primary key(RecordId),
    foreign key(NodeId) references UserNodes(NodeId)
);