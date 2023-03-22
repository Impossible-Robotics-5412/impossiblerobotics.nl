<script lang="ts">
	import { base } from '$app/paths';
	import Link from '$lib/link/Link.svelte';
</script>

<h2>Visit</h2>

<img src="{base}/pages/visit/workshop.jpeg" alt="Our workshop" />

<p>
	Before late 2021 we used to build our robots in garages, kitchens, boats; you name it, nothing was
	weird enough for us. Even though this was quite the adventure, it wasn't the most convenient way
	to build a robot. Since then we've settled into our own little workshop: a seacontainer in
	<Link href="https://sluisfabriek.nl" openInNewTab>Sluisfabriek</Link>.
</p>

<!-- FIXME: Implement map using Mapbox -->
<div class="map">Map showing Sluisfabriek</div>

<style>
	img {
		margin-bottom: 1rem;
		width: 100%;
	}

	.map {
		width: 100%;
		height: 20rem;

		margin-top: 1rem;

		border: 1px solid var(--c-accent);
		border-radius: 6px;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
