const {BadRequestError} = require("../utils/errors");

const validatePokemonData = (req, _res, next) => {
    const {name, type, abilities} = req.body;

    if (!name || !type || !abilities) {
        throw new BadRequestError("Missing name, type or abilities");
    }

    if (typeof abilities == 'string') {
        req.body.abilities = [abilities]
    } else if (!Array.isArray(abilities)) {
        throw new BadRequestError("Abilities must be an array");
    } else if (abilities.some) {

    }

    next();
};

module.exports = validatePokemonData;