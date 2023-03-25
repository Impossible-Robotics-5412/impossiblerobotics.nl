<script lang="ts">
	import '$lib/styles/main.css';
	import '$lib/styles/typography.css';
	import '$lib/styles/effects.css';

	import NavBar from '$lib/nav/NavBar.svelte';

	import { base } from '$app/paths';
</script>

<svelte:head>
	<meta name="theme-color" content="#E93F0E" />

	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
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
		border-bottom: 2px solid var(--c-accent);
	}

	h1 {
		padding: 0.5rem 0;
	}

	a {
		color: var(--c-primary);
		text-decoration: none;
		font-family: var(--f-headers);
	}

	.layout {
		max-width: 48rem;
		padding: 1rem;
		margin: auto;
	}
</style>
