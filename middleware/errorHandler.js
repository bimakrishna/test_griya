class ErrorHandler {
    static handle(err, req, res, next) {
        let status = 500 
        console.log(err);
        let msg = 'Internal Server Error'
        if( err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
            msg = err.errors.map(element => {
                return element.message 
            })
            msg = msg.join(', ')
            status = 400;
        }
        else if(err.name === 'wrongRepassword') {
            msg = 'Password Salah'
            status = 401
        }
        res.status(status).json({ message: msg })
    }
}

module.exports = ErrorHandler