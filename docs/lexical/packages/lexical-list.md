# @lexical/list

## Classes

### ListItemNode

**Defined in:** `packages/lexical-list/src/LexicalListItemNode.ts:76`

**Extends:** `ElementNode`

#### Constructors

```typescript
new ListItemNode(value, checked, key?): ListItemNode
```

#### Methods

- **`afterCloneFrom(prevNode)`**: `void` - Perform state updates on the clone.
- **`append(...nodes)`**: `this`
- **`canMergeWhenEmpty()`**: `true` - Determines whether this node, when empty, can merge.
- **`collapseAtStart(selection)`**: `true`
- **`createDOM(config)`**: `HTMLElement`
- **`createParentElementNode()`**: `ElementNode`
- **`exportDOM(editor)`**: `DOMExportOutput`
- **`exportJSON()`**: `SerializedListItemNode`
- **`extractWithChild(child, selection)`**: `boolean`
- **`getChecked()`**: `undefined | boolean`
- **`getIndent()`**: `number`
- **`getValue()`**: `number`
- **`insertAfter(node, restoreSelection)`**: `LexicalNode`
- **`insertNewAfter(_, restoreSelection)`**: `ParagraphNode | ListItemNode`
- **`isParentRequired()`**: `true`
- **`remove(preserveEmptyParent?)**: `void`
- **`replace<N>(replaceWithNode, includeChildren?)**: `N`
- **`setChecked(checked?)**: `this`
- **`setIndent(indent)`**: `this`
- **`setValue(value)`**: `this`
- **`toggleChecked()`**: `this`
- **`updateDOM(prevNode, dom, config)`**: `boolean`
- **`updateFromJSON(serializedNode)`**: `this`
- **`updateListItemDOM(prevNode, dom, config)`**: `void`

---

### ListNode

**Defined in:** `packages/lexical-list/src/LexicalListNode.ts:54`

**Extends:** `ElementNode`

#### Constructors

```typescript
new ListNode(listType, start, key?): ListNode
```

#### Methods

- **`afterCloneFrom(prevNode)`**: `void`
- **`canBeEmpty()`**: `false`
- **`canIndent()`**: `false`
- **`createDOM(config, _editor?)`: `HTMLElement`
- **`exportDOM(editor)`**: `DOMExportOutput`
- **`exportJSON()`**: `SerializedListNode`
- **`extractWithChild(child)`**: `boolean`
- **`getListType()`**: `ListType`
- **`getStart()`**: `number`
- **`getTag()`**: `ListNodeTagType`
- **`setListType(type)`**: `this`
- **`setStart(start)`**: `this`
- **`splice(start, deleteCount, nodesToInsert)`**: `this`
- **`updateDOM(prevNode, dom, config)`**: `boolean`
- **`updateFromJSON(serializedNode)`**: `this`

## Interfaces

### CheckListConfig

**Defined in:** `packages/lexical-list/src/index.ts:335`

#### Properties

- **`disableTakeFocusOnClick`**: `boolean`

### ListConfig

**Defined in:** `packages/lexical-list/src/index.ts:295`

#### Properties

- **`hasStrictIndent`**: `boolean` - When true, enforces strict indentation rules.
- **`shouldPreserveNumbering`**: `boolean`

### RegisterListOptions

**Defined in:** `packages/lexical-list/src/index.ts:79`

#### Properties

- **`restoreNumbering?`**: `boolean`

## Type Aliases

### ListNodeTagType

```typescript
ListNodeTagType = "ul" | "ol"
```

### ListType

```typescript
ListType = "number" | "bullet" | "check"
```

### SerializedListItemNode

```typescript
SerializedListItemNode = Spread<{ checked: boolean | undefined; value: number; }, SerializedElementNode>
```

### SerializedListNode

```typescript
SerializedListNode = Spread<{ listType: ListType; start: number; tag: ListNodeTagType; }, SerializedElementNode>
```

## Variables

### CheckListExtension

```typescript
const CheckListExtension: LexicalExtension<CheckListConfig, "@lexical/list/CheckList", unknown, unknown>
```

Registers checklist functionality for ListNode and ListItemNode.

### INSERT_CHECK_LIST_COMMAND

```typescript
const INSERT_CHECK_LIST_COMMAND: LexicalCommand<void>
```

### INSERT_ORDERED_LIST_COMMAND

```typescript
const INSERT_ORDERED_LIST_COMMAND: LexicalCommand<void>
```

### INSERT_UNORDERED_LIST_COMMAND

```typescript
const INSERT_UNORDERED_LIST_COMMAND: LexicalCommand<void>
```

### ListExtension

```typescript
const ListExtension: LexicalExtension<ListConfig, "@lexical/list/List", NamedSignalsOutput<ListConfig>, unknown>
```

Configures ListNode, ListItemNode and registers the strict indent transform.

### REMOVE_LIST_COMMAND

```typescript
const REMOVE_LIST_COMMAND: LexicalCommand<void>
```

### UPDATE_LIST_START_COMMAND

```typescript
const UPDATE_LIST_START_COMMAND: LexicalCommand<{ listNodeKey: NodeKey; newStart: number; }>
```

## Functions

### $createListItemNode()

```typescript
$createListItemNode(checked?): ListItemNode
```

Creates a new List Item node, passing true/false will convert it to a checkbox input.

### $createListNode()

```typescript
$createListNode(listType, start): ListNode
```

Creates a ListNode of listType.

### $getListDepth()

```typescript
$getListDepth(listNode): number
```

Checks the depth of listNode from the root node.

### $handleListInsertParagraph()

```typescript
$handleListInsertParagraph(restoreNumbering): boolean
```

Attempts to insert a ParagraphNode at selection and selects the new node.

### $insertList()

```typescript
$insertList(listType): void
```

Inserts a new ListNode.

### $isListItemNode()

```typescript
$isListItemNode(node): node is ListItemNode
```

Checks to see if the node is a ListItemNode.

### $isListNode()

```typescript
$isListNode(node): node is ListNode
```

Checks to see if the node is a ListNode.

### $removeList()

```typescript
$removeList(): void
```

Searches for the nearest ancestral ListNode and removes it.

### insertList()

```typescript
insertList(editor, listType): void
```

Inserts a new ListNode. (Deprecated - use $insertList)

### registerCheckList()

```typescript
registerCheckList(editor, options?): () => void
```

Registers the checklist plugin with the editor.

### registerList()

```typescript
registerList(editor, options?): () => void
```

### registerListStrictIndentTransform()

```typescript
registerListStrictIndentTransform(editor): () => void
```

### removeList()

```typescript
removeList(editor): void
```

Searches for the nearest ancestral ListNode and removes it. (Deprecated - use $removeList)
