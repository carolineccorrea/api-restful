const express = require('express');
const router = express.Router();


router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header("Access-Control-Allow-Headers", '*');
    next();
  });

route = router.get('/', (req,res,next) => {
    res.status(200).send({
        title:"API"
    });
});

module.exports = router;