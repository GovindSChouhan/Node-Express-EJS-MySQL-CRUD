const { faker } = require("@faker-js/faker");//reuire mean load kr ree hai
const mysql = require('mysql2');

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
        // firstName: faker.person.firstName(),
        // lastName: faker.person.lastName(),
        // age: faker.number.int({ min: 18, max: 60 }),
        // city: faker.location.city(),
        // country: faker.location.country()
    ];

    
};
  
    //new data INSERT
    let q = "insert into user (id, username,email, password) values ?";
    let data = [];
    for(let i = 1;i<100;i++){
        data.push(getRandomUser());

    }
    


    try{//"Hey MySQL, execute the SQL query SHOW TABLES."
        connection.query(q, [data], (err, result) => {
            if(err) throw err;
            console.log(result);
        });
    }catch(err){
        console.log(err);
    }
    connection.end();

    

