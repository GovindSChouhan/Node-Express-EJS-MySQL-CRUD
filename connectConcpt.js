//node load mysql and express onto memorey.
const { faker } = require("@faker-js/faker");//reuire mean load kr ree hai
const mysql = require('mysql2');
const express = require("express");
const app = express();
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));//It reads form data sent by the browser.

//Same thing jo bhaly bhi ki hai 
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

//saveing the info for later contact
const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    database:'node',
    password:'@govind31082004'

});

 let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
       
    ];
};
 
    //HOME ROUTE.
 //saying to express that if someone visit / execute this function 
    app.get("/", (req, res) => {
       let q = 'select count(*) from user';//not execute only store string
        //res.send("govind server");
        try{//"Hey MySQL, execute the SQL query SHOW TABLES."
        connection.query(q,(err, result) => {//please execute this SQL.$for callback ki brower mai o/p (err, result)
            if(err) throw err;
           let count = result[0]["count(*)"];
            res.render("home.ejs", {count});
        });
    }catch(err){
        console.log(err);
        res.send("some erro in the database");
    }
 //   res.send("welcome to home page");
    });

    //SHOW ROUTE
    app.get("/user",(req, res) => {
        let q = 'select * from user';
        try{//"Hey MySQL, execute the SQL query SHOW TABLES."
        connection.query(q,(err, users) => {//please execute this SQL.$for callback ki brower mai o/p (err, result)
            if(err) throw err;//upper wala result ko users bana diya.
           //let count = result[0]["count(*)"];
            
            ///Bahut sara data show karta hai EJS needed
           //console.log(result);
          // res.send(result);

          res.render("showusers.ejs", {users});//in form of object 
          
           
        });
    }catch(err){
        console.log(err);
        res.send("some erro in the database");
    }

    });

    //EDIT ROUTE //
    //see when i click edit route
    //reques come to this page without it output is like 
    //Cannot GET /user/01bd0310-150d-4536-af47-3f3f6ccb6393/edit
    app.get("/user/:id/edit", (req, res) => {
        let {id} = req.params;// //we have id so to edit user based on id YES 
        let q =`select * from user where id='${id}'`;
        try{//"Hey MySQL, execute the SQL query SHOW TABLES."
        connection.query(q,(err, result) => {//please execute this SQL.$for callback ki brower mai o/p (err, result)
            if(err) throw err;
           // console.log(result);
           let user = result[0];

            res.render("edit.ejs", {user});
        });
    }catch(err){
        console.log(err);
        res.send("some erro in the database");
    }
      //  res.render("edit.ejs");//with this output is u are about to edit this User
       
    });

    //UPDATE (DB) Route
       app.patch("/user/:id",(req, res) => {
        //res.send("updated");//kaam k bad print this initial check for code sahi conformation
        let {id} = req.params;//id store karega.
        let {password : formPass, username: newUsername} = req.body;
        let q = `select * from user where id='${id}'`;
        try{
        connection.query(q,(err, result) => {//please execute this SQL.$for callback ki brower mai o/p (err, result)
            if(err) throw err;
           // console.log(result);
           let user = result[0];
           if(formPass != user.password){
            res.send("Wrong Password");
           }else{
            let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
            connection.query(q2, (err, result) => {
                if(err) throw err;
                res.redirect("/user");

            });
           }
           //res.send(user);
           // res.render("edit.ejs", {user});
        });
    }catch(err){
        console.log(err);
        res.send("some erro in the database");
    }
       });

    app.listen("8080", () => {
        console.log("server is listening to port 8080");

    }) ;

    
//not need of this function as connection auto end when get/ response end.
    // connection.end();
    // app.get("/", (req, res) => {
    //     res.send("welcome to home page");
    // });
