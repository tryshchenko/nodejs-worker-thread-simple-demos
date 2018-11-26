const os = require('os');
os.cpus().forEach(cpu =>
    console.log(cpu.model));