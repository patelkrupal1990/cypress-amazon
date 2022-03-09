# Cypress test and Best Practices

###### A better way to start with cypress...

1. Getting Started
   1. [Writing and Organizing Tests](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Folder-Structure) - Cypress Directory structure setup
   1. [Writing your first app](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html)
1. [Best Practice Guide](https://docs.cypress.io/guides/references/best-practices.html) - Best Practices
   
# Environment Setup:
    ## git clone https://github.com/patelkrupal1990/cypress-amazon or if zip provided download and extract that.
    ## cd cypress-cypress/
    ## npm install
# Running test cases:
    ## cd cypress-amazon/
    ## To run all the specs - npm run cy:run
    
# Directory Structure:
    ## **Integration**
        - It contains directory having specs in it.
        - Each directory has it own specs depending upon test cases.
    ## **Fixtures**
        - It contains fixture files from which data is fetched.
    ## **Support**
        - tasks (Directory contains the specific task performed for each specs. Make sure you write methods related to them in corresponding file.)

# More things can be added as per the project requirement.
