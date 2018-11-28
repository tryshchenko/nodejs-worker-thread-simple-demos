const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const { chunk } = require('lodash');

// Generate the array of random numbers
const data = Array(1000000)
    .fill(1000)
    .map(x => x * Math.random());
const WORKERS_COUNT = 70;
const chunks = chunk(data, Math.floor(data.length / WORKERS_COUNT));

const tryQuit = (results, WORKERS_COUNT) => {
    if (results.length === WORKERS_COUNT) {
        console.log(`Finished at: ${Date.now() - start} ms. With ${WORKERS_COUNT} thread(s).`);
    }
}
// All operations above should not be counted into the benchmark
const start = Date.now();

const meaninglessIteration = (el) => {
    for (let i = 0; i < 10000; i++) {
        el+= i;
    }
    return el;
}

if (isMainThread) {
    const results = [];
    const workers = [];
    for (let i = WORKERS_COUNT - 1; i !== 0; i--) {
        const worker = new Worker(__filename, {workerData: chunks[i]});
        worker.on('message', data => {
            results.push(data);
            tryQuit(results, WORKERS_COUNT);
        });
        workers.push(worker);
    }
    results.push(chunks[0].map(meaninglessIteration));
    tryQuit(results, WORKERS_COUNT);
} else {
    parentPort.postMessage(workerData.map(meaninglessIteration));
}