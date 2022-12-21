let fs = require("fs");
let x = "text.txt";
let y = "text inside";
fs.writeFile(x, y, function (err) {
  if (err) throw err;
  console.log("File is create successfully.");
});
