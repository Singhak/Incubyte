# Incubyte String Calculator

This project implements a **String Calculator** in TypeScript. The calculator takes a string of numbers separated by delimiters and returns their sum. It supports various delimiters, including custom ones.

## Features

- Returns `0` for an empty string.
- Parses and sums numbers from a string with:
  - No delimiters.
  - Comma `,` and newline `\n` as default delimiters.
  - Custom single-character delimiters (e.g., `;`).
  - Custom multi-character delimiters (e.g., `***`).
  - Multiple custom delimiters (e.g., `[*][;]`).
- Handles edge cases like invalid input.
- Handle single `*` sperator as multiply

## Project Structure

 ├── .gitignore\
 ├── jest.config.js \
 ├── main.ts \
 ├── package.json \
 ├── test.ts \
 ├── tsconfig.json


- **`main.ts`**: Contains the implementation of the `add` function.
- **`test.ts`**: Contains unit tests for the `add` function.
- **`jest.config.js`**: Configuration for running tests with Jest.
- **`tsconfig.json`**: TypeScript configuration file.
- **`package.json`**: Project dependencies and scripts.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Incubyte

2. Install dependencies
npm install

- Usage:\
Run the TypeScript compiler to build the project: **`npm run start`**

- Testing:\
Run the unit tests using Jest: **`npm test`**

- Example\
Here are some examples of how the add function works:

```javascript
import { add } from './main';
console.log(add("")); // Output: 0
console.log(add("123")); // Output: 123
console.log(add("1,2,3")); // Output: 6
console.log(add("1,2\n3")); // Output: 6
console.log(add("\\[;]\n1;2;3")); // Output: 6
console.log(add("\\[***]\n1***2***3")); // Output: 6
console.log(add("\\[*][;]\n1*2;3")); // Output: 6