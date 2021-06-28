const express = require('express');
const router = express.Router({mergeParams: true});
const { db } = require('../dbUtils/config');

router.get('/', (req, res) => {
    db.select('*').from('user')
    .then(data =>{
        console.log(data);
    })
})

module.exports = router;