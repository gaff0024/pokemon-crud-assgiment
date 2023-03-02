const createDebug = require("debug");
const { BadRequestError, NotFoundError } = require("../utils/errors");
const pokemons = require("../models/pokemons.js");
const debug = createDebug("app:pokemonService");

const getAll = () => {
    return pokemons;
};

const getOne = (id) => {
    const pokemon = pokemons.find((pokemon) => pokemon.id === parseInt(id));

    if (!pokemon) {
        throw new NotFoundError(`Pokemon with id ${id} not found`);
    }

    return pokemon;
};

const create = (name, type, abilities) => {
    const id = parseInt(pokemons[pokemons.length - 1].id, 10) + 1;

    if (!name || !type || !abilities) {
        throw new BadRequestError("Name, type and abilities required");
    }
    const newPokemon = {
        id: id.toString(),
        name,
        type,
        abilities,
    }
    pokemons.push(newPokemon);
    return newPokemon;
};

const replace = (id, name, type, abilities) => {
    const updatedPokemon = {
        id,
        name,
        type,
        abilities,
    };

    if (!name || !type || !abilities) {
        throw new BadRequestError("Name, type and abilities required");
    }

    const idx = pokemons.findIndex((pokemon) => pokemon.id === parseInt(id));

    if (idx < 0) {
        throw new NotFoundError(`Pokemon with id ${id} not found`);
    }

    pokemons[idx] = updatedPokemon;
    return updatedPokemon;
};

const update = (id, updatedFields) => {
    const idx = pokemons.findIndex((pokemon) => pokemon.id === parseInt(id));

    if (idx < 0) {
        throw new NotFoundError(`Pokemon with id ${id} not found`);
    }

    const updatedPokemon = {
        ...pokemons[idx],
        ...updatedFields,
    }

    pokemons[idx] = updatedPokemon;
    return updatedPokemon;
}

const deleteOne = (id) => {
    const idx = pokemons.findIndex((pokemon) => pokemon.id === parseInt(id));

    if (idx < 0) {
        throw new NotFoundError(`Pokemon with id ${id} not found`);
    }

    const [deletedPokemon] = pokemons.splice(idx, 1);
    return deletedPokemon;
}





module.exports = {
    getAll,
    getOne,
    create,
    replace,
    update,
    deleteOne,
};