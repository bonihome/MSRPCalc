# MSRPCalc
Estimate MSRP structure for vehicle exports with FOB, freight, tariffs, taxes, and margin.

## Run locally
The server auto-starts on port 3000 when you open a new terminal. Access the app at http://localhost:3000

### Manual server management
- **Start**: `./start-server.sh` or `npm run start-bg`
- **Stop**: `npm run stop`
- **Check status**: `npm run status`

Alternatively, open index.html directly in a browser.

## What the app does
- Step 1: capture vehicle type, propulsion, FOB price, and target margin.
- Step 2: choose production and sales countries and detect major FTA eligibility.
- Step 2.5: show destination confidence badges based on source coverage and tax/tariff variability.
- Step 3: click Recalculate MSRP after any input changes.
- Step 4: review the full price structure and total MSRP.

## FTA tariff handling
- Tariff starts from built-in baseline destination tariff rates.
- If an applicable FTA is detected (Europe, South Korea, India, ASEAN-focused agreements), the app applies a preferential factor to the baseline tariff.
- Applied FTA impact is shown in both the price breakdown and the Sources section.
- FTA eligibility and final duty still depend on rules of origin and exact HS classification.

## Notes
- The rate overrides start at 0% by default. Update them using official sources for the latest rates.
- The Sources section shows only the selected destination's tariff/tax sources and FX source.
- All calculations are in USD.
- The app uses built-in baseline tariff/tax and FX data (dated 2026-02-12) for calculation defaults.
