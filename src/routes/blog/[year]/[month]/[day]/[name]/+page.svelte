<script lang="ts">
	import '$lib/styles/post.css';
	import type { PostMetadata } from '$lib/types/post';
	import { onMount, SvelteComponentTyped } from 'svelte';

	export let data: PostMetadata & {
		content: any;
		date: Date;
	};

	let contentContainer: HTMLElement | undefined;

	onMount(() => {
		if (!contentContainer) return;

		const anchors = contentContainer.getElementsByTagName('a');
		for (const a of anchors) {
			a.setAttribute('target', '_blank');
			a.setAttribute('rel', 'nofollower');
		}
	});
</script>

<svelte:head>
	{#if data.summary}
		<meta name="description" content={data.summary} />
	{/if}

	<title>Impossible Robotics: {data.title}</title>
</svelte:head>

<article>
	<div class="header">
		{#if data.title}
			<h2>{data.title}</h2>
		{/if}

		{#if data.date}
			<span class="date">{data.date.toDateString()}</span>
		{/if}
	</div>

	<div bind:this={contentContainer}>
		<svelte:component this={data.content} />
	</div>

	<div class="footer">
		{#if data.author}
			<span class="author">Written by: {data.author}</span>
		{/if}
	</div>
</article>

<style>
	.header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer {
		margin-top: 1rem;
		font-style: italic;
	}

	.date,
	.author {
		font-style: italic;
	}
</style>
