const https = require("https");
const currentVersion = require("../package.json").version;

const myArgs = process.argv.slice(2);
const org = myArgs[0];
const repo = myArgs[1];
const branch = myArgs[2] || "master";
const versionURL = `https://raw.githubusercontent.com/${org}/${repo}/${branch}/package.json`;

function splitVersion(version) {
  return version.split(".").map((v) => parseInt(v, 10));
}

function throwProcessError(message) {
  console.error("Error: " + message);
  process.exit(1);
}

function compareVersions(orig, curr) {
  const version1 = splitVersion(orig);
  const version2 = splitVersion(curr);

  for (let i = 0; i < version1.length; i += 1) {
    if (version1[i] > version2[i]) {
      throwProcessError(
        `Current version (${curr}) is smaller than the version of ${branch} (${orig}).`
      );
    } else if (version2[i] > version1[i]) {
      console.log(`Version checked: ${curr}`);
      return true;
    }
  }

  throwProcessError(
    `Current version (${curr}) is the same as ${branch} (${orig}).`
  );
}

https
  .get(versionURL, (resp) => {
    let data = "";

    resp.on("data", (chunk) => {
      data += chunk;
    });

    resp.on("end", () => {
      const masterVersion = JSON.parse(data).version;
      compareVersions(masterVersion, currentVersion);
    });
  })
  .on("error", (err) => {
    throwProcessError(err.message);
  });
