# Soroban Frontend with Skeleton UI & SvelteKit

A Frontend Template (hopefully) suitable for use with `soroban contract init --frontend-template`, powered by [Svelte](https://svelte.dev/) and [SvelteKit](https://kit.svelte.dev/).

## Getting Started

1. `cp .env.example .env`
2. `npm install`
3. `npm run dev`

## How it Works

If you look in [package.json](./package.json), you'll see that the `start` & `dev` scripts first run the [`initialize.js`](./initialize.js) script. This script loops over all contracts in `contracts/*` and, for each:

1. Deploys to a local network (_needs to be running with `docker run` or `soroban network start`_)
2. Saves contract IDs to `.soroban/contract-ids`
3. Generates TS bindings for each into the `packages` folder, which is set up as an [npm workspace](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#workspaces)
4. Create a file in `src/contracts` that imports the contract client and initializes it for the `local` network.

You're now ready to import these initialized contract clients in your [Svelte components](https://svelte.dev/docs/svelte-components). You can see an example of this in [`./src/routes/+page.ts`](./src/routes/+page.ts).
