const fs = require("fs");
const bioData = {
  name: "Faryal",
  age: "22 ",
  profession: "Software-Engineer",
};

const JSONbioData = JSON.stringify(bioData);
console.log(bioData);
console.log(JSONbioData);

fs.writeFile("json1.json", JSONbioData, (err) => {
  console.log("Created new file with JSON inside it.");
});

fs.readFile("json1.json", "utf-8", (err, data) => {
  const objbioData = JSON.parse(data);
  console.log(objbioData);
});
