# node-ts-skeleton

![GitHub Action](https://github.com/JuniorCarrillo/node-ts-skeleton/actions/workflows/test-coverage.yml/badge.svg?branch=master)
![Branches](./.badges/coverage-branches.svg)
![Functions](./.badges/coverage-functions.svg)
![Lines](./.badges/coverage-lines.svg)
![Statements](./.badges/coverage-statements.svg)
![Jest coverage](./.badges/coverage-jest%20coverage.svg)
[![GitHub release](https://img.shields.io/github/release/carrilloapps/node-ts-skeleton?include_prereleases=&sort=semver&color=blue)](https://github.com/carrilloapps/node-ts-skeleton/releases/)
[![License](https://img.shields.io/badge/License-BSD_3--Clause_License-blue)](#license)
[![issues - nodets](https://img.shields.io/github/issues/carrilloapps/node-ts-skeleton)](https://github.com/carrilloapps/node-ts-skeleton/issues)

## Description

This is a skeleton project intended for projects requiring the use of Node with TypeScript. The solution is initially designed for general use but provides capabilities for unit testing, HTTP, and environment variable management.

### Libraries

This project primarily includes the following libraries and elements.

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository**  
   Clone the project repository from GitHub:

   ```bash
   git clone https://github.com/carrilloapps/node-ts-skeleton.git
   cd nodets
    ```
   
2. **Install the dependencies**
   Install the project dependencies using npm:

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure environment variables**
   Create a `.env` file in the `src/app` directory and define your environment variables as needed. Here's an example:

   ```bash
    PORT=3000
    NODE_ENV=development
   ```

4. **Start the project**
   Start the project using the following command:

   ```bash
   npm start
   ```
 
5. **Run the tests**
   To run the unit tests, use:

   ```bash
   npm test
   ```

   This command will run all the tests in the `src/test` directory.

6. **Build the project**
    To build the project, use:
    
    ```bash
    npm run build
    ```
    
    This command will compile the TypeScript code into JavaScript and place it in the `dist` directory.

## Usage

Examples of how to use the project after installation. For example:

``` bash
npm start
```

This command will start the project with the default configuration:

- [Jest](https://jestjs.io/) for unit testing
- [DotEnv](https://www.npmjs.com/package/dotenv) for environment variables
- [Winston](https://www.npmjs.com/package/winston) for logging
- [TypeScript](https://www.typescriptlang.org/) for code compilation
- [Eslint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io/) for code formatting
- [Husky](https://www.npmjs.com/package/husky) for pre-commit hooks
- [Nodemon](https://nodemon.io/) for development server
- [TS-node](https://www.npmjs.com/package/ts-node) for TypeScript Node integration

## Examples

The `main.ts` file is the main application file where an example of how to use the project can be seen.

``` typescript
import logger from "app/app.logger";
import env from "app/app.env";

export function main() {
  logger.info("Starting app...");
  logger.info(`Environment: ${env.apiKey}`);
}

main();
```

## Contribution

Guide to contribute to the project. For example:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push your changes (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

Released under [BSD 3-Clause License](/LICENSE) by [@carrilloapps](https://github.com/carrilloapps).
