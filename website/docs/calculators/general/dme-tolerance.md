---
sidebar_position: 4
---

# DME Tolerance

Computes the **DME fix tolerance** values used to determine the earliest and latest positions of a DME-defined fix in PANS-OPS procedure design.

**[Open in app →](https://flyght7.com/webapp/Main.html#dme)**

## Background

DME (Distance Measuring Equipment) fixes have an inherent tolerance that depends on the DME ground station error and, for airborne equipment, an additional system tolerance. ICAO Doc 8168 defines the total fix tolerance that must be accounted for when constructing the obstacle assessment surfaces associated with DME-defined fixes.

The total DME tolerance (AT) is composed of:

- **Ground equipment error** (±0.2 NM or ±2% of distance, whichever is greater per ICAO)
- **Airborne equipment error**
- **Flight technical tolerance** (pilot/FMS execution)

The fix is treated as lying anywhere within the resulting tolerance band for obstacle clearance purposes.

## Inputs

| Field                    | Unit | Description                                     |
| ------------------------ | ---- | ----------------------------------------------- |
| DME Distance             | NM   | Nominal DME distance to the fix                 |
| Ground Station Error     | NM   | DME ground station tolerance (default per ICAO) |
| Airborne Equipment Error | NM   | Airborne DME tolerance                          |

## Outputs

| Value                            | Unit | Description                                         |
| -------------------------------- | ---- | --------------------------------------------------- |
| Total Along-Track Tolerance (AT) | NM   | Total fix tolerance band (±)                        |
| Earliest Fix                     | NM   | Closest possible fix position to the DME station    |
| Latest Fix                       | NM   | Farthest possible fix position from the DME station |

## Notes

- DME tolerance is applied **along the track** of the procedure.
- The earliest/latest fix positions define the boundaries of the obstacle assessment area in the longitudinal direction.
- Reference: ICAO Doc 8168, Volume II, Part I, Section 2, Chapter 2.
