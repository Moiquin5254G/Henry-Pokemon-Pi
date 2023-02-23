const deleteInDb = require('../Controllers/deleteInDb');

const deletePokemonHandler = async(req, res) => {
    const { id } = req.params;
    try {
        await deleteInDb(id);
        res.status(200).send('The pokemon has been successfully eliminated👌👌!!');
    } catch (error) {
        res.status(404).json({ error: `Couldn't delete the pokemon😯😯!!` });
    }
}

module.exports = deletePokemonHandler;