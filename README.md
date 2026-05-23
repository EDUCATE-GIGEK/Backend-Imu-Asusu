# Developing Educate' backend with PostgreSQL

## Using the PostgreSQL database locally

### Step 1 --> install the PostgreSQL app

Download here --> https://postgresapp.com/downloads.html
Documentation here --> https://postgresapp.com/documentation/

**Note** the PostgreSQL app allows you write SQL code in a terminal

Connect the postgress app

### Step 2 --> Choose what interface to write SQL in : VS Code or PgAdmin or Terminal

**PGAdmin**

- Download the PgAdmnin Appplication here: https://www.pgadmin.org/download/
- Right click on a server and select: Create -> Server Group (Give Server group a name)
- Right click on new server group and select: Register -> Server
- Click the "General" tab and give the new server a name, then
- Click the "Connection" tab, fill in "Host name/address" as "localhost", leave the password field empty, and fill in "username" with macOS name
- To get macOS name, type "whoami" in your terminal and press enter
- Then save
- Navigate from ServerNAme --> DatabaseName --> Database --> postgres
- Right click on postgres and select Query Tool
- You should now be able to write queries fr your database

**VS Code**

- Install Microsoft's PostgreSQL extension
- Select Servers->Connenct
- fill in "Host name/address" as "localhost", leave the password field empty, and fill in "username" with macOS name
- To get macOS name, type "whoami" in your terminal and press enter
- Fill in all the fields and connect to the server
- Navigate from Servers --> ... Database --> postgres
- Right click on postgres --> New Query

TODO: Give claude the permission to access my private repository

