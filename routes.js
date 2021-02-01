const express = require('express');
const routers = express.Router();


//User Controller 
const userController = require('./controller/userController')
routers.post('/signup', userController.signUpUser);
routers.post('/login', userController.loginUser);
routers.post('/searchpeople', userController.searchPeople);




//Tweetes Controller 
const TweeteController = require('./controller/tweetesController')
routers.post('/addtweete', TweeteController.addTweete);
routers.get('/gitalltweete', TweeteController.gitAllTweetes);
routers.post('/search', TweeteController.searchTweet);


//Follow Controller 
const FollowController = require('./controller/followController')
routers.post('/follow', FollowController.follow);
routers.post('/unfollow', FollowController.unfollow);


//Bookmark Controller 
const BookmarkController = require('./controller/bookmarkController')
routers.post('/save', BookmarkController.saveTweet);
routers.post('/unsave', BookmarkController.unsaveTweet);


//Likes Controller 
const LikesController = require('./controller/likeController')
routers.post('/like', LikesController.likeTweet);
routers.post('/removelike', LikesController.removelLike);



module.exports = routers;