const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    // return response.send('Pow man!!!');
    return response.json({
        evento: 'Semana Metal'
    });
});

module.exports = routes;