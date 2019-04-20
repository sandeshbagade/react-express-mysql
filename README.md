# React Express Starter Pack
Local Machine requirements : node, npm, mysql 

## Quick Start
create database `create database coral_blockchain_user` then create table user in this database `create table user (ID ,userName varchar(25), emailId varchar(50) primary key, password varchar(50) ,phoneNo varchar(10) ,dateTime)`
``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install (or) go in client folder and run this command npm install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## App Info

### Author

Sandesh Bagade 
(sandeshbagade25@gmail.com)

### Version

1.0.0

### License

This project is licensed under the MIT License
