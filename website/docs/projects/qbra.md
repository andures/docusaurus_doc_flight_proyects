---
sidebar_position: 5
---

# qBRA

**qBRA** is a collection of QGIS tools for aviation procedures. It currently includes the **QBRA ILS/LLZ plugin**, which creates BRA (Basic Radio Aids) protection areas around a selected navaid using the same geometry calculations as the original legacy QGIS script (`ILS_LLZ_single_frequency.py`).

**[GitHub →](https://github.com/FLYGHT7/qBRA)**

## Overview

|                  |                          |
| ---------------- | ------------------------ |
| **Language**     | Python 100%              |
| **Platform**     | QGIS Plugin              |
| **License**      | GPL-2.0                  |
| **Forks**        | 🍴 2                     |
| **Contributors** | andures, antoniolocandro |

## QBRA ILS/LLZ Plugin

The ILS/LLZ plugin creates BRA polygon areas around a navaid based on the ILS/LLZ frequency and runway geometry. Results match the output of the original standalone Python script.

### Plugin Structure

```
qbra_ils_llz/
├── qbra_plugin.py           # Main plugin entry class
├── modules/
│   └── ils_llz_logic.py     # All BRA geometry calculations
├── dockwidgets/ils/
│   └── ils_llz_dockwidget.py  # Dock panel controller
├── ui/ils/
│   └── ils_llz_panel.ui     # Qt Designer UI for the panel
├── icons/
│   └── ils_llz.svg          # Plugin icon
└── metadata.txt             # QGIS plugin metadata
```

### Prerequisites

- **QGIS 3.x** (LTR recommended)
- Python 3 (bundled with QGIS)

### Installation

1. Clone or download the repository from [GitHub](https://github.com/FLYGHT7/qBRA)
2. Create a ZIP file containing the `qbra_ils_llz` folder at the root (e.g. `qbra_ils_llz.zip`)
3. In QGIS, go to **Plugins → Manage and Install Plugins**
4. Choose **Install from ZIP** and select the ZIP you created
5. Enable **QBRA ILS/LLZ** in the Plugins list

### Usage

1. Load your **navaid point layer** and **routing/runway line layer** into the QGIS project
2. Ensure the navaid layer has the expected attribute order:
   - Field 4: site elevation
   - Field 5: runway identifier
3. Select **one navaid feature** and **one routing/runway feature** on the map
4. Click the **QBRA ILS/LLZ** toolbar button or menu entry to open the dock panel
5. Choose the navaid and routing layers in the panel (they default to the active layers)
6. Press **Calculate**
7. The plugin creates a new **memory layer** with the BRA polygons and adds it to the project

## References

- ICAO Doc 8168 — PANS-OPS Vol II
- ILS/LLZ BRA geometry per ICAO procedure design standards
