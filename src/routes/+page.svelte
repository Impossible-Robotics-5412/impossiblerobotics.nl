<script lang="ts">
	import PostPreview from '$lib/blog/PostPreview.svelte';
	import type { Post } from '$lib/types/post';
	import Socials from '../lib/Socials.svelte';

	export let data: { latestPosts: Post[] };
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h2>Latest posts</h2>

	{#each data.latestPosts as post}
		<PostPreview {post} />
	{/each}
</section>

<section>
	<h2 class="follow-us-online">Follow us online</h2>
	<Socials />
</section>

<style>
	.follow-us-online {
		text-align: center;
	}
</style>
