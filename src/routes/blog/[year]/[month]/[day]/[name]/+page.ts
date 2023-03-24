import { parseDate } from '$lib/utils/post';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const post = await import(
		`../../../../${params.year}-${params.month}-${params.day}-${params.name}.md`
	);

	const { title, author, summary } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		author,
		summary,
		date: parseDate(post.metadata.date)
	};
}) satisfies PageLoad;
