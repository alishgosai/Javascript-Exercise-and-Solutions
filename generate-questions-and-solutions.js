const fs = require("fs");
const path = require("path");
const readline = require("readline");

const questionsDir = "questions";
const solutionsDir = "solutions";
const readmeFile = "README.md"; // Changed from All-Questions.md to README.md

// Ensure directories exist
if (!fs.existsSync(questionsDir)) fs.mkdirSync(questionsDir);
if (!fs.existsSync(solutionsDir)) fs.mkdirSync(solutionsDir);

// Set up readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to prompt user for input and generate files
function promptUserAndGenerateFiles() {
  rl.question(
    "How many additional question files do you want to create? ",
    (numQuestions) => {
      rl.question(
        "How many additional solution files do you want to create? ",
        (numSolutions) => {
          const numQ = parseInt(numQuestions, 10);
          const numS = parseInt(numSolutions, 10);

          if (isNaN(numQ) || isNaN(numS)) {
            console.error("Invalid input. Please enter valid numbers.");
            rl.close();
            return;
          }

          // Generate question and solution files
          handleFileGeneration(
            numQ,
            questionsDir,
            "Question",
            ".md",
            generateQuestionContent
          );
          handleFileGeneration(
            numS,
            solutionsDir,
            "Solution",
            ".js",
            generateSolutionContent
          );

          // Update README.md
          updateReadmeFile();

          rl.close();
        }
      );
    }
  );
}

// Function to handle file generation
function handleFileGeneration(num, dir, type, ext, contentGenerator) {
  let existingFiles = fs
    .readdirSync(dir)
    .filter((file) => file.startsWith(type));
  let existingIndexes = existingFiles
    .map((file) => getFileIndex(file, type, ext))
    .sort((a, b) => a - b);
  let maxExistingIndex =
    existingIndexes.length > 0 ? Math.max(...existingIndexes) : 0;

  // Create files for missing indexes
  for (let index = 1; index <= maxExistingIndex; index++) {
    let filePath = path.join(dir, `${type}${index}${ext}`);
    if (
      !fs.existsSync(filePath) ||
      fs.readFileSync(filePath, "utf8").trim() === ""
    ) {
      let content = contentGenerator(index);
      fs.writeFileSync(filePath, content);
      console.log(`Created or updated ${type} file: ${filePath}`);
    }
  }

  // Create new files beyond the existing ones
  for (let i = maxExistingIndex + 1; i <= maxExistingIndex + num; i++) {
    let filePath = path.join(dir, `${type}${i}${ext}`);
    if (
      !fs.existsSync(filePath) ||
      fs.readFileSync(filePath, "utf8").trim() === ""
    ) {
      let content = contentGenerator(i);
      fs.writeFileSync(filePath, content);
      console.log(`Created ${type} file: ${filePath}`);
    }
  }
}

// Function to extract the index from a filename
function getFileIndex(filename, type, ext) {
  let match = filename.match(new RegExp(`${type}(\\d+)${ext}`));
  return match ? parseInt(match[1], 10) : 1;
}

// Function to generate content for question files
function generateQuestionContent(index) {
  const repoLink =
    "https://github.com/alishgosai/Javascript-Exercise-and-Solutions";

  return `


## Question ${index}
<a href="${repoLink}/blob/master/${questionsDir}/Question${index}.md" target="_blank">
  <img src="https://img.shields.io/badge/Question-${index}-purple?style=for-the-badge&logoSize=60" alt="Question ${index}">
</a>

### **Description**
Question for day${index} comming soon.
Contributers to provide a clear and concise description of the task for **Question ${index}**.

### **Hint**
![Hint](https://img.shields.io/badge/Hint:-blue)
Provide useful hints or tips for solving **Question ${index}**.

### **Expected Output**
![Output](https://img.shields.io/badge/Output:-blue)
Describe the expected result or output of **Question ${index}**.

### <a href="${repoLink}/blob/master/${solutionsDir}/Solution${index}.js" target="_blank">
  <img src="https://img.shields.io/badge/Solution-1f8e00?style=for-the-badge&logo=solution&logoColor=white" alt="Solution">
</a>

<a href="${repoLink}/blob/master/${solutionsDir}/Solution${index}.js" target="_blank">View Solution</a>

---

`;
}

// Function to generate content for solution files
function generateSolutionContent(index) {
  return `
// Solution for Question ${index}

  `;
}

// Function to update README.md
function updateReadmeFile() {
  let questionsFiles = fs
    .readdirSync(questionsDir)
    .filter((file) => file.endsWith(".md"))
    .sort((a, b) => {
      return parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10);
    });

  let content = questionsFiles
    .map((file) => {
      let fileContent = fs.readFileSync(path.join(questionsDir, file), "utf8");
      return fileContent;
    })
    .join("\n");

  fs.writeFileSync(readmeFile, content);
  console.log(`Updated ${readmeFile}`);
}

// Run the script
promptUserAndGenerateFiles();
