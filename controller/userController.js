const { User } = require('../models/index')
const Bcrypt = require('../helper/bcrypt')
const Jwt = require('../helper/jwt')

class userController {
    static async register ( req, res, next ) {
        try {
            console.log(req.loggedIn);
            const { username, password, repassword } = req.body
            if(repassword !== password ) {
                throw {name: 'wrongRepassword'}

            }
            const newUser = await User.create({
                username, password, repassword
            })
            const token = Jwt.sign({
                id: newUser.id,
                username: newUser.username
            })
            res.status(201).json({
                id: newUser.id,
                username: newUser.username,
                token
            })
        }
        catch(err) {
            next(err)
        }
    }

    static async login ( req, res, next ) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({
                where: {
                    username
                }
            })
            const token = Jwt.sign({
                id: user.id,
                username: user.username
            })
            res.status(200).json({ username: user.username, token})
        }
        catch(err) {
            next(err)
        }
    }
}

module.exports = userController