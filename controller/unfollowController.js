const UserModel = require('../model/userSchema')
exports.unfollow = (req, res) => {
    var following = req.body.fusername
    var myusername = req.body.username
    UserModel.findOne({ username: myusername }, (err, data) => {
        if (err)
            return res.status(400).send('error')
        if (!data)
            return res.status(401).send('no user Found')
        else {
            removeElement(data.following, following)
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
                            removeElement(data.followers, myusername)
                            UserModel.update({ username: following }, { followers: data.followers }, (err, data) => {
                                if (err)
                                    return res.status(400).send('error')
                                if (data) {
                                    return res.status(200).send("unfollowed")
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}



function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
}