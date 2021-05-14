var config = require('./config');
const express = require('express');
var mysql = require('mysql');
var fs= require('fs');

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

function processFileNames(fileDir, callback){
    fs.readdir("../"+fileDir, (err, fileNames) => {
        if (err) console.log(err);
        callback(fileNames);
    });
}

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

  app.get('/api/posts/:id', (req, res) => {
        pool.getConnection((err,connection) => {
            if(err) console.log(err);
            console.log("Retrieving article " + req.params.id);
            connection.query('SELECT content, title, type FROM `blog`.`post` WHERE id=' + req.params.id, (err,rows) =>
            {
                if (err) console.log(err);
                res.json(rows);
                connection.release();
            })
        })
  });
  
  app.get('/api/posts/:id/:related', (req, res) => {
      pool.getConnection((err,connection) => {
          if(err) console.log(err);
          console.log("Retrieving related articles " + req.params.related);
          connection.query('SELECT * FROM `blog`.`post` WHERE type=\"' + req.params.related +'\" AND id!=' + req.params.id, (err,rows) =>
          {
              if (err) console.log(err);
              res.json(rows);
              connection.release();
          })
      })
  });

  app.get('/api/images/*', (req, res) => {
    processFileNames(req.params[0], (fileNames)=>{
        console.log(fileNames);
        return res.json(fileNames);
      });
  })

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
  