const fs = require('fs');
const path = require('path');

// ------------------------------
// Kommandozeilenargumente
// ------------------------------
const [, , inputFile, outputFile] = process.argv;

if (!inputFile || !outputFile) {
  console.error('Usage: node csv2json.js <input.csv> <output.json>');
  process.exit(1);
}

// Sicherheitscheck: nicht dieselbe Datei überschreiben
if (path.resolve(inputFile) === path.resolve(outputFile)) {
  console.error('Input and output file must be different.');
  process.exit(1);
}

// ------------------------------
// Datei-Infos
// ------------------------------
const stats = fs.statSync(inputFile);

console.log('File size:', stats.size, 'bytes');
console.log('Last modified:', stats.mtime);

// ------------------------------
// Datei lesen + Zeit messen
// ------------------------------
const startRead = Date.now();
const csvContent = fs.readFileSync(inputFile, 'utf8');
const endRead = Date.now();

console.log('Time to read file:', endRead - startRead, 'ms');

// ------------------------------
// CSV verarbeiten
// ------------------------------
const lines = csvContent.trim().split('\n');
const headers = lines[0].split(',');

const data = [];

for (let i = 1; i < lines.length; i++) {
  const values = lines[i].split(',');
  const obj = {};

  for (let j = 0; j < headers.length; j++) {
    obj[headers[j]] = values[j];
  }

  data.push(obj);
}

console.log('Number of records:', data.length);

// ------------------------------
// JSON schreiben
// ------------------------------
const jsonString = JSON.stringify(data, null, 2);
fs.writeFileSync(outputFile, jsonString);

console.log('JSON written to', outputFile);
