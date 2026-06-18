# JPostman

**JPostman** is a lightweight Java REST API testing library that helps you reuse your exported Postman collections and environments directly in Java test automation.

Instead of hardcoding REST API URLs, headers, authentication values, and request bodies in test code, JPostman lets your tests work from the same Postman assets your team already uses.

## Why JPostman?

API test code can become difficult to maintain when every test contains hardcoded URLs, headers, request bodies, tokens, and environment-specific values.

JPostman helps keep test code clean by separating:

- **API request definitions** from Postman collections
- **Environment values** from Postman environments or external secret sources
- **Execution logic** from Java test methods
- **Secure logging rules** from raw request and response output

The result is cleaner, more reusable, and more professional API test automation code.

## What JPostman Helps You Avoid

With JPostman, your Java test methods do not need to hardcode:

- REST API URLs
- Request headers
- Request bodies
- Authentication values
- Environment-specific variables
- Sensitive values in logs

Your test methods can stay focused on the test flow, while JPostman handles request loading, environment resolution, secure output, assertions, caching, and executor integration.

## Main Benefits

- Reuse exported Postman collections in Java tests
- Reuse exported Postman environments
- Keep API test code smaller and easier to read
- Reduce duplicated setup code
- Support clean fluent API method chaining
- Support native TestNG and JUnit test styles
- Cache values such as access tokens across test flows
- Protect sensitive data in request and response logs
- Run the same test logic with different REST API executors
- Load environment and secret values from external sources

## Environment and Secret Sources

JPostman can work with environment values from multiple sources, including:

- Postman environment files
- HashiCorp Vault
- GitHub variables and secrets
- Kubernetes Secrets
- Kubernetes ConfigMaps

This helps teams avoid storing sensitive or environment-specific values directly in test code.

## REST API Executor Support

JPostman is designed so the test flow can stay mostly the same while the execution layer can change.

Supported executor modules include:

| Executor | Purpose |
|---|---|
| RestAssured | Execute REST API requests using RestAssured |
| Java HttpClient | Execute requests using the Java built-in HTTP client |
| Playwright | Execute API requests through Playwright |
| Unirest | Execute requests using Unirest |

This makes it easier to compare or switch REST API frameworks without rewriting the main test methods.

## Native Test Framework Support

JPostman includes native support for:

- TestNG
- JUnit 5

The native test modules help reduce boilerplate and provide cleaner test flows with fluent API chaining, built-in assertions, secure logging, and reusable cache helpers.

## Secure API Logs

API test logs are useful for debugging, but they can expose sensitive data.

JPostman secure logging helps protect values such as:

- Passwords
- Access tokens
- Refresh tokens
- Cookies
- API keys
- Emails
- User profile data
- Bank or identity fields
- Authorization headers

You can keep logs useful for troubleshooting while masking values that should not be exposed in local output, CI/CD logs, or shared reports.

## Tutorial Series

Watch the JPostman tutorial series on YouTube:

https://www.youtube.com/@JPostmanApi

The tutorial series covers:

1. Creating a Java Maven API testing project
2. Executing REST API requests with RestAssured
3. Using access tokens and chained requests
4. Securing API logs and masking sensitive data
5. Using TestNG support and fluent API testing
6. Using fluent API with TestNG and JUnit

## Documentation and Links

- Website: https://jpostman.io
- YouTube: https://www.youtube.com/@JPostmanApi
- GitHub Repository: https://github.com/JPostman/jpostman
- GitHub Wiki: https://github.com/JPostman/jpostman/wiki
- API Documentation: https://jpostman.github.io/jpostman/

## Who Is JPostman For?

JPostman is useful for:

- QA automation engineers
- Java test automation developers
- API testing teams
- Teams already using Postman collections
- Teams that want cleaner REST API test code
- Teams that need safer test logs
- Teams that want to run similar tests across different Java REST API executors

## Summary

JPostman helps make Java API test automation cleaner, safer, and easier to maintain.

It lets you reuse Postman collections and environments, avoid hardcoded request details, protect sensitive output, and run API test flows across different Java REST API execution libraries with minimal changes to the test methods.
