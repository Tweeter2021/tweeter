const UserModel = require('../model/userSchema')
const bcrypt = require('bcryptjs')
//JWT
const jwt = require('jsonwebtoken');
exports.signUpUser = async (req, res) => {
    console.log(req.body)
    const salt = await bcrypt.genSalt(10)

    const hashedPass = await bcrypt.hash(req.body.password, salt)
    UserModel.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            console.log(err)
            return res.status(400).send('used username')
        }
        if (!user) {
            var newuser = new UserModel()
            newuser.username = req.body.username
            newuser.email = req.body.email
            newuser.name = req.body.name
            newuser.password = hashedPass
            newuser.save((err, saveduser) => {
                if (err) {
                    console.log(err)
                    return res.status(400).send('error')
                }
                var token = jwt.sign({ _id: saveduser._id }, '12kkQlm')
                res.cookie('authToken', token)
                return res.status(200).send('created')
            })
        }
        else
            return res.status(406).send('email used')
    })
}

exports.loginUser = (req, res) => {
    var email = req.body.email
    UserModel.findOne({ email: email }, async (err, user) => {
        if (err) {
            console.log(err)
            return res.status(500).send('error')
        }
        if (!user) {
            console.log('user not found')
            return res.status(404).send('not found user')
        }
        else {
            const vaildPass = await bcrypt.compare(req.body.password, user.password)
            if (!vaildPass) {
                res.status(400).send('invalid Password')
            }
            else {
                var token = jwt.sign({ _id: user._id }, '12kkQlm')
                res.cookie('authToken', token)
                return res.status(200).send(token)
            }
        }
    })
}


