# Node-Express-EJS-MySQL-CRUD

A simple CRUD project built to learn how **Node.js**, **Express**, **EJS**, and **MySQL** work together.

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
Result
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
* Dynamic EJS pages

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

### 5. Start server

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

## Note

* This project was built mainly for **learning and revision**.
* Many comments inside the code are intentionally written in simple language (including Hinglish) to help me quickly revise concepts and understand the execution flow later.
* The focus of this project is understanding the **request → Express → MySQL → EJS → browser** flow, not writing production-ready code.

---

**Author:** Govind Chouhan
