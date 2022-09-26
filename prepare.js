const fs = require("fs-extra");

const srcDir = `./_items`;
const destDir = `./items`;

// Create a fresh start for the run
const _prepare = () => {
  try {
    fs.copySync(srcDir, destDir, { overwrite: true | false });
    fs.removeSync("./tasks/");
    fs.mkdirSync("./tasks/");
    console.log("prepared success!");
  } catch (err) {
    console.error(err);
  }
};

exports.prepare = _prepare;
