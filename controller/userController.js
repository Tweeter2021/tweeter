const UserModel = require('../model/userSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

//user sign up new user Controller
exports.signUpUser = async (req, res) => {
    console.log(req.body)
    const salt = await bcrypt.genSalt(10)

    //create hashed password
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    UserModel.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            console.log(err)
            //check if there is a user sign up with an already used username
            return res.status(201).send('used username')
        }
        if (!user) {
            //create user
            var newuser = new UserModel()
            newuser.username = req.body.username
            newuser.email = req.body.email
            newuser.name = req.body.name
            newuser.password = hashedPass
            newuser.save((err, saveduser) => {
                if (err) {
                    console.log(err)
                    return res.status(201).send('error')
                }
                //create token for user
                var token = jwt.sign({ _id: saveduser._id }, '12kkQlm')
                res.cookie('authToken', token)
                return res.status(200).send(saveduser)
            })
        }
        else
            //check if there is a user sign up with an already used email
            return res.status(206).send('email used')
    })
}

//user sign in user Controller

exports.loginUser = (req, res) => {
    var email = req.body.email
    UserModel.findOne({ email: email }, async (err, user) => {
        if (err) {
            console.log(err)
            return res.status(500).send('error')
        }
        //check user email
        if (!user) {
            console.log('user not found')
            return res.status(204).send('not found user')
        }
        else {
            //check user password
            const vaildPass = await bcrypt.compare(req.body.password, user.password)
            if (!vaildPass) {
                res.status(203).send('invalid Password')
            }
            else {
                //create token for the user
                var token = jwt.sign({ _id: user._id }, '12kkQlm')
                res.cookie('authToken', token)
                return res.status(200).send(user)
            }
        }
    })
}

exports.searchPeople = (req, res) => {
    var searchvale = req.body.search
    UserModel.find({ "username": { "$regex": searchvale, "$options": "i" } }, (err, data) => {
        if (err)
            return res.status(400).send('error')
        else {
            return res.status(200).send(data)

        }
    })
}
