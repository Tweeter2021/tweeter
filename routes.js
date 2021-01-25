const express = require('express');
const routers = express.Router();


// User Controller 
const userController = require('./controller/userController')
routers.post('/signup', userController.signUpUser);
routers.post('/login', userController.loginUser);



// Tweetes Controller 
const TweeteController = require('./controller/tweetesController')
routers.post('/addtweete', TweeteController.addTweete);
routers.get('/gitalltweete', TweeteController.gitAllTweetes);


// Follow Controller 
const FollowController = require('./controller/followController')
routers.post('/follow', FollowController.follow);


// UnFollow Controller 
const UnFollowController = require('./controller/unfollowController')
routers.post('/unfollow', UnFollowController.unfollow);


module.exports = routers;