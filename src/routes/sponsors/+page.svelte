<script lang="ts">
	import { base } from '$app/paths';
	import Link from '$lib/link/Link.svelte';
	import type { Sponsor } from '$lib/sponsors/types';

	export let data: { sponsors: Sponsor[] };

	let { sponsors } = data;

	$: mainSponsors = sponsors.filter((s) => s.isMain);
	$: otherSponsors = sponsors.filter((s) => !s.isMain);
</script>

<svelte:head>
	<title>Sponsors</title>
</svelte:head>

<div class="standard-page">
	<h2>Sponsors</h2>
	<p>
		We're extremely thankful to our sponsors and we could not have reached
		our goals without them! Our sponsors help us from financial support all
		the way to cutting parts for the robot, from letting us use their 3D
		printers to allowing us to build in their workshop and much more!
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
				<Link openInNewTab href={sponsor.url}>
					<img src="{base}{sponsor.image}" alt={sponsor.name} />
				</Link>
			{/each}
		</div>
	</section>

	<h3>What we have to offer for sponsors</h3>

	<p>
		Impossible Robotics is a non-profit organization and is financially
		dependant on its sponsors. Thanks to them we have been able to make good
		progress in developing our team. For the future we are planning to
		continue to develop our team, so we can give more young adults the
		opportunity to learn about technology in a fun and engaging way. To
		continue doing this we are still looking for sponsors.
	</p>

	<img
		src="{base}/pages/sponsors/fieldlab.jpg"
		alt="The big boss driving a robot" />

	<p>
		We appreciate our sponsors very much, so to thank them we offer all of
		our sponsors a few things. We put the logos of all of our sponsors on
		our shirts, banners and the robots. All of which we take with us to
		every event we go to. Additionally, the logo's are visible on our
		website and we offer our sponsors the opportunity to put a short piece
		of text on our website about why they are sponsoring us.
	</p>

	<p>
		Our sponsors also receive our regular newsletters and if wanted we can
		come to give a presentation about our team. Of course, any additional
		requests can be discussed.
	</p>

	More information can be found in the short version of our in dutch. In the
	future, we plan on publishing a translated version as well as a
	<Link file openInNewTab href="/pages/sponsors/businessplan.pdf"
		>business plan</Link
	>, at the moment this is only available full version of our business plan.

	<p>
		If you are interested in sponsoring us or want more information, feel
		free to <Link href="/contact">contact us</Link>!
	</p>
</div>

<style>
	.main-sponsors img {
		width: 75%;
	}

	.main-sponsors img,
	.other-sponsors img {
		border-radius: 0;
	}

	.other-sponsors .content {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		align-items: center;
		gap: 2rem 1rem;
	}
</style>
