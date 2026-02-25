# @lexical/link

## Classes

### AutoLinkNode

**Defined in:** `packages/lexical-link/src/LexicalLinkNode.ts:406`

**Extends:** `LinkNode`

#### Constructors

```typescript
new AutoLinkNode(url, attributes, key?): AutoLinkNode
```

#### Methods

- **`canBeEmpty()`**: `false`
- **`canInsertTextAfter()`**: `false`
- **`canInsertTextBefore()`**: `false`
- **`createDOM(config)`**: `LinkHTMLElementType`
- **`exportJSON()`**: `SerializedAutoLinkNode`
- **`extractWithChild(child, selection, destination)`**: `boolean`
- **`getIsUnlinked()`**: `boolean`
- **`getRel()`**: `null | string`
- **`getTarget()`**: `null | string`
- **`getTitle()`**: `null | string`
- **`getURL()`**: `string`
- **`insertNewAfter(_, restoreSelection)`**: `null | ElementNode`
- **`isEmailURI()`**: `boolean`
- **`isInline()`**: `true`
- **`isWebSiteURI()`**: `boolean`
- **`sanitizeUrl(url)`**: `string`
- **`setIsUnlinked(value)`**: `this`
- **`setRel(rel)`**: `this`
- **`setTarget(target)`**: `this`
- **`setTitle(title)`**: `this`
- **`setURL(url)`**: `this`
- **`updateDOM(prevNode, anchor, config)`**: `boolean`
- **`updateFromJSON(serializedNode)`**: `this`

#### Static Methods

- **`clone(node)`**: `AutoLinkNode`
- **`getType()`**: `string`
- **`importDOM()`**: `null`
- **`importJSON(serializedNode)`**: `AutoLinkNode`

---

### LinkNode

**Defined in:** `packages/lexical-link/src/LexicalLinkNode.ts:79`

**Extends:** `ElementNode`

#### Constructors

```typescript
new LinkNode(url, attributes, key?): LinkNode
```

#### Methods

- **`canBeEmpty()`**: `false`
- **`canInsertTextAfter()`**: `false`
- **`canInsertTextBefore()`**: `false`
- **`createDOM(config)`**: `LinkHTMLElementType`
- **`exportDOM(editor)`**: `DOMExportOutput`
- **`exportJSON()`**: `SerializedLinkNode | SerializedAutoLinkNode`
- **`extractWithChild(child, selection, destination)`**: `boolean`
- **`getRel()`**: `null | string`
- **`getTarget()`**: `null | string`
- **`getTitle()`**: `null | string`
- **`getURL()`**: `string`
- **`insertNewAfter(_, restoreSelection)`**: `null | ElementNode`
- **`isEmailURI()`**: `boolean`
- **`isInline()`**: `true`
- **`isWebSiteURI()`**: `boolean`
- **`sanitizeUrl(url)`**: `string`
- **`setRel(rel)`**: `this`
- **`setTarget(target)`**: `this`
- **`setTitle(title)`**: `this`
- **`setURL(url)`**: `this`
- **`updateDOM(prevNode, anchor, config)`**: `boolean`
- **`updateFromJSON(serializedNode)`**: `this`
- **`updateLinkDOM(prevNode, anchor, config)`**: `void`

#### Static Methods

- **`clone(node)`**: `LinkNode`
- **`getType()`**: `string`
- **`importDOM()`**: `null | DOMConversionMap`
- **`importJSON(serializedNode)`**: `LinkNode`

## Interfaces

### AutoLinkConfig

**Defined in:** `packages/lexical-link/src/LexicalAutoLinkExtension.ts:509`

#### Properties

- **`changeHandlers`**: `ChangeHandler[]`
- **`excludeParents`**: `(parent) => boolean[]`
- **`matchers`**: `LinkMatcher[]`

### ClickableLinkConfig

**Defined in:** `packages/lexical-link/src/ClickableLinkExtension.ts:40`

#### Properties

- **`disabled`**: `boolean` - Disable this extension when true (default false)
- **`newTab`**: `boolean` - Open clicked links in a new tab when true (default false)

## Type Aliases

### AutoLinkAttributes

```typescript
AutoLinkAttributes = Partial<Spread<LinkAttributes, { isUnlinked?: boolean; }>>
```

### ChangeHandler

```typescript
ChangeHandler = (url, prevUrl) => void
```

### LinkAttributes

```typescript
LinkAttributes = object
```

Properties:
- **`rel?`**: `null | string`
- **`target?`**: `null | string`
- **`title?`**: `null | string`

### LinkMatcher

```typescript
LinkMatcher = (text) => LinkMatcherResult | null
```

### SerializedAutoLinkNode

```typescript
SerializedAutoLinkNode = Spread<{ isUnlinked: boolean; }, SerializedLinkNode>
```

### SerializedLinkNode

```typescript
SerializedLinkNode = Spread<{ url: string; }, Spread<LinkAttributes, SerializedElementNode>>
```

## Variables

### AutoLinkExtension

```typescript
const AutoLinkExtension: LexicalExtension<AutoLinkConfig, "@lexical/link/AutoLink", unknown, unknown>
```

An extension to automatically create AutoLinkNode from text that matches the configured matchers.

### ClickableLinkExtension

```typescript
const ClickableLinkExtension: LexicalExtension<ClickableLinkConfig, "@lexical/link/ClickableLink", NamedSignalsOutput<ClickableLinkConfig>, unknown>
```

Normally in a Lexical editor the CLICK_COMMAND on a LinkNode will cause the selection to change instead of opening a link.

### LinkExtension

```typescript
const LinkExtension: LexicalExtension<LinkConfig, "@lexical/link/Link", NamedSignalsOutput<LinkConfig>, unknown>
```

Provides LinkNode, an implementation of TOGGLE_LINK_COMMAND, and a PASTE_COMMAND listener.

### TOGGLE_LINK_COMMAND

```typescript
const TOGGLE_LINK_COMMAND: LexicalCommand<string | object & LinkAttributes | null>
```

### toggleLink

```typescript
const toggleLink: (urlOrAttributes, attributes) => void = $toggleLink
```

Generates or updates a LinkNode.

## Functions

### $createAutoLinkNode()

```typescript
$createAutoLinkNode(url, attributes?): AutoLinkNode
```

Takes a URL and creates an AutoLinkNode.

### $createLinkNode()

```typescript
$createLinkNode(url, attributes?): LinkNode
```

Takes a URL and creates a LinkNode.

### $isAutoLinkNode()

```typescript
$isAutoLinkNode(node): node is AutoLinkNode
```

Determines if node is an AutoLinkNode.

### $isLinkNode()

```typescript
$isLinkNode(node): node is LinkNode
```

Determines if node is a LinkNode.

### $toggleLink()

```typescript
$toggleLink(urlOrAttributes, attributes): void
```

Generates or updates a LinkNode.

### createLinkMatcherWithRegExp()

```typescript
createLinkMatcherWithRegExp(regExp, urlTransformer): (text) => null | { index: number; length: number; text: string; url: string; }
```

### formatUrl()

```typescript
formatUrl(url): string
```

Formats a URL string by adding appropriate protocol if missing.

### registerAutoLink()

```typescript
registerAutoLink(editor, config): () => void
```

### registerClickableLink()

```typescript
registerClickableLink(editor, stores, eventOptions): () => void
```
