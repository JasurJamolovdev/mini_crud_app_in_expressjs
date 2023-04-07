const fs = require("fs");
const path = require("path");

const read_file = (dir) => {
  return JSON.parse(
    fs.readFileSync(path.resolve(__dirname, `../database/${dir}.json`), {
      encoding: "utf-8",
    })
  );
};

const write_file = (dir, data) => {
  return fs.writeFileSync(
    path.resolve(__dirname, `../database/${dir}.json`),
    JSON.stringify(data, null, 4)
  );
};

module.exports = {
  read_file,
  write_file,
};
