import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	let response = await fetch('/pages/sponsors/sponsors.json');
	let sponsors = await response.json();

	return {
		sponsors
	};
};
