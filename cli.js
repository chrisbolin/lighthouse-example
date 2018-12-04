const minimist = require("minimist");

const { auditSite, auditSiteLoop } = require("./lighthouse");

const run = flags => {
  const url = flags._[2];

  if (!url) {
    throw new Error("First argument must be a URL.");
  }
  
  const runs = flags.runs;
  if (runs) {
    if (typeof runs !== "number") {
      throw new Error("--runs must be a number");
    }
    auditSiteLoop(url, { runs });
  } else {
    auditSite(url);
  }
};

run(minimist(process.argv));

