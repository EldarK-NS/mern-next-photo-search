const validate = require('../middlewears/validate');
const router = require('express').Router();
require('dotenv').config();
const ItemSchema = require('../model/schemas/item');


function routes() {

    router.post('/new', validate, (req, res) => {
        let item = req.body

        const newItem = new ItemSchema(item)

        newItem.save()
            .then(saved => {
                res.status(201).json({
                    success: true,
                    item: {
                        _id: saved._id,
                        body: saved.body,
                        email: saved.email,
                    }
                })
            }).catch(error => res.status(500).json({ success: false, error: error }))
    })


    router.post('/my', validate, (req, res) => {
        let info = req.body

        ItemSchema.find({ email: info.email })
            .then(item => {
                res.status(200).json({
                    success: true,
                    items: item
                })
            }).catch(error => res.status(500).json({ success: false, error: error }))
    })


    router.post('/delete', validate, async (req, res) => {
        let info = req.body
        try {
            const item = await ItemSchema.deleteOne({ _id: info.id })
            if (item) {
                const items = await ItemSchema.find({ email: info.email })
                res.status(200).json({
                    success: true,
                    items: items
                })
            }

        } catch (error) {
            res.status(500).json({ success: false, error: error })
        }
    })

    return router
}
module.exports = routes