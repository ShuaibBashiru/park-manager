const express = require('express');
const router = express.Router();
const connectionMssql = require('../config/dbconfig1');
// const connectionMysql = require('../config/dbconfig2');

router.get('/users', (req, res) => {
    let id = 'B/BDG/AMW/01/072'
    connectionMssql.query("SELECT TOP 2 * FROM [Lagpark2].[dbo].[Park_Users]", (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }else{
      res.json(rows);
    }
  });
});
router.get('/user/id', (req, res) => {
  let id = 'B/BDG/AMW/01/072'
  connectionMssql.query("SELECT TOP 2 * FROM [Lagpark2].[dbo].[Park_Users]", (err, rows) => {
  if (err) {
    console.log(err);
    res.sendStatus(500);
    return;
  }else{
    res.json(rows);
  }
});
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
