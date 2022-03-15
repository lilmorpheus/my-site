require('./config/config');
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

/*    Dependency Installation    */
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');

/*                Express Setup                */
const app = new express();
app.set('view-engine', 'ejs');
app.use(cors()); //Something about Cors is fucking things up
app.use(express.json());
app.use(express.urlencoded({extended: false}) );//URL encoded

/*               STATIC folder access                */
var path = require('path');
app.use('/res', express.static(path.join(__dirname, "/res/")));
app.use('/styles', express.static(path.join(__dirname, "/dist/styles/")));
app.use('/scripts', express.static(path.join(__dirname, "/dist/scripts/")));
app.set('views', path.join(__dirname, "/dist/views/"));
var portfolio = require('./res/portfolio.json')

/*                Requests                */
            /*      GET     */  
app.get('/', function(req, res) {
    res.redirect('/home');
});
app.get('/home', function(req, res) {
    res.render('index.ejs', {page: 'homepage'});
});
app.get('/about', function(req, res) {
    res.render('index.ejs', {page: 'about'})
    //res.render('index.ejs', {page: 'woi-page'});
});
app.get('/client', function(req, res) {
    //res.redirect('http://139.59.167.149/');
    res.render('index.ejs', {page: 'client'});
});
app.get('/projects', function(req, res) {
    res.render('index.ejs', {
        page: 'projects',
        data: portfolio
    });
    //Django Application
});

/*      POST     */
/*      PUT     */
/*      DELETE     */

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });