import type { Post } from '$lib/types/post';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	// FIXME: This could be converted into its own API
	const response = await fetch('/api/posts');
	const posts: Post[] = await response.json();
	const latestPosts = posts.slice(0, 3);

	return { latestPosts };
}) satisfies PageLoad;
