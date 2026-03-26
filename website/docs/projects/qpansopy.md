---
sidebar_position: 2
---

# qpansopy

**qpansopy** is a QGIS plugin that integrates PANS-OPS instrument flight procedure design calculations directly inside the QGIS desktop GIS environment.

**[GitHub →](https://github.com/FLYGHT7/qpansopy)**

## Overview

|              |             |
| ------------ | ----------- |
| **Language** | Python      |
| **Platform** | QGIS Plugin |
| **License**  | GPL-2.0     |
| **Stars**    | ⭐ 4        |
| **Forks**    | 🍴 3        |

## What It Does

qpansopy leverages QGIS's geospatial engine to draw and calculate procedure design surfaces according to ICAO Doc 8168 PANS-OPS directly on georeferenced maps. This allows designers to visualize obstacle clearance areas, turning areas, and other critical geometry alongside real terrain and airspace data.

## Key Capabilities

- **PANS-OPS surface generation** — draw OCA/H surfaces and protection areas on the map
- **Georeferenced output** — all geometry is in real-world coordinates (WGS-84)
- **Integration with QGIS layers** — overlay results on aeronautical charts, terrain DEMs, and obstacle databases
- **Python scripting** — automation and batch processing via QGIS Python console

## Prerequisites

- **QGIS 3.x** (LTR recommended)
- Python 3 (bundled with QGIS)

## Installation

1. Download or clone the repository from [GitHub](https://github.com/FLYGHT7/qpansopy)
2. Copy the plugin folder into your QGIS plugins directory:  
   `~/.local/share/QGIS/QGIS3/profiles/default/python/plugins/`
3. Enable it in **QGIS → Plugins → Manage and Install Plugins**

:::note Full Documentation Coming Soon
Detailed usage guides, configuration options, and workflow examples will be published here. Contributions welcome — see the [GitHub repository](https://github.com/FLYGHT7/qpansopy).
:::

## References

- ICAO Doc 8168 — PANS-OPS Volume II
- QGIS Documentation: https://qgis.org/en/docs/
