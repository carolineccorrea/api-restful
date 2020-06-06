const express = require('express');
const router = express.Router();


route = router.get('/', (req,res,next) => {
    res.status(200).send({
        title:"API"
    });
});

module.exports = router;