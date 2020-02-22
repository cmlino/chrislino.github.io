// server init + mods
var app = require('express')();
var http = require('http').Server(app);
var express = require('express');
var mongoose = require('mongoose');
require('dotenv').config()

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.use(express.static('public'));


http.listen(3000, function(){
    console.log('Server up on *:3000');
})