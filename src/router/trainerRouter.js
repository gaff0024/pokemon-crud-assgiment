const {Router} = require('express');
const trainerController = require('../controllers/trainercontroller');
const trainerRouter = Router();

trainerRouter.get('/', trainerController.getAll);
trainerRouter.get('/:id', trainerController.getOne);
trainerRouter.post('/', trainerController.create);
trainerRouter.put('/:id', trainerController.replace);
trainerRouter.patch('/:id', trainerController.update);
trainerRouter.delete('/:id', trainerController.deleteOne);

module.exports = trainerRouter;
