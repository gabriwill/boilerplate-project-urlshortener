require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
var bodyParser = require('body-parser');
const dns = require('dns');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(function (e) { console.log('conectou');}).catch(function (e) { console.log(e);});

const { Schema } = mongoose;
const urlShortSchema  = new Schema({
   original_url: {type:String ,required:true},
   short_url: {type:Number ,required:true}
 });
let UrlShort = mongoose.model('UrlShort', urlShortSchema);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/shorturl', (req, res,next) => {
  if(typeof req.body.url != 'string') return res.json({ error: 'invalid url' });
  if(req.body.url.match(/:\/\//)!=null){
    return next();
  }else return res.json({ error: 'invalid url' });
},async (req, res, next)=>{
  await UrlShort.findOne({original_url: req.body.url},(err, data)=>{
      if (err) return console.error(err);
      if(data==null) {
        return next();
      }else return res.json({original_url:data.original_url,short_url: data.short_url});
    });
} , async (req, res, next)=>{
  let shortUrl = Math.floor(Math.random() * 1000);
  let thisShortUrlAreadyExist = true;
  while(thisShortUrlAreadyExist){
    await UrlShort.findOne({short_url: shortUrl},(err, data)=>{
      if (err) return console.error(err);
      if(data==null) {
        req.shortUrl = shortUrl;
        thisShortUrlAreadyExist = false;
        next();
      }else return;
    });
    shortUrl = Math.floor(Math.random() * 1000);
  }
} , async (req, res, next)=>{
  const newShortUrl = new UrlShort({original_url:req.body.url,short_url: req.shortUrl});
  await newShortUrl.save((err, data)=>{
    if (err) return console.error(err);
    res.json({original_url:req.body.url,short_url: req.shortUrl});
    return;
  });
});

app.get('/api/shorturl/:short', (req, res)=> {
  UrlShort.findOne({short_url: req.params.short},(err, data)=>{
    if (err) return console.error(err);
    if(data) return res.redirect(data.original_url);
    res.sendStatus(404);
  });
  //res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
