let os = require("os");
const cpu = os.cpus();
console.log(`${cpu[0].model} ${cpu.length}`);
