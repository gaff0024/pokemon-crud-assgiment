const pokemonService = require('../services/pokemon.js')

const getAll = (_, res) => {
    const pokemons = pokemonService.getAll();
    res.json({pokemons});
};

const getOne = (req, res) => {
    const { id } = req.params;
    const pokemon = pokemonService.getOne(id);
    res.json({pokemon});
};

const create = (req, res) => {
    const { name, type, abilities } = req.body;
    const pokemon = pokemonService.create(name, type, abilities);
    res.status(201).json({pokemon});
};

const replace = (req, res) => {
    const { id } = req.params;
    const { name, type, abilities } = req.body;

    const updatedPokemon = pokemonService.replace(id, name, type, abilities);
    res.json({updatedPokemon});
};

const update = (req, res) => {
    const { id } = req.params;
    const updatedFields = req.body;

    const updatedPokemon = pokemonService.update(id, updatedFields);

    res.json({updatedPokemon});
};

const deleteOne = (req, res) => {
    const { id } = req.params;
    const pokemon = pokemonService.deleteOne(id);
    res.json({pokemon});
};

module.exports = {
    getAll,
    getOne,
    create,
    replace,
    update,
    deleteOne,
};