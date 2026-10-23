# Test-Devin

This is a Playwright testing framework for study purposes.

## Setup

```bash
npm install
npx playwright install
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in headed mode
npm run test:headed

# Run tests with UI mode
npm run test:ui

# Debug tests
npm run test:debug

# Run tests on specific browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# View test report
npm run test:report
```

## Project Structure

```
tests/
├── pages/          # Page Object Models
├── fixtures/       # Custom test fixtures
├── utils/          # Helper functions
└── *.spec.ts       # Test files
```
