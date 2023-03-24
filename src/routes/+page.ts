import type { Post } from '$lib/types/post';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/posts?amount=3');
	const latestPosts: Post[] = await response.json();

	return { latestPosts };
}) satisfies PageLoad;
