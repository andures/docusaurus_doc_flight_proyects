---
sidebar_position: 1
---

# Copy Results — Standardized Behavior

All calculators that provide a **Copy Results as Table** button copy two formats to the clipboard simultaneously:

| Format                   | MIME type    | Best paste target                        |
| ------------------------ | ------------ | ---------------------------------------- |
| HTML table               | `text/html`  | Microsoft Word, Google Docs, LibreOffice |
| Tab-separated plain text | `text/plain` | Notepad, Excel, CSV editors              |

When you paste (`Ctrl+V`), the target application automatically selects the richest format it can handle.

## Labeling Guidelines

All copied tables follow these conventions:

- Use proper symbols: **Δ** (Delta), degree **°**, and HTML subscripts where applicable (e.g., T<sub>ISA</sub> on ISA-related pages).
- Keep page-specific nomenclature intact; only adjust ISA Deviation labels to `T_ISA`, `ΔISA`, `ISA + ΔISA`.
- Always include **units** in the Value column (ft, m, NM, °C, knots, etc.).

## Implementation (for contributors)

If you create a new calculator, use `ClipboardItem` with both `text/html` and `text/plain` representations:

```js
const htmlContent = `<table>...</table>`;
const textContent = `Header1\tHeader2\nValue1\tValue2`;

await navigator.clipboard.write([
  new ClipboardItem({
    "text/html": new Blob([htmlContent], { type: "text/html" }),
    "text/plain": new Blob([textContent], { type: "text/plain" }),
  }),
]);
```

This ensures consistent behavior across all calculators and the widest application compatibility.
