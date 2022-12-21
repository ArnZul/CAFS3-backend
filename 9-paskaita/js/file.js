const fs = require("fs");
const arg = process.argv.slice(2);
const title = arg[0];
const content = arg[1];
fs.writeFile(title, content, function (err) {
  if (err) throw err;
  console.log("File is create successfully.");
});
