const express = require('express');

const app = express(),
    bodyParser = require("body-parser");
    port = 3080;

const posts = [
    {
        title: "Jade is Cool", 
        imageSource: "example.png", 
        url: "localhost:4200"
    }
];

app.use(bodyParser.json());

app.get('/api/posts', (req, res) => {
    res.json(posts);
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
  