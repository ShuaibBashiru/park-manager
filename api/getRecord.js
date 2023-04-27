const express = require('express');
const router = express.Router();
const connectionMssql = require('../config/dbconfig1');
// const connectionMysql = require('../config/dbconfig2');

router.get('/user/:id', (req, res) => {
  try {
    const searchid = req.params.id
    connectionMssql.query(`SELECT TOP 1 * FROM [Lagpark2].[dbo].[Park_Users] WHERE [phone] = '${searchid}'`, (err, rows) => {
      if (err) {
        res.status(500).json({
          record: [],
          status: false,
          msg: 'Unable to get the record right now, please try again later.',
          serverError: err,
        });
      } else {
        if (rows.recordsets.length === 0) {
          res.json({
            record: [],
            status: false,
            msg: 'No record(s) found.',
            serverError: '',
          });
        } else {
          res.json({
            record: rows.recordsets[0][0],
            status: true,
            msg: 'Success',
            serverError: '',
          });
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      record: [],
      status: false,
      msg: 'Error connecting: Unable to get the record right now, please try again later.',
      serverError: error.msg,
    });
  }
});

// router.post('/users', (req, res) => {
//   const { name, email } = req.body;
//   connectionMysql.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//       return;
//     }
//     res.status(201).json({ id: result.insertId, name, email });
//   });
// });

module.exports = router;
