const express = require('express');

const app = express();

app.get('/', (request, response) => {
    // return response.send('Pow man!!!');
    return response.json({
        evento: 'Semana Metal'
    });
});

app.listen(3001);