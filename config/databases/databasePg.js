const { Client } = require('pg');

const client = new Client({
    host: "db-postgresql-nyc3-03663-do-user-9698396-0.b.db.ondigitalocean.com",
    port: 25060,
    user: "doadmin",
    password: "2PomsGlHIj1jZ1sF",
    database: "defaultdb",
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000, // 5 seconds connection timeout
});

client.connect(err=>{
    if(!err){
        console.log("connection successfull")
    }else{
        console.log("something went wrong in connectionn",err)
    }
});

client.query('select * from api_game', (err, result)=>{
    if(!err){
        console.log(result.rows)
    }else{
        console.log("error occured", err)
    }
    client.end()
})

module.exports = { client };
