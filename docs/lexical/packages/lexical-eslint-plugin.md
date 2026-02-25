# @lexical/eslint-plugin

## Type Aliases

### RulesOfLexicalOptions

```typescript
RulesOfLexicalOptions<> = Partial<BaseMatchers<ToMatcher | ToMatcher[]>>
```

**Defined in:** `packages/lexical-eslint-plugin/src/rules/rules-of-lexical.js:87`

## Variables

### plugin

```typescript
const plugin: object
```

**Defined in:** `packages/lexical-eslint-plugin/src/LexicalEslintPlugin.js:21`

### configs

**Type:**
- **`configs.all`**: `{ plugins: string[]; rules: { "@lexical/rules-of-lexical": string = 'warn' } }`
- **`configs.recommended`**: `object` (extends all)

### meta

- **`meta.name`**: `string`
- **`meta.version`**: `string`

### rules

- **`rules.rules-of-lexical`**: `RuleModule = rulesOfLexical`
