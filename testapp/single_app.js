'use strict';

console.log('I\'m starting fresh');

const r = require('rethinkdbdash')({
    servers: [{
        host: '185.205.210.59',
        port: 8081
    }],
    timeout: 5000
});

setInterval(() => {
    r.db('clustertest').table('importantData')
        .then(result => {
            console.log('read', result);
        });
}, 10000);
