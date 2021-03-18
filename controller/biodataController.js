const { Biodata } = require('../models/index')

class BiodataController {
    static async showBiodata (req, res, next) {
        try {
            console.log(req);
            const biodata = await Biodata.findAll({
                where: {
                    UserId: req.loggedIn.id
                }
            })
            res.status(200).json(biodata)
        }
        catch(err) {
            next(err)
        }
    }
    static async createBiodata(req, res, next) {
        try {
            const { name, alamat, gender, birth_date } = req.body            
            const newBiodata = await Biodata.create({
                name, alamat, gender, birth_date, UserId: req.loggedIn.id
            })
            res.status(201).json(newBiodata)
        }
        catch(err) {
            console.log(err);
            next(err)
        }
    }
    static async editBiodata (req, res, next) {
        try {
            const id = req.params.id
            const { name, alamat, gender, birth_date } = req.body  
            const biodata = await Biodata.findByPk(id)
            if(!biodata) {
                throw {
                    name: 'Biodata tidak ada'
                }
            }
            const updatedBiodata = await Biodata.update({ name, alamat, gender, birth_date },
                {
                    where: {id},
                    returning: true
                })
                res.status(200).json(updatedBiodata[1][0])
        }
        catch(err) {
            next(err)
        }
    }
    static async destroyBiodata(req, res, next) {
        try {
            const id = req.params.id
            const biodata = await Biodata.findByPk(id)
            if(!biodata) {
                throw {
                    name: 'Biodata tidak ada'
                }
            }
            const deletedBiodata = await Biodata.destroy({
                where: {
                    id
                }
            }) 
            res.status(200).json({name: 'deleted Biodata success'})
        }
        catch(err) {
            next(err)
        }
    }

}

module.exports = BiodataController