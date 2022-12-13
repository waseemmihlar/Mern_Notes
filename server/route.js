const express = require('express');
const router = express.Router();
const model = require('./module')

router.route('/create').post(async (req, res) => {

    const title = req.body.title;
    const content = req.body.content;

    const newnote = new model({
        title,
        content
    })

    await newnote.save()
        .then(console.log('data saved'));

    console.log(newnote);
})

router.route('/notes').get(async (req, res) => {
    await model.find().then(resjson => res.json(resjson))
})


module.exports = router;







