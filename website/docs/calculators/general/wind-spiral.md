---
sidebar_position: 5
---

# Wind Spiral Calculator

Calculates the **wind spiral** area used in PANS-OPS to account for maximum wind effect during a procedure turn or base turn.

**[Open in app →](https://flyght7.com/webapp/Main.html#wind-spiral)**

## Background

When an aircraft performs a procedure turn or base turn, wind can carry it beyond the nominal turning area. PANS-OPS accounts for this by constructing a **wind spiral** — a spiral arc representing the maximum displacement caused by the worst-case wind acting throughout the turn.

The wind spiral is used to define the outer boundary of the protected area for procedure turns (e.g., 45°/180° procedure turn, base turn).

The radius of the wind spiral at any point is proportional to:

- The wind speed
- The time spent in the turn (which depends on TAS and bank angle)

## Inputs

| Field      | Unit    | Description                                                   |
| ---------- | ------- | ------------------------------------------------------------- |
| TAS        | knots   | True Airspeed during the procedure turn                       |
| Bank Angle | degrees | Bank angle used (typically 25°)                               |
| Wind Speed | knots   | Maximum wind to consider (from ICAO tables or local met data) |
| Turn Angle | degrees | Total turn angle to compute                                   |

## Outputs

| Value                    | Unit | Description                                                     |
| ------------------------ | ---- | --------------------------------------------------------------- |
| Wind Spiral Displacement | NM   | Maximum lateral displacement due to wind at each turn increment |
| Spiral Points            | NM   | Coordinates of the spiral boundary                              |

## Notes

- ICAO PANS-OPS defines wind values by altitude band and procedure type.
- The wind spiral is always applied to the outer boundary of a procedure turn protection area.
- Reference: ICAO Doc 8168, Volume II, Part I, Section 4.
