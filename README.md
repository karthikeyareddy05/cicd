# CI/CD Tutorial Repository

This repository demonstrates Continuous Integration and Continuous Deployment (CI/CD) concepts using GitHub Actions.

## What is CI/CD?

**Continuous Integration (CI)** is a development practice where developers frequently merge code changes into a central repository, after which automated builds and tests are run.

**Continuous Deployment (CD)** is a software development practice where code changes are automatically deployed to production after passing through the CI pipeline.

## Repository Contents

This repository contains:
- A simple Node.js application
- GitHub Actions workflows for automated testing and deployment
- Example configurations for CI/CD pipelines

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/karthikeyareddy05/cicd.git

# Navigate to the project directory
cd cicd

# Install dependencies
npm install
```

### Running the Application

```bash
# Run the application
npm start

# Run tests
npm test
```

## CI/CD Pipeline

This repository uses GitHub Actions for CI/CD automation. The workflow includes:

1. **Build**: Install dependencies and build the application
2. **Test**: Run automated tests
3. **Deploy**: Deploy to production (on main branch)

## Video Tutorial

For a detailed walkthrough of CI/CD concepts and this repository, watch this tutorial:
https://youtu.be/43NlIRp5xOs?si=D4wlTpgywoH6lAiq

## Contributing

Feel free to fork this repository and submit pull requests. All contributions are welcome!

## License

This project is open source and available under the MIT License.
