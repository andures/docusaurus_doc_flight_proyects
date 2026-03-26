---
sidebar_position: 4
---

# qOLS

**qOLS** is a QGIS plugin for computing and visualizing Obstacle Limitation Surfaces (OLS) as defined in ICAO Annex 14 for airport planning and obstacle assessment.

**[GitHub →](https://github.com/FLYGHT7/qOLS)**

## Overview

|              |             |
| ------------ | ----------- |
| **Language** | Python      |
| **Platform** | QGIS Plugin |
| **License**  | GPL-2.0     |
| **Stars**    | ⭐ 8        |
| **Forks**    | 🍴 3        |

## What It Does

qOLS generates the geometric surfaces that define allowable obstacle heights around an aerodrome — the Conical Surface, Inner Horizontal Surface, Approach Surfaces, Transitional Surfaces, and others specified in ICAO Annex 14. By computing these surfaces as 3D geometry inside QGIS, designers and planners can immediately assess whether existing or proposed structures penetrate protected airspace.

## Key Capabilities

- **ICAO Annex 14 surfaces** — full set of OLS surfaces for instrument and non-instrument runways
- **3D geometry** — surfaces computed as 3D vector layers with correct elevations
- **Obstacle assessment** — intersect obstacle points or buildings against surfaces to find penetrations
- **Runway code letter/number support** — automatically adjusts surface dimensions per runway category
- **Export** — shapefile, GeoPackage, or KML for sharing with aviation authorities

## Surfaces Computed

| Surface               | Description                                          |
| --------------------- | ---------------------------------------------------- |
| Conical Surface       | Slopes upward from the inner horizontal surface      |
| Inner Horizontal      | Horizontal surface at 45 m above aerodrome elevation |
| Approach Surface      | Slopes upward from the runway threshold              |
| Transitional Surface  | Connects approach and inner horizontal surfaces      |
| Takeoff/Climb Surface | Protects the departure flight path                   |
| Outer Horizontal      | (Optional) Extended horizontal protection zone       |

## Prerequisites

- **QGIS 3.x** (LTR recommended)
- Python 3 (bundled with QGIS)

## Installation

1. Clone or download from [GitHub](https://github.com/FLYGHT7/qOLS)
2. Place plugin folder in:  
   `~/.local/share/QGIS/QGIS3/profiles/default/python/plugins/`
3. Enable via **QGIS → Plugins → Manage and Install Plugins**

:::note Full Documentation Coming Soon
Step-by-step surface generation guides, input parameter reference, and obstacle assessment workflows will be published here. See the [GitHub repository](https://github.com/FLYGHT7/qOLS).
:::

## References

- ICAO Annex 14 — Aerodromes Volume I: Aerodrome Design and Operations
- QGIS Documentation: https://qgis.org/en/docs/
