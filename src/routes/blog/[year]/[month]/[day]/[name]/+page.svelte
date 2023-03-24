<script lang="ts">
	import '$lib/styles/post.css';
	import { onMount } from 'svelte';

	export let data: {
		title: string;
		date: Date;
		summary: string;
		author: string;
		content: any;
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
</svelte:head>

<article>
	<div class="header">
		<h2>{data.title}</h2>
		<span class="date">{data.date.toDateString()}</span>
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
