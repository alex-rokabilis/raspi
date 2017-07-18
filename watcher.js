const child_process = require('child_process');

function watch() {
    child_process.exec("git pull", (err, stdout) => {
        if (stdout.startsWith("Already up-to-date")) {
            console.log('no change');
            setTimeout(watch, 5000)

        } else {
            console.log('change')
        }
    })
}

watch();

var proc = child_process.spawn("main.js");
console.log(proc);
