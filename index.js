const fs = require("fs/promises");
fs.readFile("somefile.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
