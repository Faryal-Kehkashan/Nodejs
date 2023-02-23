const { clear } = require("console");
const fs = require("fs");

// fs.writeFile("Bio.txt", "Hi there! I am Faryal", (err) => {
//   console.log("Created");
//   console.log(err);
// });

// fs.appendFile("Bio.txt", " I am doing my majors in CS", (err) => {
//   console.log("Append successfully");
//   console.log(err);
// });

// fs.readFile("Bio.txt", "UTF-8", (err, res) => {
//   console.log(res);
// });

// fs.rename("./AsyncJS/Bio.txt", "./AsyncJS/MyBio.txt", (err) => {
//   console.log("Remane Done");
// });

fs.unlink("./AsyncJS/MyBio.txt", (err) => {
  console.log("File Deleted");
});

fs.rmdir("./AsyncJS", (err) => {
  console.log("Folder Deleted");
});
