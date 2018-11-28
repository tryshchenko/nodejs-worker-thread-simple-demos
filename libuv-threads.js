const crypto = require('crypto');
const options = ['pass', 'salt', 100000, 512, 'sha512'];
const log = (label, started) => () => 
    console.log(label, Date.now() - started);

const started = Date.now();
crypto.pbkdf2(...options, log(1, started));