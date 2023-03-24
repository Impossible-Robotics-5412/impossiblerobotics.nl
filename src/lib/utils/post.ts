import type { Post, PostMetadata } from '$lib/types/post';

export async function fetchMarkdownPosts(): Promise<Post[]> {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as {
				metadata: PostMetadata;
			};

			const regex =
				/^\/src\/routes\/blog\/(\d{4})-(\d{2})-(\d{2})-(.*)\.md$/;
			const replacement = '/blog/$1/$2/$3/$4';

			return {
				meta: metadata,
				path: path.replace(regex, replacement)
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
