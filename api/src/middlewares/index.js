const validate = (req, res, next) => {
    let { name, types } = req.body;

    if(!name) return res.status(404).json({ error: 'Missing Name🤨🤨!!' });
    if(!types) return res.status(404).json({ error: 'Missing Types🤨🤨!!' });
    next();
}

module.exports = validate;