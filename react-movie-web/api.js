const client = require('./src/db_connection')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Server is now listening at port 3000");
})

client.connect();

app.get('/users', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})