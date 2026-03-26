---
sidebar_position: 3
---

# Rate & Radius of Turn

Calculates the **Rate of Turn (ROT)** and **Radius of Turn (R)** for an aircraft at a given True Airspeed and bank angle.

**[Open in app →](https://flyght7.com/webapp/Main.html#rate-turn)**

## Background

Turn parameters are fundamental to PANS-OPS procedure design. Protection areas for turns (e.g., at waypoints, in holding patterns, and procedure turns) depend on the radius of turn, which is determined by TAS and bank angle (or rate of turn).

### Rate of Turn

$$
ROT = \frac{3431 \times \tan(\phi)}{TAS}
$$

Where:

- $\phi$ = bank angle in degrees
- $TAS$ = True Airspeed in knots
- Result in degrees per second (°/s)

### Radius of Turn

$$
R = \frac{TAS^2}{68629 \times \tan(\phi)}
$$

Result is in nautical miles (NM).

## Inputs

| Field      | Unit    | Description                  |
| ---------- | ------- | ---------------------------- |
| TAS        | knots   | True Airspeed                |
| Bank Angle | degrees | Bank angle used for the turn |

## Outputs

| Value          | Unit | Description           |
| -------------- | ---- | --------------------- |
| Rate of Turn   | °/s  | Angular rate of turn  |
| Radius of Turn | NM   | Geometric turn radius |

## Notes

- ICAO PANS-OPS typically uses a **25° bank angle** as the standard for protection area construction.
- For holding patterns, the bank angle is limited to the lesser of 25° or the angle that gives **3°/s** (Rate 1 turn).
- A higher TAS results in a larger radius and wider protection areas — always use the **maximum TAS** for the applicable aircraft category and altitude when designing procedures.
