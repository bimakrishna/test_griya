const Jwt = require('../helper/jwt')
const { User } = require('../models/index')

class Authentication {
    static async user(req, res, next) {
        try {
            const { token } = req.headers
            if(!token) {
                throw { name: 'UserUnauthorized'}
            }
            else {
                const decoded = Jwt.verify(token)
                const user = await User.findOne({
                    where: {
                        id: decoded.id,
                        username: decoded.username
                    }
                })
                if(!user) {
                    throw { name: 'UserUnauthorized'}
                }
                else {
                    req.loggedIn = decoded
                    next()
                }
            }
        }
        catch(err) {
            next(err)
        }
    }
}

module.exports = Authentication