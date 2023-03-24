<script lang="ts">
	import { base } from '$app/paths';
	import Link from '$lib/link/Link.svelte';
	import SluisfabriekMap from '$lib/map/SluisfabriekMap.svelte';
</script>

<svelte:head>
	<title>Visit</title>
</svelte:head>

<h2>Visit</h2>

<div class="map">
	<SluisfabriekMap />
</div>

<p>
	Before late 2021 we used to build our robots in garages, kitchens, boats;
	you name it, nothing was weird enough for us. Even though this was quite the
	adventure, it wasn't the most convenient way to build a robot. Since then
	we've settled into our own little workshop: a seacontainer in
	<Link href="https://sluisfabriek.nl" openInNewTab>De Sluisfabriek</Link>,
	<i>Tussendiepen 6, 9206AD Drachten</i>.
</p>

<img src="{base}/pages/visit/workshop.jpeg" alt="Our workshop" />

<style>
	img {
		width: 100%;
	}

	.map {
		width: 100%;
		height: 20rem;
		border: 1px solid var(--c-accent);
		border-radius: 6px;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	p {
		margin: 1rem 0;
	}
</style>
