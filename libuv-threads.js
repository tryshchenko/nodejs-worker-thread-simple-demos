const crypto = require('crypto');
const options = ['pass', 'salt', 100000, 512, 'sha512'];
const log = (label, started) => () => 
    console.log(label, Date.now() - started);

const started = Date.now();
crypto.pbkdf2(...options, log(1, started));
crypto.pbkdf2(...options, log(2, started));
crypto.pbkdf2(...options, log(3, started));
crypto.pbkdf2(...options, log(4, started));
crypto.pbkdf2(...options, log(5, started));
crypto.pbkdf2(...options, log(6, started));
crypto.pbkdf2(...options, log(7, started));
crypto.pbkdf2(...options, log(8, started));
crypto.pbkdf2(...options, log(9, started));
