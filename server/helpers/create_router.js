const express = require('express')

const createRouter = function (collection) {

  const router = express.Router()

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
  });

  router.get('/:id', (req, res) => {
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
  });

  return router
};

module.exports = createRouter;
