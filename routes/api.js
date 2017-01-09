var
  express = require('express'),
  apiRouter = express.Router(),
  apiController = require('../controllers/api.js')

apiRouter.get('/', apiController.index)
apiRouter.post('/', apiController.create)
apiRouter.get('/:id', apiController.show)
apiRouter.patch('/:id', apiController.update)
apiRouter.delete('/:id', apiController.destroy)

//##Tested the routes and consolidated the router and corresponding action
// apiRouter.get('/:id', (req, res) => {
//   res.json({message: "One single song."})
// })

module.exports = apiRouter
