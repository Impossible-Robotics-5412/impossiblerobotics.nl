<script lang="ts">
	import '$lib/styles/main.css';
	import '$lib/styles/typography.css';
	import '$lib/styles/effects.css';

	import NavBar from '$lib/nav/NavBar.svelte';

	import { base } from '$app/paths';
</script>

<svelte:head>
	<meta name="theme-color" content="#E93F0E" />
</svelte:head>

<div class="layout">
	<header>
		<h1><a href="{base}/">Impossible Robotics</a></h1>
		<NavBar />
	</header>

	<slot />
</div>

<style>
	header {
		border-bottom: var(--b-dashed);
	}

	h1 {
		padding: 0.5rem 0;
	}

	a {
		color: var(--c-primary);
		text-decoration: none;
		font-family: var(--f-sans-serif);
	}

	.layout {
		max-width: 34rem;
		padding: 1rem;
		margin: auto;
	}
</style>
