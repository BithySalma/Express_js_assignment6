
const express = require('express');
const router = express.Router();
const {
  create,
  read,
  delete: remove, 
  update,
} = require('../Controllers/blogController'); 

router.get('/blog/create', create);
router.get('/blog/read', read);
router.get('/blog/delete', remove);
router.get('/blog/update', update);


module.exports = router;


