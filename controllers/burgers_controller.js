var express = require("express");

var burger = require ("../models/burger");

const router = express.Router();

router.get('/', (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/burger', (req, res) => {
    // pull value from HTML
  burger.insertOne("burger_name"), [req.body.name, req.body.sleepy], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put('/api/burger/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log('condition', condition);

  burger.updateOne(
    {
      sleepy: req.body.sleepy,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});


module.exports = router;