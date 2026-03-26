---
sidebar_position: 4
---

# qOLS

**qOLS** is a QGIS plugin for creating Obstacle Limitation Surfaces (OLS) in accordance with ICAO Annex 14 Volume I (Aerodromes) and Volume II (Heliports).

**[GitHub →](https://github.com/FLYGHT7/qOLS)**

## Overview

|                  |                                         |
| ---------------- | --------------------------------------- |
| **Language**     | Python 100%                             |
| **Platform**     | QGIS Plugin                             |
| **License**      | GPL-2.0                                 |
| **Stars**        | ⭐ 8                                    |
| **Forks**        | 🍴 3                                    |
| **Contributors** | andures, flyght7-admin, antoniolocandro |

:::caution Development notice
This code is in development and provided as-is — it may contain errors and you are solely responsible for using it. Any feedback is welcome.
:::

## Key Constraints

- **Single runway systems only** at the moment. For multiple runways, each must be analyzed separately.
- **Projected Coordinate Systems** are used — no geodetic calculations (simplifies the geometry).

## Surfaces Generated

| Surface               | Description                                          |
| --------------------- | ---------------------------------------------------- |
| Conical Surface       | Slopes upward from the inner horizontal surface      |
| Inner Horizontal      | Horizontal surface at 45 m above aerodrome elevation |
| Approach Surface      | Slopes upward from the runway threshold              |
| Transitional Surface  | Connects approach and inner horizontal surfaces      |
| Takeoff/Climb Surface | Protects the departure flight path                   |
| Outer Horizontal      | Extended horizontal protection zone                  |

## Roadmap

1. ✅ Initial areas hard-coded — current OLS
2. Areas designed based on runway classification, values read from file per ICAO standard
3. Configuration of areas for local conditions
4. Obstacle evaluation
5. Automatic report creation
6. Future OLS concept introduced
7. FAA surfaces _(maybe)_

## Prerequisites

- **QGIS 3.x** (LTR recommended)
- Python 3 (bundled with QGIS)

## Installation

The plugin is not yet in the official QGIS plugin repository. Install via the **Releases** page on GitHub:

1. Go to [github.com/FLYGHT7/qOLS/releases](https://github.com/FLYGHT7/qOLS/releases) and download the latest `.zip`
2. In QGIS, open **Plugins → Manage and Install Plugins**
3. Go to the **Install from ZIP** tab, select the downloaded file, and click **Install Plugin**
4. Make sure the **Plugins toolbar is enabled** in QGIS (View → Toolbars → Plugins Toolbar)

## References

- ICAO Annex 14 — Aerodromes Volume I: Aerodrome Design and Operations
- ICAO Annex 14 — Volume II: Heliports
- QGIS Documentation: https://qgis.org/en/docs/
