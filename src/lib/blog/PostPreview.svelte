<script lang="ts">
	import type { Post } from '$lib/types/post';
	import { parseDate } from '$lib/utils/post';

	export let post: Post;
</script>

<section>
	<div class="header">
		<h3>{post.meta.title}</h3>
		<span class="date">{parseDate(post.meta.date).toDateString()}</span>
	</div>
	<div class="content">
		{#if post.meta.thumbnail}
			<img src={post.meta.thumbnail} alt="Thumbnail" />
		{/if}
		<div class="vertical-content">
			<p>{post.meta.summary}</p>
			<a href={post.path}>Read more</a>
		</div>
	</div>
</section>

<style>
	section {
		border-bottom: var(--b-dashed);
		border-bottom-width: 1px;

		margin-bottom: 1rem;
		padding-bottom: 1rem;

		width: 100%;
	}

	section:last-child {
		border-bottom: none;
		margin-bottom: 0;
		padding-bottom: 0;
	}

	h3 {
		padding: 0 0 1rem 0;
	}

	img {
		width: 8rem;
		aspect-ratio: 1 / 1;
		object-fit: cover;
	}

	.header {
		display: flex;
		justify-content: space-between;
	}

	.date {
		font-style: italic;
		margin-left: 1rem;
		text-align: right;
	}

	.content {
		display: flex;
		gap: 1rem;

		width: 100%;
	}

	.vertical-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		width: 100%;
	}

	a {
		text-align: right;
	}
</style>
