# @lexical/hashtag

## Classes

### HashtagNode

**Defined in:** `packages/lexical-hashtag/src/LexicalHashtagNode.ts:15`

**Extends:** `TextNode`

#### Methods

- **`canInsertTextBefore()`**: `boolean` - Returns true if text can be inserted before the node.
- **`createDOM(config)`**: `HTMLElement` - Called during the reconciliation process.
- **`isTextEntity()`**: `true` - Returns true if the node is to be treated as a "text entity".

#### Static Methods

- **`clone(node)`**: `HashtagNode` - Clones this node.
- **`getType()`**: `string` - Returns the string type of this node.
- **`importJSON(serializedNode)`**: `HashtagNode` - Controls deserialization from JSON.

## Interfaces

### HashtagConfig

**Defined in:** `packages/lexical-hashtag/src/LexicalHashtagExtension.ts:284`

#### Properties

- **`getHashtagMatch()`**: `(text) => null | { end: number; start: number; }` - The matching function used by the extension.

## Variables

### HashtagExtension

```typescript
const HashtagExtension: LexicalExtension<HashtagConfig, "@lexical/hashtag/Hashtag", unknown, unknown>
```

Add #hashtag support to the editor

## Functions

### $createHashtagNode()

```typescript
$createHashtagNode(text): HashtagNode
```

**Defined in:** `packages/lexical-hashtag/src/LexicalHashtagNode.ts:48`

Generates a HashtagNode, which is a string following the format of a # followed by some text, eg. #lexical.

#### Parameters

- **text**: `string = ''` - The text used inside the HashtagNode.

#### Returns

`HashtagNode` - The HashtagNode with the embedded text.

---

### $isHashtagNode()

```typescript
$isHashtagNode(node): node is HashtagNode
```

**Defined in:** `packages/lexical-hashtag/src/LexicalHashtagNode.ts:57`

Determines if node is a HashtagNode.

#### Parameters

- **node**: `undefined | null | LexicalNode` - The node to be checked.

#### Returns

`node is HashtagNode` - true if node is a HashtagNode, false otherwise.
