# @lexical/clipboard

## Interfaces

### LexicalClipboardData

**Defined in:** `packages/lexical-clipboard/src/clipboard.ts:37`

#### Properties

- **`text/plain`**: `string`
- **`text/html`?**: `string`
- **`application/x-lexical-editor`?**: `string`

## Functions

### $generateJSONFromSelectedNodes()

```typescript
$generateJSONFromSelectedNodes<SerializedNode>(editor, selection): object
```

**Defined in:** `packages/lexical-clipboard/src/clipboard.ts:375`

Gets the Lexical JSON of the nodes inside the provided Selection.

#### Type Parameters

- `SerializedNode` extends `BaseSerializedNode`

#### Parameters

- **editor**: `LexicalEditor` - LexicalEditor to get the JSON content from.
- **selection**: `null | BaseSelection` - Selection to get the JSON content from.

#### Returns

```typescript
{
  namespace: string;
  nodes: SerializedNode[];
}
```

---

### $generateNodesFromSerializedNodes()

```typescript
$generateNodesFromSerializedNodes(serializedNodes): LexicalNode[]
```

**Defined in:** `packages/lexical-clipboard/src/clipboard.ts:405`

This method takes an array of objects conforming to the BaseSerializedNode interface and returns an Array containing instances of the corresponding LexicalNode classes registered on the editor. Normally, you'd get an Array of BaseSerialized nodes from $generateJSONFromSelectedNodes.

#### Parameters

- **serializedNodes**: `BaseSerializedNode[]` - an Array of objects conforming to the BaseSerializedNode interface.

#### Returns

`LexicalNode[]` - an Array of Lexical Node objects.

---

### $getClipboardDataFromSelection()

```typescript
$getClipboardDataFromSelection(selection): LexicalClipboardData
```

**Defined in:** `packages/lexical-clipboard/src/clipboard.ts:548`

Serialize the content of the current selection to strings in text/plain, text/html, and application/x-lexical-editor (Lexical JSON) formats (as available).

#### Parameters

- **selection**: `null | BaseSelection` - the selection to serialize (defaults to $getSelection())

#### Returns

`LexicalClipboardData`

---

### $getHtmlContent()

```typescript
$getHtmlContent(editor, selection): string
```

**Defined in:** `packages/lexical-clipboard/src/clipboard.ts:53`

Returns the currently selected Lexical content as an HTML string, relying on the logic defined in the exportDOM methods on the LexicalNode classes. Note that this will not return the HTML content of the entire editor (unless all the content is included in the current selection).

#### Parameters

- **editor**: `LexicalEditor` - LexicalEditor instance to get HTML content from
- **selection**: `null | BaseSelection` - The selection to use (default is $getSelection())

#### Returns

`string` - a string of HTML content

---

### $getLexicalContent()

```typescript
$getLexicalContent(editor, selection): null | string
```

**Defined in:** `packages/lexical-clipboard/src/clipboard.ts:82`

Returns the currently selected Lexical content as a JSON string, relying on the logic defined in the exportJSON methods on the LexicalNode classes. Note that this will not return the JSON content of the entire editor (unless all the content is included in the current selection).

#### Parameters

- **editor**: `LexicalEditor` - LexicalEditor instance to get the JSON content from
- **selection**: `null | BaseSelection` - The selection to use (default is $getSelection())

#### Returns

`null | string`

---

### $insertDataTransferForPlainText()

```typescript
$insertDataTransferForPlainText(dataTransfer, selection): void
```

**Defined in:** `packages/lexical-clipboard/src/clipboard.ts:109`

Attempts to insert content of the mime-types text/plain or text/uri-list from the provided DataTransfer object into the editor at the provided selection. text/uri-list is only used if text/plain is not also provided.

#### Parameters

- **dataTransfer**: `DataTransfer` - an object conforming to the [DataTransfer interface](https://html.spec.whatwg.org/multipage/dnd.html#the-datatransfer-interface)
- **selection**: `BaseSelection` - the selection to use as the insertion point for the content in the DataTransfer object

#### Returns

`void`

---

### $insertDataTransferForRichText()

```typescript
$insertDataTransferForRichText(dataTransfer, selection, editor): void
```

**Defined in:** `packages/lexical-clipboard/src/clipboard.ts:130`

Attempts to insert content of the mime-types application/x-lexical-editor, text/html, text/plain, or text/uri-list (in descending order of priority) from the provided DataTransfer object into the editor at the provided selection.

#### Parameters

- **dataTransfer**: `DataTransfer` - an object conforming to the [DataTransfer interface](https://html.spec.whatwg.org/multipage/dnd.html#the-datatransfer-interface)
- **selection**: `BaseSelection` - the selection to use as the insertion point for the content in the DataTransfer object
- **editor**: `LexicalEditor` - the LexicalEditor the content is being inserted into.

#### Returns

`void`

---

### $insertGeneratedNodes()

```typescript
$insertGeneratedNodes(editor, nodes, selection): void
```

**Defined in:** `packages/lexical-clipboard/src/clipboard.ts:223`

Inserts Lexical nodes into the editor using different strategies depending on some simple selection-based heuristics. If you're looking for a generic way to to insert nodes into the editor at a specific selection point, you probably want lexical.$insertNodes

#### Parameters

- **editor**: `LexicalEditor` - LexicalEditor instance to insert the nodes into.
- **nodes**: `LexicalNode[]` - The nodes to insert.
- **selection**: `BaseSelection` - The selection to insert the nodes into.

#### Returns

`void`

---

### copyToClipboard()

```typescript
copyToClipboard(editor, event, data?): Promise<boolean>
```

**Defined in:** `packages/lexical-clipboard/src/clipboard.ts:434`

Copies the content of the current selection to the clipboard in text/plain, text/html, and application/x-lexical-editor (Lexical JSON) formats.

#### Parameters

- **editor**: `LexicalEditor` - the LexicalEditor instance to copy content from
- **event**: `null | ClipboardEvent` - the native browser ClipboardEvent to add the content to.
- **data?**: `LexicalClipboardData`

#### Returns

`Promise<boolean>`

---

### setLexicalClipboardDataTransfer()

```typescript
setLexicalClipboardDataTransfer(clipboardData, data): void
```

**Defined in:** `packages/lexical-clipboard/src/clipboard.ts:573`

Call setData on the given clipboardData for each MIME type present in the given data (from $getClipboardDataFromSelection)

#### Parameters

- **clipboardData**: `DataTransfer` - the event.clipboardData to populate from data
- **data**: `LexicalClipboardData` - The lexical data

#### Returns

`void`
