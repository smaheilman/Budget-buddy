const router = require('express').Router();
const { Category, Transaction } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
  // be sure to include its associated Products 
    attributes: ['category_name'],
    includes: [
      {
        model: Transaction,
        attributes: ['id', 'amount', 'date', 'memo']
      }
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    // be sure to include its associated Products  
      attributes: ['category_name'],
      includes: [
        {
          model: Transaction,
          attributes: ['id', 'amount', 'date', 'memo']
        }
      ],
      where: {
        id:req.params.id
      }
    })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData[0]) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id:req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;