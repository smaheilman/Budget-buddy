<<<<<<< HEAD
//REFACTOR FOR BONKING

const router = require('express').Router();
const { User, Budget } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    User.findAll({
        attributes: { exclude: ['password'] }
=======
const router = require('express').Router();
const { User, Transaction } = require('../../models');

// GET /api/user
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    User.findAll({
        attributes: { exclude: ['password']}
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

<<<<<<< HEAD
// GET /api/users/1
=======
// GET /api/user/1
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        include: [
          {
<<<<<<< HEAD
            model: Budget,
            attributes: [DATADATATDATADATADATA]
=======
            model: Transaction,
            attributes: ['id', 'amount', 'date', 'memo', 'category']
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
          }
        ],
        where: {
          id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

<<<<<<< HEAD
// POST api/users
=======
// POST api/user
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
router.post('/', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
      username: req.body.username,
<<<<<<< HEAD
      email: req.body.email,
      password: req.body.password
=======
      monthly_income: req.body.monthly_income,
      email: req.body.email,
      password: req.body.password
      
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
    })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
    
        res.json(dbUserData);
      });
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});


router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
      User.findOne({
        where: {
<<<<<<< HEAD
          email: req.body.email
=======
          username: req.body.username
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
        }
      }).then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: 'No user with that email address!' });
          return;
        }
        
        // Verify user
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
          // declare session variables
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
          
          res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
<<<<<<< HEAD
      });  
=======
      }) 
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

<<<<<<< HEAD
// PUT /api/users/1
=======
// PUT /api/user/1
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
router.put('/:id', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
<<<<<<< HEAD
    User.update(req.body, {
=======
    User.update(
      {
        monthly_income: req.body.monthly_income,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      },
       {
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

<<<<<<< HEAD
// DELETE /api/users/1
=======
// DELETE /api/user/1
>>>>>>> 9b9100d86be2fe726d84f09b8841ca4d826c1bff
router.delete('/:id', (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;