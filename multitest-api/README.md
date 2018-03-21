# Multitest-API

Simple Node Implementation for Rest API supporting multiple generated tests.
Currently supported tests:
   - mutlipy (Generates and Validates Multiplication Questions).

## Development server

Run 'npm run dev' dev server. Send PostMan Requestions to validate API at `http://localhost:3000/`.

The app will automatically reload if you change any of the source files.

## Build
Run 'npm run build' to build the project.

The build artifacts will be stored in the 'dist' directory.

## Package

Run 'npm run package' to package the project as single js file which can be started with node <js file>.

The packaged artifacts will be stored in the 'build' directory.

## Running unit tests

Run 'npm run test' to execute the unit tests via mocha/chai/supertest
