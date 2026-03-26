---
sidebar_position: 3
---

# VSS / OCS Parameters

Calculates the **Visual Segment Surface (VSS)** and **Obstacle Clearance Surface (OCS)** parameters for instrument approaches.

**[Open in app →](https://flyght7.com/webapp/Main.html#vss-ocs)**

## Background

### Visual Segment Surface (VSS)

The VSS is a surface defined in PANS-OPS to protect the visual maneuvering segment between the final approach fix and the runway threshold during a straight-in approach in Visual Meteorological Conditions (VMC). It originates at 60 m (200 ft) above the runway threshold and rises at a slope of **1:10** laterally and **2°** (approximately 1:28.6) longitudinally.

No obstacles should penetrate the VSS in order for the **minimum visibility** criteria to remain at standard values.

### Obstacle Clearance Surface (OCS)

The OCS for NPA and APV procedures defines the obstacle clearance plane that the approach profile must remain above. The OCS slope corresponds to the approach descent gradient and provides the required **Obstacle Clearance Height (OCH)** when the controlling obstacle elevation is known.

$$
OCH = H_{OBS} \times \frac{1}{OCS_{slope}} + MOC
$$

## Inputs

| Field                   | Unit    | Description                                            |
| ----------------------- | ------- | ------------------------------------------------------ |
| Threshold Elevation     | ft or m | Runway threshold elevation MSL                         |
| Glide Path Angle        | degrees | Approach descent angle                                 |
| Obstacle Elevation      | ft or m | Height of the controlling obstacle                     |
| Distance from Threshold | NM      | Horizontal distance of the obstacle from the threshold |

## Outputs

| Value                     | Unit | Description                                            |
| ------------------------- | ---- | ------------------------------------------------------ |
| OCS Elevation at obstacle | ft   | OCS height at the obstacle's distance                  |
| OCS penetration           | ft   | Positive = obstacle clears OCS; Negative = penetration |
| VSS elevation             | ft   | VSS height at the obstacle's position                  |
| VSS penetration           | ft   | Positive = obstacle clears VSS; Negative = penetration |

## Notes

- OCS penetration requires an increase in the OCH, which raises the MDA/H and reduces the effective approach minima.
- VSS penetrations require an increase in the **minimum visibility** requirement (RVR/Visibility) rather than an increase in MDA/H.
- Reference: ICAO Doc 8168, Volume I, Part I, Chapter 4 (VSS) and Volume II (OCS).
