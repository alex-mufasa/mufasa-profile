# MUFASA — Apex Legends Player Profile

Cyberpunk-style responsive profile for **Alexmufasa** (PC / Steam-linked Apex account).

## Included
- Static player profile and Octane tracker snapshot transcribed from supplied screenshots
- Responsive HTML/CSS/JS site with local profile editor
- Secure Cloudflare Pages Function at `functions/api/apex.js`
- Server-side API key handling; the key is never shipped to the browser
- Live connection status panel and Apex Legends Status attribution

## Live API setup

The live endpoint uses the unofficial Apex Legends Status API:
https://apexlegendsapi.com/

For PC players, the provider requires the **EA/Origin account name linked to Steam**, not the Steam vanity name. The current lookup is configured as `Alexmufasa`; if that is not the EA/Origin ID, change `player` in `functions/api/apex.js`.

1. Register for an API key at https://apexlegendsapi.com/ (My API Access).
2. Create a Cloudflare Pages project and deploy this folder with build output directory `.` and no build command.
3. In Cloudflare Pages → Settings → Variables and Secrets, add secret `APEX_API_KEY` with your key. Do not put the key in `index.html`, GitHub, or chat.
4. Redeploy the site.
5. Open `/api/apex` on the deployed domain to confirm the API response.
6. Once a real response is available, map its exact tracker keys to the dashboard. Do not infer missing stats.

The API documentation says the current bridge version is v5, default rate limit for new keys is 5 requests/second, and PC lookup requires the linked Origin account name. The API is unofficial and has no guaranteed uptime.

## Deploy with GitHub
- Create a GitHub repository and upload this folder.
- Connect the repository to Cloudflare Pages.
- Framework preset: None; build command: empty; build output directory: `.`.
- Add `APEX_API_KEY` as a Cloudflare secret.

## Data notes
The visible stats are a manual snapshot from the player's Apex Legends Status screenshots. They are not live values until the API response is validated and mapped. Percentiles are provider-reported tracked-player percentiles, not official EA skill rankings.

