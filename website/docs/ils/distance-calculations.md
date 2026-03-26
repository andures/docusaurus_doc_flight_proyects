---
sidebar_position: 2
---

# ILS Distance Calculations

Computes the **distance from the threshold** at which the ILS glide path passes through a given height or altitude constraint.

**[Open in app →](https://flyght7.com/webapp/Main.html#ils-distance)**

## Background

This is the inverse of the [ILS Height Calculations](./height-calculations) tool. Given a published altitude constraint (e.g., a segment minimum altitude or an obstacle height), this calculator finds the distance from the threshold at which the ILS glide path reaches that height. This is useful for:

- Determining where stepdown fixes should be located
- Verifying that published fixes are correctly positioned on the glide path
- Checking where the glide path crosses an obstacle's elevation

## Distance Formula

For a given height $H$ above the threshold and glide path angle $GPA$:

$$
d_{NM} = \frac{H}{6076.12 \times \tan(GPA)}
$$

## Inputs

| Field                           | Unit    | Description                                                                     |
| ------------------------------- | ------- | ------------------------------------------------------------------------------- |
| Threshold Elevation             | ft or m | Runway threshold elevation above MSL                                            |
| Threshold Crossing Height (TCH) | ft      | Height of the glide path at the threshold                                       |
| Glide Path Angle (GPA)          | degrees | ILS glide path angle                                                            |
| Target Height / Altitude        | ft      | The altitude (MSL) or height (above threshold) at which to compute the distance |

## Outputs

| Value                   | Unit | Description                                                       |
| ----------------------- | ---- | ----------------------------------------------------------------- |
| Distance from Threshold | NM   | Distance at which the glide path passes through the target height |
| Distance from Threshold | km   | Same in kilometers                                                |

## Notes

- This tool is the **inverse** of the ILS Height Calculations tool — use them together to cross-check approach profile geometry.
- A 3° glide path descends approximately **318 ft per NM** (approximately 52 ft per 0.1 NM or about 5.2 ft per second at 120 kt groundspeed).
- Reference: ICAO Doc 8168, Volume I, Part III.
