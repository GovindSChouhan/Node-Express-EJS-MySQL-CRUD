# Node-Express-EJS-MySQL-CRUD

A simple CRUD project built to learn how **Node.js**, **Express.js**, **EJS**, and **MySQL** work together.

## Note  

* This project is **only for learning and revision**.
* Most comments are intentionally written in simple language (including Hinglish) for my own understanding.
* The goal is to understand **how data flows**, not to memorize syntax.
* Whenever confused, first ask:

  * **Where did the data come from?**
  * **Where is the data going next?**

## Tech Stack

* Node.js
* Express.js
* EJS
* MySQL
* Faker.js
* Method Override

## Project Flow

```text
Browser
   ↓
Express Route
   ↓
MySQL Query
   ↓
Database
   ↓
Query Result
   ↓
Express
   ↓
EJS
   ↓
Browser
```

## Features

* Show total users
* Show all users
* Edit username
* Password verification before update
* MySQL CRUD
* Dynamic EJS rendering

---

## How to Run

### 1. Open project

```bash
cd Node-Express-EJS-MySQL-CRUD
```

### 2. Install packages

```bash
npm install
```

### 3. Create database

```sql
CREATE DATABASE node;
USE node;
SOURCE schema.sql;
```

### 4. Update MySQL password

In `connectConcpt.js`

```js
password: "YOUR_PASSWORD"
```

### 5. Start Server

```bash
nodemon connectConcpt.js
```

or

```bash
node connectConcpt.js
```

### 6. Open Browser

Home

```
http://localhost:8080/
```

Users

```
http://localhost:8080/user
```

---

# Revision Notes

## Overall Flow

```text
Client Request
      ↓
Express Route
      ↓
req.params / req.body
      ↓
connection.query()
      ↓
MySQL
      ↓
Result
      ↓
res.render() / res.send() / res.redirect()
      ↓
Browser Response
```

## Express Flow

```text
require()
↓
Load package

app.get()
↓
Register Route

app.listen()
↓
Start Server

Browser Request
↓
Route Executes
```

**Important:** `app.get()` **does not execute immediately.** It is only registered. It runs **only when the browser requests that route.**

---

## MySQL Flow

```text
createConnection()
↓
Prepare DB connection

connection.query()
↓
Execute SQL

callback(err, result)
↓
Receive Result
```

---

## EJS Flow

```text
res.render("home.ejs", {count})
          ↓
Send data
          ↓
EJS receives object
          ↓
<%= count %>
          ↓
HTML generated
          ↓
Browser
```

---

## req.params

```text
URL
↓
/user/123/edit

req.params

{
   id: "123"
}
```

Use when data comes **from the URL**.

---

## req.body

```text
HTML Form
↓
User submits form
↓
express.urlencoded()
↓
req.body
```

Use when data comes **from a form**.

---

## res Methods

```text
res.send()
↓
Send text/object

res.render()
↓
Render EJS page

res.redirect()
↓
Go to another route
```

---

## CRUD Mapping

```text
GET
↓
Read

POST
↓
Create

PATCH
↓
Update

DELETE
↓
Delete
```

---

## Things I Learned

* Express Routing
* Route Parameters (`req.params`)
* Form Data (`req.body`)
* MySQL Connection
* SQL Queries
* Callback Flow
* EJS Rendering
* Passing Data to EJS
* Password Verification
* Method Override
* CRUD Operations
* Browser → Express → Database → Browser flow

---



---

## Author

**Govind Singh Chouhan**
