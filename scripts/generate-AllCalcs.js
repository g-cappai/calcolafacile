const fs = require("fs");

const prettier = require("prettier");

const generateAllCalcs = () => {
  const calcFileNames = fs.readdirSync("content/calcs");

  const calcList = calcFileNames.map((cName) => cName.replace(/.js/, ""));

  const importSection = calcList.map(
    (component) => `import ${component} from "./calcs/${component}";`
  );

  const objectSection = `const AllCalcs = { ${calcList.join(", ")} };


  export default AllCalcs;`;

  const pageText = `${importSection.join(" ")} 
  
  ${objectSection}`;

  const prettified = prettier.format(pageText, { parser: "babel" });

  fs.writeFileSync(__dirname + "/../content/all-calcs.js", prettified, "utf8");
};

module.exports = generateAllCalcs;
