<script lang="ts">
	import PostPreview from '../../lib/blog/PostPreview.svelte';
	import type { Post } from '$lib/types/post';

	export let data: { posts: Post[] };
</script>

<svelte:head>
	<title>Impossible Robotics: Blog</title>
</svelte:head>

<h2>Blog</h2>

<div>
	{#each data.posts as post}
		<PostPreview {post} />
	{/each}
</div>
