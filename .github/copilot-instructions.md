# Core Directives for GitHub Copilot

**You MUST follow all rules below for every code suggestion, refactor, or file creation:**

## 1. Code Quality & Architecture

*   **Clean & Modular**: Generate clean, modular, type-safe, and production-level code.
*   **Stack Conventions**:
    *   **Frontend**: Next.js, React, TypeScript, Tailwind CSS.
    *   **Backend**: Nest.js, TypeScript, PostgreSQL (Prisma).
*   **Structure**: Follow established project folder structure automatically.
*   **Standards**: Apply SOLID, DRY, and clean coding principles.
*   **Performance**: Ensure implementations are optimized for performance and maintainability.

## 2. Consistency & Conventions

*   **Style**: Match existing code styles, naming conventions, and patterns.
*   **Patterns**: Infer architectural patterns (Services/Modules/DTOs for Backend; Components/Hooks for Frontend).
*   **Ambiguity**: When unclear, propose the most standard and scalable structure.

## 3. Jest Unit Testing (Mandatory When Needed)

For **every function, module, hook, or service**:

*   **Generate Tests**: Recommend or automatically generate Jest unit tests.
*   **Coverage**: Include positive cases, negative cases, edge cases, and dependency mocking.
*   **Execution**: Ensure tests run successfully with `npm test`.

## 4. Error Handling & Validation

*   **Robustness**: Always implement robust error handling.
*   **Validation**: Include backend DTO validation (class-validator) and frontend defensive checks.

## 5. Security Requirements

*   **Sanitization**: Sanitize incoming data.
*   **API Security**: Enforce secure API patterns and avoid exposing secrets.
*   **Access Control**: Use safe defaults for auth handling.

## 6. Documentation Enforcement

*   **JSDoc**: Inline documentation for functions.
*   **Architecture**: Explain key decisions at the top of new modules.
*   **Usage**: Provide examples for new utilities.

---

## When Generating Tests

*   **Full Coverage**: Cover logical units completely.
*   **Snapshots**: Use for UI components if relevant.
*   **Mocking**: Use `jest.fn()` and `@nestjs/testing`.
*   **Quality**: Avoid brittle or overly specific tests.

---

## Required Output Format

When asked to generate files, produce:
1.  **Full file path**
2.  **Complete code**
3.  **Accompanying tests** (if applicable)
4.  **Notes** on usage/integration.

---

## Behavior Rules

*   **No Placeholders**: Never generate partial code.
*   **No Speculation**: Follow patterns strictly.
*   **Options**: If ambiguous, propose three clear options with pros/cons.
