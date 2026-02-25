# Contributing

## Development Setup

This is a monorepo using pnpm and Turborepo.

```bash
# Install dependencies
pnpm install

# Run development
pnpm dev

# Build
pnpm build

# Run tests
pnpm test
```

## Code Quality

- **No commits accepted with lint errors, type errors, or failing tests**
- Run `pnpm lint`, `pnpm typecheck`, and `pnpm test` before pushing

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: bug fix
docs: documentation
style: code style change
refactor: code refactoring
test: test update
chore: maintenance
```

## Pull Requests

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all checks pass
5. Submit a PR

## Issues

- Use the issue templates
- Be detailed in your description
- Include reproduction steps for bugs
