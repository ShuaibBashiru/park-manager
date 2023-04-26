const express = require('express');
const router = express.Router();
// define routes
router.get('/', (req, res) => {
  res.send('Hello world 44!');
});

router.get('/about', (req, res) => {
  res.send('About Us');
});

router.get('/contact', (req, res) => {
  res.send('Contact Us');
});

module.exports = router;