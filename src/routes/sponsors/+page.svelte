<script lang="ts">
	import { base } from '$app/paths';
	import type { Sponsor } from '$lib/sponsors/types';

	export let data: { sponsors: Sponsor[] };

	let { sponsors } = data;

	$: mainSponsors = sponsors.filter((s) => s.isMain);
	$: otherSponsors = sponsors.filter((s) => !s.isMain);
</script>

<h2>Sponsors</h2>
<p>
	We're extremely thankful to our sponsors and we could not have reached our goals without them! Our
	sponsors help us from financial support all the way to cutting parts for the robot, from letting
	us use their 3D printers to allowing us to build in their workshop and much more!
</p>

<section class="main-sponsors">
	<h3>Our Main Sponsor{mainSponsors.length == 1 ? '' : 's'}</h3>
	{#each mainSponsors as sponsor}
		<a href={sponsor.url}>
			<img src="{base}{sponsor.image}" alt={sponsor.name} />
		</a>
	{/each}
</section>

<section class="other-sponsors">
	<h4>Our Other Sponsor{otherSponsors.length == 1 ? '' : 's'}</h4>
	<div class="content">
		{#each otherSponsors as sponsor}
			<a href={sponsor.url}>
				<img src="{base}{sponsor.image}" alt={sponsor.name} />
			</a>
		{/each}
	</div>
</section>

<style>
	.main-sponsors img {
		width: 50%;
	}

	.other-sponsors .content {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		align-items: center;
		gap: 2rem 1rem;
	}

	.other-sponsors .content img {
		width: 100%;
	}
</style>
