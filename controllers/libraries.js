const Library = require('../models/Library');
// @desc Get all libraries
// @route Get /api/v1/libraries
// @ access public


exports.getLibraries = async (req, res, next) => {
  try {
    const libraries = await Library.find();

    return res.status(200).json({
      success: true,
      count: libraries.length,
      data: libraries
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
  };
  
  // @desc  Create a library
// @route POST /api/v1/library
// @access Public
exports.addLibrary = async (req, res, next) => {
  try {
    const library = await Library.create(req.body);

    return res.status(201).json({
      success: true,
      data: library
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Server error'});
  }
};

