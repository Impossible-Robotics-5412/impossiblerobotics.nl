import type { Post, PostMetadata } from '$lib/types/post';

export async function fetchMarkdownPosts(): Promise<Post[]> {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as {
				metadata: PostMetadata;
			};

			// Since we know for sure every post’s file path will
			// begin with /src/routes and end with .md, we can
			// safely use .slice(11, -3) to remove those characters
			// the first eleven and last three
			// and end up with the actual relative path.
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
}

export function parseDate(dateString: string) {
	const splitDate = dateString.split('/');
	return new Date(
		parseInt(splitDate[2]),
		parseInt(splitDate[1]) - 1,
		parseInt(splitDate[0])
	);
}
