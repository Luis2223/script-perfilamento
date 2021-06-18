const yargs = require('yargs');
const SacAtendimentoServices = require('./src/services/sac_atendimento.services');

const argv = yargs.options({
    u: { type: "string", alias: "username", demandOption: true },
    p: { type: "string", alias: "password", demandOption: true },
    h: { type: "string", alias: "hostname", demandOption: true },
    d: { type: "string", alias: "database", demandOption: true },
    s: { type: "string", alias: "dialect", demandOption: true },
    t: { type: "string", alias: "table", demandOption: true },
    v: { type: "array", alias: "values", demandOption: true },
}).argv;

console.log(`is running...`);

const atendimento = new SacAtendimentoServices(argv);
atendimento.insertValues(argv.table, argv.values)
.then(res => console.log('success'))
.catch(err => console.error(err))


