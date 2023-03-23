<script>
	import '$lib/styles/post.css';

	/** @type {string} */
	export let title;
	/** @type {string} */
	export let author;
	/** @type {string} */
	export let summary;
	/** @type {string} */
	export let date;
</script>

<svelte:head>
	{#if summary}
		<meta name="description" content={summary} />
	{/if}
</svelte:head>

<article>
	<div class="header">
		<h2>{title}</h2>
		<span class="date">{new Date(date).toDateString()}</span>
	</div>

	<slot />

	<div class="footer">
		{#if author}
			<span class="author">Written by: {author}</span>
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

	.date {
		font-style: italic;
	}

	.footer {
		margin-top: 1rem;
		font-style: italic;
	}
</style>
