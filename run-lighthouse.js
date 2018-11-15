const { auditSite, auditSiteLoop } = require("./lighthouse");

const url = process.argv[2] || "https://google.com";

const flags = process.argv.slice(3);

if (flags.includes("--loop")) {
  auditSiteLoop(url);
} else {
  auditSite(url);
}
