const trainerService = require('../services/trainer.js');

const getAll = (_, res) => {
    const trainer = trainerService.getAll();
    res.json({trainer});
};

const getOne = (req, res) => {
    const { id } = req.params;
    const trainer = trainerService.getOne(id);
    res.json({trainer});
};

const create = (req, res) => {
    const { firstName, lastName, badges, roles } = req.body;
    const trainer = trainerService.create(firstName, lastName, badges, roles);
    res.status(201).json({trainer});
};

const replace = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, badges, roles } = req.body;

    const updatedTrainer = trainerService.replace(id, firstName, lastName, badges, roles);
    res.json({updatedTrainer});
};

const update = (req, res) => {
    const { id } = req.params;
    const updatedFields = req.body;

    const updatedTrainer = trainerService.update(id, updatedFields);

    res.json({updatedTrainer});
};

const deleteOne = (req, res) => {
    const { id } = req.params;
    const trainer = trainerService.deleteOne(id);
    res.json({trainer});
};

module.exports = {
    getAll,
    getOne,
    create,
    replace,
    update,
    deleteOne,
};