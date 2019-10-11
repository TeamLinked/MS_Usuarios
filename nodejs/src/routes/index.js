const {Router} = require ('express');
const router = Router();


router.get('/',(req, res) => res.json({message:"la cosa responde"}));

module.exports = router;