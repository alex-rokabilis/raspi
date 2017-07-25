const child_process = require("child_process");

child_process.spawn("./binaries/temp_monitor")
    .on('data', (data) => console.log(data.toSting()))