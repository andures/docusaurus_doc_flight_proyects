---
sidebar_position: 6
---

# Bearings & Angles

Converts and computes **magnetic/true bearings**, **angular differences**, and **reciprocal bearings** used in procedure design.

**[Open in app →](https://flyght7.com/webapp/Main.html#bearings)**

## Background

Procedure design requires frequent conversion between true and magnetic bearings, calculation of angular differences between tracks, and determination of reciprocal courses. This tool centralizes those common trigonometric operations.

## Features

- **True ↔ Magnetic conversion** using a user-supplied magnetic variation value
- **Reciprocal bearing** calculation (bearing ± 180°, normalized to 0–360°)
- **Angular difference** between two bearings (shortest angular path, signed or unsigned)
- **Bearing normalization** (wrap any angle to 0–360° range)

## Inputs

| Field              | Unit    | Description                                                 |
| ------------------ | ------- | ----------------------------------------------------------- |
| Bearing            | degrees | Input bearing (true or magnetic)                            |
| Magnetic Variation | degrees | Local magnetic variation (East = positive, West = negative) |
| Second Bearing     | degrees | Second bearing for difference calculation (optional)        |

## Outputs

| Value              | Unit    | Description                                |
| ------------------ | ------- | ------------------------------------------ |
| Converted Bearing  | degrees | True or magnetic equivalent                |
| Reciprocal         | degrees | Opposite bearing (180° offset)             |
| Angular Difference | degrees | Shortest angular path between two bearings |

## Notes

- All bearings are expressed in degrees from 000° to 360° (360° = north).
- Magnetic variation values for specific aerodromes are published in national AIP supplements and the ICAO magnetic variation charts.
- PANS-OPS procedure tracks are normally defined in **magnetic** bearing in the published procedure, but designed in **true** bearing using local variation.
