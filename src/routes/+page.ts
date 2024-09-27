import type { PageLoad } from './$types';
import helloWorld from '$lib/contracts/hello_world';

export const load = (async () => {
    const { result } = await helloWorld.hello({ to: 'Silly Goose' });
    console.log('Got smart contract result:', result)

    return {
        greeting: result,
    };
}) satisfies PageLoad;
