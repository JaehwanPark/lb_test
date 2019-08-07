var router = express.Router();
var os = require('os');

router.get('/', function(req, res, next) {
           res.json(os.networkInterfaces());
});

module.exports = router;
