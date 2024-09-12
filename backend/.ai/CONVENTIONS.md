# Project Conventions

## File Structure

project-root/
├── index.js
├── .env
├── .gitignore
└── package.json

## Naming Conventions

- Use `camelCase` for variables, functions, and method names
- Use `PascalCase` for class names
- Use `UPPERCASE_SNAKE_CASE` for constants

## Functions

- Use arrow functions for callbacks and anonymous functions
- Use async/await for asynchronous operations

## Error Handling

- Use try/catch blocks for error handling

## Environment Variables

- Store sensitive information in `.env` file
- Access using `process.env.VARIABLE_NAME`

## Comments

- Use JSDoc for function documentation
- Add inline comments for complex logic

## Git Commits

- Use present tense, imperative style: "Add feature" not "Added feature"
- Keep commits small and focused

## Dependency Management

- Use `npm` for package management
- Keep dependencies up-to-date
- Avoid global dependencies

## Logging

- Use a logging library like Winston
- Log important events and errors

## Security

- Validate and sanitize all user inputs
- Use HTTPS in production
- Implement proper authentication and authorization
