Issues

1. Create Continuous Integration, Continuous Deployment process
2. Create automated Linting / Formatting
    a. Include Prettier and ESLint through CLI
    b. Include IDE continuous linting
3 Define project
    a Document project User Interface requirements
    b Document
4 Create scaffolding for automated unit, integration, e2e testing
    a Write jest unit tests
    b Integrate and set up basic test using Enzyme for integration testing
    c Create Cypress/Storybook UI Library
4 Complete Search
    a Create static content for searching
    b Finalize on whether to use Agolia or AWS CloudSearch
    c Integrate content from Twitter, Medium, Github, StackOverflow, and More
5 Post website to Social Media
    a Write Article on website for Medium
    b Contact Agolia PR
6 Reflect and determine how to integrate future work into website


Solutions

1 Utilized AWS CodePipeline and AWS Deployment for CI/CD
2 Integrated Prettier into IDE using Prettier on precommit check
    a Prettier is used through husky library on precommit
    b Prettier is used through IDE with command Cmd + Shift + Alt + P
3