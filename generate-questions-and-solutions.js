// # Automating Tasks using Javascript

// 1. Asks the user to enter number of question files to make.
// 2. Asks the user to enter number of solution files to make.
// 3. Checks if the folder has empty files and missing files.
// 4. Generate content for empty files
// 5. Generate missing files.
// 6. Generates number of files user inputs.


const fs = require('fs');
const path = require('path');
const readline = require('readline');

const questionsDir = 'questions';
const solutionsDir = 'solutions';
const allQuestionsFile = 'All-Questions.md';

// Ensure directories exist
if (!fs.existsSync(questionsDir)) fs.mkdirSync(questionsDir);
if (!fs.existsSync(solutionsDir)) fs.mkdirSync(solutionsDir);

// Set up readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt user for input and generate files
function promptUserAndGenerateFiles() {
  rl.question('How many additional question files do you want to create? ', (numQuestions) => {
    rl.question('How many additional solution files do you want to create? ', (numSolutions) => {
      const numQ = parseInt(numQuestions, 10);
      const numS = parseInt(numSolutions, 10);

      if (isNaN(numQ) || isNaN(numS)) {
        console.error('Invalid input. Please enter valid numbers.');
        rl.close();
        return;
      }

      // Generate question and solution files
      handleFileGeneration(numQ, questionsDir, 'Question', '.md', generateQuestionContent);
      handleFileGeneration(numS, solutionsDir, 'Solution', '.js', generateSolutionContent);

      // Update All-Questions.md
      updateAllQuestionsFile();

      rl.close();
    });
  });
}

// Function to handle file generation
function handleFileGeneration(num, dir, type, ext, contentGenerator) {
  let existingFiles = fs.readdirSync(dir).filter(file => file.startsWith(type));
  let existingIndexes = existingFiles.map(file => getFileIndex(file, type, ext)).sort((a, b) => a - b);
  let maxExistingIndex = existingIndexes.length > 0 ? Math.max(...existingIndexes) : 0;

  // Create files for missing indexes
  for (let index = 1; index <= maxExistingIndex; index++) {
    let filePath = path.join(dir, `${type}${index}${ext}`);
    if (!fs.existsSync(filePath) || fs.readFileSync(filePath, 'utf8').trim() === '') {
      let content = contentGenerator(index);
      fs.writeFileSync(filePath, content);
      console.log(`Created or updated ${type} file: ${filePath}`);
    }
  }

  // Create new files beyond the existing ones
  for (let i = maxExistingIndex + 1; i <= maxExistingIndex + num; i++) {
    let filePath = path.join(dir, `${type}${i}${ext}`);
    if (!fs.existsSync(filePath) || fs.readFileSync(filePath, 'utf8').trim() === '') {
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
  return `
## Question ${index}

### Description
Write the question description here for question ${index}. For example, describe a real-world problem that can be solved with JavaScript.

### Hint
Provide a hint for solving question ${index}. It could be a suggestion or guidance to help solve the problem.

### Expected Outcome
Describe the expected outcome for question ${index}. What should the solution achieve or return?

### Solution
[View Solution](./${solutionsDir}/solution${index}.js)
  `;
}

// Function to generate content for solution files
function generateSolutionContent(index) {
  return `
// Solution for Question ${index}
// Write your solution for Question ${index} here
  `;
}

// Function to update All-Questions.md
function updateAllQuestionsFile() {
  let questionsFiles = fs.readdirSync(questionsDir).filter(file => file.endsWith('.md')).sort((a, b) => {
    return parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10);
  });

  let content = questionsFiles.map(file => {
    let fileContent = fs.readFileSync(path.join(questionsDir, file), 'utf8');
    return fileContent;
  }).join('\n');

  fs.writeFileSync(allQuestionsFile, content);
  console.log(`Updated ${allQuestionsFile}`);
}

// Run the script
promptUserAndGenerateFiles();
