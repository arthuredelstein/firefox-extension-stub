const {classes: Cc, interfaces: Ci, results: Cr,
       Constructor: CC, utils: Cu } = Components;

Cu.import("resource://gre/modules/Services.jsm");

let startup = (data, reason) => {
  Services.console.logStringMessage(`startup(${data}, ${reason})`);
}

let shutdown = (data, reason) => {
  Services.console.logStringMessage(`shutdown(${data}, ${reason})`);
}

let install = (data, reason) => {
  Services.console.logStringMessage(`install(${data}, ${reason})`);
}

let uninstall = (data, reason) => {
  Services.console.logStringMessage(`uninstall(${data}, ${reason})`);
}

