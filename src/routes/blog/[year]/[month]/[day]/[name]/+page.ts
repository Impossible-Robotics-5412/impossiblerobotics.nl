import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const post = await import(
		`../../../../${params.year}-${params.month}-${params.day}-${params.name}.md`
	);

	const { title, author, summary } = post.metadata;
	const content = post.default;

	const splitDate = post.metadata.date.split('/');
	const date = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);

	return {
		content,
		title,
		author,
		summary,
		date
	};
}) satisfies PageLoad;
