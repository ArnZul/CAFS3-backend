const fs = require("fs");
const values = process.argv.slice(2);
const title = values[0];
const content = values[1];
const exists = fs.existsSync(title);
if (exists === false) {
  if (values.length === 0) {
    console.log("Provide a file name and the content.");
  } else if (values.length === 1) {
    console.log("Content needs to be provided as well");
  } else if (values.length === 2) {
    fs.writeFile(title, content, function (err) {
      if (err) throw err;
      console.log(`${title} was created successfully.`);
      console.log(
        `And "${content}" was appended to the files' content successfully as well.`
      );
    });
  }
} else if (exists == true) {
  fs.appendFile(title, `${content} \r\n`, function (err) {
    if (err) throw err;
    console.log(`The ${title} file already exists.`);
    console.log(
      `But we have added "${content}" to the file successfully as well.`
    );
  });
}
