const TweetModel = require('../model/tweetSchema')

//create tweet controller
exports.addTweete = (req, res) => {
    console.log(req.body)

    //create tweet and save it
    var newTweete = new TweetModel()
    newTweete.description = req.body.description
    // newTweete.username = req.body.username
    newTweete.username = 'raminawahda'
    newTweete.parent = req.body.parent

    newTweete.save((err, savedTweete) => {
        if (err) {
            console.log(err)
            return res.status(400).send('error')
        }
        return res.status(200).send(savedTweete._id)
    })
}


//get all tweet controller
exports.gitAllTweetes = (req, res) => {
    TweetModel.find({}, (err, tweetes) => {
        if (err)
            res.send(err);
        res.json(tweetes);
    });
}

exports.searchTweet = (req, res) => {
    var searchvale = req.body.search
    TweetModel.find({ "description": { "$regex": searchvale, "$options": "i" } }, (err, data) => {
        if (err)
            return res.status(400).send('error')
        else {
            return res.status(200).send(data)

        }
    })
}
