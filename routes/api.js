const express = require('express');
const router = express.Router();
const path = require('path');
const fetch = require("node-fetch");
const { url } = require('inspector');

//get the homepage
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

router.get('/users/login',function(req,res){
    res.sendFile(path.join(__dirname, "../public/login.html"))
})

router.get('/posts/:pageid',function(req,res){
    res.sendFile(path.join(__dirname, "../public/feed.html"))
})

router.get('/users/current',function(req,res){
    res.sendFile(path.join(__dirname, "../public/profile.html"))
})

router.get('/z',function(req,res){
    res.sendFile(path.join(__dirname, "../public/zpart.html"))
})

router.get('/users',function(req,res){
    res.sendFile(path.join(__dirname, "../public/signup.html"))
})

router.get('/Z/Feed',function(req,res){
    res.sendFile(path.join(__dirname, "../public/snippets.html"))
})

router.get('/Z/Snippet/Edit/:SnipId',function(req,res){
    res.sendFile(path.join(__dirname, "../public/snippets-edit.html"))
})

router.get('/Z/Snippet/delete/:SnipId',function(req,res){
    res.sendFile(path.join(__dirname, "../public/snippets-delete.html"))
})

//export
module.exports = router;