const express = require("express");
const db = require("../data/dbConfig.js");
const router = express.Router();

// Create
router.post("/", (req, res) => {
  db("cars")
    .insert(req.body)
    .then(cnt => {
      res.status(201).json({ message: `${cnt} record${cnt > 1 ? "s" : ""}` });
    })
    .catch(errors => {
      console.log(errors);
      res.status(400).json({ error: "failed to create record" });
    });
});

// Request
router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      // console.log(cars);
      res.status(200).json(cars);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "failed to get the list of cars" });
    });
});

router.get("/:id", (req, res) => {
  db("cars")
    .where({ id: req.params.id })
    .then(account => res.status(200).json(account[0]))
    .catch(errors => res.status(400).json({ error: "failed to get account" }));
});

// Update

router.put("/:id", (req, res) => {
  db("cars")
    .where({ id: req.params.id }) // remember to filter or ALL records will be updated
    .update(req.body) // will accept partial record; minimum 1 key.
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "failed to update account" });
    });
});

// Delete
router.delete("/:id", (req, res) => {
  //
  db("cars")
    .where({ id: req.params.id })
    .del()
    .then(cnt => {
      // console.log(cnt);
      if (cnt === 0) {
        // failed to delete
        res
          .status(400)
          .json({ error: `record with id ${req.params.id} not found` });
      } else {
        res.status(200).json({ message: `deleted record` });
      }
    })
    .catch(error => {
      // console.log(error);
      res
        .status(500)
        .json({ error: `failed to delete account with id ${req.params.id}` });
    });
});

module.exports = router;
