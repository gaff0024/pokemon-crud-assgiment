const {Router} = require('express');
const pokemonController = require('../controllers/pokemoncontroller');
const pokemonRouter = Router();

pokemonRouter.get('/', pokemonController.getAll);
pokemonRouter.get('/:id', pokemonController.getOne);
pokemonRouter.post('/', pokemonController.create);
pokemonRouter.put('/:id', pokemonController.replace);
pokemonRouter.patch('/:id', pokemonController.update);
pokemonRouter.delete('/:id', pokemonController.deleteOne);

module.exports = pokemonRouter;
