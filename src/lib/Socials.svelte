<script lang="ts">
	import { base } from '$app/paths';
	import Link from '$lib/link/Link.svelte';
</script>

<div class="socials">
	<Link openInNewTab href="https://www.instagram.com/impossiblerobotics">
		<div class="social">
			<img src="{base}/pages/contact/find-us-ig.svg" alt="Instagram" />
			<span>@impossiblerobotics</span>
		</div>
	</Link>

	<Link openInNewTab href="https://www.facebook.com/impossible.robotics">
		<div class="social">
			<img src="{base}/pages/contact/find-us-fb.svg" alt="Facebook" />
			<span>@impossible.robotics</span>
		</div>
	</Link>

	<Link openInNewTab href="https://twitter.com/team5412">
		<div class="social">
			<img src="{base}/pages/contact/find-us-tw.svg" alt="Twitter" />
			<span>@team5412</span>
		</div>
	</Link>
</div>

<style>
	.socials {
		display: flex;
		width: 100%;
	}

	.social {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.social img {
		max-height: 2rem;
	}
</style>
