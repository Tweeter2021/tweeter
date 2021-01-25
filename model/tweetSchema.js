const mongoose = require("mongoose");

const Schema = mongoose.Schema

const tweetSchema = new Schema({
    description: {
        required: true,
        default: "",
        type: String
    },
    images: {
        default: [],
        type: Array
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'Tweet'
    },
    retweets: [{
        type: Schema.Types.ObjectId,
        ref: 'Tweet'
    }],
    replies: [{
        type: Schema.Types.ObjectId,
        ref: 'Tweet'
    }],
    // user: {
    //     required: true,
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    username: {
        type: String,
    },
    name: {
        type: String
    }, comments: [{
        text: String,
        image: String,
        postedBy: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
    ,
    retweet: {
        type: Schema.Types.ObjectId,
        ref: 'Tweet'
    }
}, { timestamps: true })

const Tweet = mongoose.model('Tweet', tweetSchema)
module.exports = Tweet