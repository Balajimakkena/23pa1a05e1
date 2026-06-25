const Log = require("./logger");

async function main() {

  await Log(
    "backend",
    "info",
    "handler",
    "application started"
  );

  await Log(
    "backend",
    "warn",
    "handler",
    "invalid input detected"
  );

  await Log(
    "backend",
    "error",
    "handler",
    "received string, expected bool"
  );

}

main();