export interface Post {
	meta: PostMetadata;
	path: string;
}

export interface PostMetadata {
	title: string?;
	author: string?;
	summary: string?;
	thumbnail: string?;
	date: string;
}
