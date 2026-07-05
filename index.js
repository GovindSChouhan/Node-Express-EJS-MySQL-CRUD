const { faker } = require("@faker-js/faker");//reuire mean load kr ree hai
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    database:'node',
    password:'@govind31082004'
});
    //new data INSERT
    let q = "insert into user (id, username,email, password) values (?, ?, ?, ?)";
    let user = ["1","govind","@govind.com","abc"];


    try{//"Hey MySQL, execute the SQL query SHOW TABLES."
        connection.query("show tables",(err, result) => {
            if(err) throw err;
            console.log(result);
        });
    }catch(err){
        console.log(err);
    }
    connection.end();

    let getRandomUser = () => {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        // firstName: faker.person.firstName(),
        // lastName: faker.person.lastName(),
        // age: faker.number.int({ min: 18, max: 60 }),
        // city: faker.location.city(),
        // country: faker.location.country()
    };
}

