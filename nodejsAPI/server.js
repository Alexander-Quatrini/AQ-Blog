var config = require('./config');
const express = require('express');
var mysql = require('mysql');

const app = express(),
    bodyParser = require("body-parser");
    port = 3080;

var pool = mysql.createPool({
    connectionLimit: 3,
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password
});


app.get('/api/posts', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) console.log(err);
        console.log('Connected as id '+ connection.threadId);
        connection.query('SELECT * FROM `blog`.`post`', (err,rows) => {
            if (err) console.log(err);
            res.json(rows);
            connection.release();
        })
    })
  });
  
  app.post('/api/post', (req, res) => {
    const post = req.body.post;
    posts.push(post);
    res.json("post added");
  });
  
  app.get('/', (req,res) => {
      res.send('App Works !!!!');
  });
  
  app.listen(port, () => {
      console.log(`Server listening on the port::${port}`);
  });
  