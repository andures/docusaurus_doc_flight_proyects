---
sidebar_position: 2
---

# NPA SOC Calculation

Computes the **Start of Climb (SOC)** point for the missed approach segment of a **Non-Precision Approach (NPA)**.

**[Open in app →](https://flyght7.com/webapp/Main.html#npa-soc)**

## Background

In a non-precision approach, the aircraft descends to the **Minimum Descent Altitude/Height (MDA/H)** and then either lands or executes a missed approach. The **Start of Climb (SOC)** point marks where the missed approach climb begins — it is located at the MDA/H after accounting for the visual segment (the distance traveled at MDA/H before beginning the climb).

The SOC position determines where the **Missed Approach Obstacle Assessment Surface (OAS/OCS)** begins its upward slope.

### SOC Calculation

The SOC distance from the Missed Approach Point (MAPt) is:

$$
D_{SOC} = \frac{(MDA - OCH_{MAP})}{PDG/100 \times 6076.12} + D_{visual}
$$

Where:

- $MDA$ = Minimum Descent Altitude (ft MSL)
- $OCH_{MAP}$ = Obstacle Clearance Height at the MAPt
- $PDG$ = Procedure Design Gradient (%)
- $D_{visual}$ = distance flown at MDA before climb initiation

## Inputs

| Field               | Unit    | Description                                                   |
| ------------------- | ------- | ------------------------------------------------------------- |
| MDA/H               | ft      | Minimum Descent Altitude or Height                            |
| OCH at MAPt         | ft      | Obstacle Clearance Height at the Missed Approach Point        |
| Missed Approach PDG | %       | Climb gradient for the missed approach (minimum 2.5%)         |
| TAS at MDA          | knots   | TAS used for the level segment calculation                    |
| Reaction Time       | seconds | Time from MAPt to start of climb (typically 6 s for PANS-OPS) |

## Outputs

| Value                   | Unit | Description                                    |
| ----------------------- | ---- | ---------------------------------------------- |
| Visual Segment Distance | NM   | Horizontal distance traveled at MDA before SOC |
| SOC Distance from MAPt  | NM   | Distance of the Start of Climb from MAPt       |
| SOC Elevation           | ft   | Height/altitude at the SOC                     |

## Notes

- The default PANS-OPS reaction time after the MAPt is **6 seconds** (level flight at MDA/H).
- The minimum missed approach gradient is **2.5%**; higher gradients may be required if obstacles penetrate the OAS.
- Reference: ICAO Doc 8168, Volume I, Part II, Chapter 5.
