const express = require('express');
const { getLibraries, addLibrary } = require('../controllers/libraries');


const router = express.Router();

router.route('/')
.get(getLibraries)
.post(addLibrary);

module.exports = router;
