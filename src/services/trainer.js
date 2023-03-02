const createDebug = require("debug");
const { BadRequestError, NotFoundError } = require("../utils/errors");
const trainer = require("../models/trainers.js");
const debug = createDebug("app:trainerService");

const getAll = () => {
    return trainer;
};

const getOne = (id) => {
    const trainers = trainer.find((trainer) => trainer.id === parseInt(id));

    if (!trainers) {
        throw new NotFoundError(`Trainer with id ${id} not found`);
    }

    return trainer;
};

const create = (firstName, lastName, badges, roles) => {
    const id = parseInt(trainer[trainer.length - 1].id, 10) + 1;

    if (!firstName || !lastName || !badges || !roles) {
        throw new BadRequestError("Name, lastname and badges and roles required");
    }
    const newTrainer = {
        id: id.toString(),
        firstName,
        lastName,
        badges,
        roles,
    }
    trainer.push(newTrainer);
    return newTrainer;
};

const replace = (id, firstName, lastName, badges, roles) => {
    const updatedTrainer = {
        id,
        firstName,
        lastName,
        badges,
        roles,
    };

    if (!firstName || !lastName || !badges || !roles) {
        throw new BadRequestError("Name, lastname and badges and roles required");
    }

    const idx = trainer.findIndex((trainer) => trainer.id === parseInt(id, 10));

    if (idx < 0) {
        throw new NotFoundError(`Trainer with id ${id} not found`);
    }

    trainer[idx] = updatedTrainer;
    return updatedTrainer;

};

const update = (id, updatedFields) => {
    const idx = trainer.findIndex((trainer) => trainer.id === parseInt(id, 10));

    if (idx < 0) {
        throw new NotFoundError(`Trainer with id ${id} not found`);
    }

    const updatedTrainer = {
        ...trainer[idx],
        ...updatedFields,
    };

    trainer[idx] = updatedTrainer;
    return updatedTrainer;
}

const deleteOne = (id) => {
    const idx = trainer.findIndex((trainer) => trainer.id === parseInt(id, 10));

    if (idx < 0) {
        throw new NotFoundError(`Trainer with id ${id} not found`);
    }

    const [deletedTrainer] = trainer.splice(idx, 1);
    return deletedTrainer;
}





module.exports = {
    getAll,
    getOne,
    create,
    replace,
    update,
    deleteOne
}