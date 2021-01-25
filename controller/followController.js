const UserModel = require('../model/userSchema')

exports.follow = (req, res) => {
    var following = req.body.fusername
    var myusername = req.body.username
    UserModel.findOne({ username: myusername }, (err, data) => {
        if (err)
            return res.status(400).send('error')
        if (!data)
            return res.status(401).send('no user Found')
        else {
            data.following.push(following)
            UserModel.update({ username: myusername }, { following: data.following }, (err, data) => {
                if (err)
                    return res.status(400).send('error')
                if (data) {
                    UserModel.findOne({ username: following }, (err, data) => {
                        if (err)
                            return res.status(400).send('error')
                        if (!data)
                            return res.status(401).send('user not Found')
                        else {
                            data.followers.push(myusername)
                            UserModel.update({ username: following }, { followers: data.followers }, (err, data) => {
                                if (err)
                                    return res.status(400).send('error')
                                if (data)
                                    return res.status(200).send('followed')
                            })
                        }
                    })
                }
            })
        }
    })
}