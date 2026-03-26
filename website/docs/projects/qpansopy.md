---
sidebar_position: 2
---

# qpansopy

**qpansopy** is an open-source PANS-OPS software implementation based on QGIS. It automates the construction of obstacle clearance areas and protection surfaces for instrument flight procedures directly inside the QGIS GIS environment.

**[GitHub →](https://github.com/FLYGHT7/qpansopy)**

## Overview

|                  |                                                      |
| ---------------- | ---------------------------------------------------- |
| **Language**     | Python 96% / QML 4%                                  |
| **Platform**     | QGIS Plugin                                          |
| **License**      | GPL-2.0                                              |
| **Stars**        | ⭐ 4                                                 |
| **Forks**        | 🍴 3                                                 |
| **Contributors** | andures, antoniolocandro, flyght7-admin, ShaunGouvea |

:::caution Development notice
This code is in development and provided as-is — it may contain errors and you are solely responsible for using it. Any feedback is welcome.
:::

## Technical Notes

- All calculations are done in a **projected coordinate system** — no geodesic calculations intended at this stage.
- All computations are done in **meters and knots** (KTS); unit conversions are applied where needed.
- PANS-OPS has "equivalences" that are not truly equivalent (e.g. 50 ft ≠ 15 m exactly), so small differences in results are expected.
- Uses **reference layers** (rather than rubberbands) for point/click map input; this may change in the future.

## Currently Implemented

### Utilities

- VSS Tool
- Wind Spiral Tool
- Object Selection (extract points intersecting area)
- Point Filter
- Flash Feature Merge

### Conventional Approach

- VOR template
- NDB template
- Conventional Initial Template

### Precision Approach

- ILS Basic Surfaces
- ILS OAS CAT I

### PBN Approach

- PBN LNAV (straight to runway)
- PBN Intermediate (aligned)
- PBN Initial (without automatic connection to intermediate)
- PBN Missed Approach (simple straight ahead)

## Next Steps

- PBN 15 NM and 30 NM targets

## Roadmap

1. Initial focus on correct area creation
2. Ability to export tables to Word for creating reports
3. Add evaluation of straight segments
4. Add logic for evaluation of curves/offsets

## Prerequisites

- **QGIS 3.x** (LTR recommended)
- Python 3 (bundled with QGIS)

## Installation

1. Clone or download the repository from [GitHub](https://github.com/FLYGHT7/qpansopy)
2. Copy the `Q_Pansopy` folder into your QGIS plugins directory:

   **Windows:**

   ```
   C:\Users\<user>\AppData\Roaming\QGIS\QGIS3\profiles\default\python\plugins\
   ```

   **Linux / macOS:**

   ```
   ~/.local/share/QGIS/QGIS3/profiles/default/python/plugins/
   ```

3. In QGIS, go to **Plugins → Manage and Install Plugins**, find **qpansopy** and enable it.

## References

- ICAO Doc 8168 — PANS-OPS Vol II: Construction of Visual and Instrument Flight Procedures
- QGIS Documentation: https://qgis.org/en/docs/
