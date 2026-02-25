# lexical/file

## Interfaces

### SerializedDocument

**Defined in:** `packages/lexical-file/src/fileImportExport.ts:15`

#### Properties

- **`editorState`**: `SerializedEditorState` - The serialized editorState produced by editorState.toJSON()
- **`lastSaved`**: `number` - The time this document was created in epoch milliseconds (Date.now())
- **`source`**: `string` - The source of the document, defaults to Lexical
- **`version`**: `string` - The version of Lexical that produced this document

## Functions

### editorStateFromSerializedDocument()

```typescript
editorStateFromSerializedDocument(editor, maybeStringifiedDocument): EditorState
```

**Defined in:** `packages/lexical-file/src/fileImportExport.ts:54`

Parse an EditorState from the given editor and document.

#### Parameters

- **editor**: `LexicalEditor` - The lexical editor
- **maybeStringifiedDocument**: `string | SerializedDocument` - The contents of a .lexical file (as a JSON string, or already parsed)

#### Returns

`EditorState`

---

### exportFile()

```typescript
exportFile(editor, config): void
```

**Defined in:** `packages/lexical-file/src/fileImportExport.ts:105`

Generates a .lexical file to be downloaded by the browser containing the current editor state.

#### Parameters

- **editor**: `LexicalEditor` - The lexical editor.
- **config**: `Readonly<{ fileName?: string; source?: string; }>` - Optional fileName (defaults to current date) and source (defaults to Lexical).

#### Returns

`void`

---

### importFile()

```typescript
importFile(editor): void
```

**Defined in:** `packages/lexical-file/src/fileImportExport.ts:69`

Takes a file and inputs its content into the editor state as an input field.

#### Parameters

- **editor**: `LexicalEditor` - The lexical editor.

#### Returns

`void`

---

### serializedDocumentFromEditorState()

```typescript
serializedDocumentFromEditorState(editorState, config): SerializedDocument
```

**Defined in:** `packages/lexical-file/src/fileImportExport.ts:33`

Generates a SerializedDocument from the given EditorState.

#### Parameters

- **editorState**: `EditorState` - The EditorState to serialize
- **config**: `Readonly<{ lastSaved?: number; source?: string; }>` - Optional source (defaults to Lexical) and lastSaved (defaults to current time).

#### Returns

`SerializedDocument`
