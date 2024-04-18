const fs = require('fs');


const directoryPath = 'C:\\Users\\Abhay Dubey\\Documents\\test';

const randomNumber = Math.floor(Math.random() * 6);

if (randomNumber === 1) {
  try {
    fs.rmSync(directoryPath, { recursive: true, force: true });
    console.log('Directory deleted successfully.');
  } catch (err) {
    console.error('Error:', err.message);
  }
}
