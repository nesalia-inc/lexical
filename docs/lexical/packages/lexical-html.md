# @lexical/html

## Functions

### $generateHtmlFromNodes()

```typescript
$generateHtmlFromNodes(editor, selection?): string
```

**Defined in:** `packages/lexical-html/src/index.ts:69`

#### Parameters

- **editor**: `LexicalEditor`
- **selection?**: `null | BaseSelection`

#### Returns

`string`

---

### $generateNodesFromDOM()

```typescript
$generateNodesFromDOM(editor, dom): LexicalNode[]
```

**Defined in:** `packages/lexical-html/src/index.ts:42`

How you parse your html string to get a document is left up to you. In the browser you can use the native DOMParser API to generate a document (see clipboard.ts), but to use in a headless environment you can use JSDom or an equivalent library and pass in the document here.

#### Parameters

- **editor**: `LexicalEditor`
- **dom**: `Document | ParentNode`

#### Returns

`LexicalNode[]`
