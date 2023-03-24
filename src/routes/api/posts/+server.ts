import { fetchMarkdownPosts, parseDate } from '$lib/utils/post';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ url }) => {
	const allPosts = fetchMarkdownPosts();
	const sortedPosts = (await allPosts).sort((a, b) => {
		return (
			parseDate(b.meta.date).getTime() - parseDate(a.meta.date).getTime()
		);
	});

	return json(sortedPosts);
}) satisfies RequestHandler;
