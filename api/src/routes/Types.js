const axios = require('axios');
const { Router } = require('express');
const { Type } = require('../db');
const LINK_TYPE_POKEMONS = process.env;

const router = Router();

router.get('/', async(req, res) => {
    const api = await axios(LINK_TYPE_POKEMONS);

    for(let element of api.results) {
        const exists = await Type.findOne({ where: { name: element.name } });
        if(exists) return res.json(await Type.findAll());
        await Type.create({ name: element.name });
    }
    res.json(await Type.findAll());
})

module.exports = router;