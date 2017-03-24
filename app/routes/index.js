var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

	res.sendFile('/Users/Michael/Desktop/js-list-filter/app/public/'); // routing correctly, but breaking js scripts links
});

module.exports = router;