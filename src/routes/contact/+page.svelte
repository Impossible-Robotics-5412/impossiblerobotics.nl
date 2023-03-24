<script lang="ts">
	import { base } from '$app/paths';
	import Link from '$lib/link/Link.svelte';

	interface ContactInformation {
		phone: string;
		email: string;
	}

	let contactInformationShown = false;
	const showContactInformation = () => (contactInformationShown = true);

	function getContactInformation(): ContactInformation {
		const phonePart1 = '+31653';
		const phonePart2 = '819167';
		const emailPart1 = 'h-tronics.h';
		const emailPart2 = 'wa@planet.nl';

		return {
			phone: phonePart1 + phonePart2,
			email: emailPart1 + emailPart2
		};
	}
</script>

<!-- FIXME: Add title -->

<h2>Contact</h2>

<p>
	If you're interested in joining our team or have another question for us, feel
	free to contact us via mail or phone.
</p>

<br />

<h3>Henk van der Wal (Coach)</h3>
{#if contactInformationShown}
	<div>
		<span>
			<b>Phone</b>
			<a href="tel:{getContactInformation().phone}"
				>{getContactInformation().phone}</a>
		</span>
	</div>

	<div>
		<span>
			<b>E-Mail</b>
			<a href="mailto:{getContactInformation().email}"
				>{getContactInformation().email}</a>
		</span>
	</div>
{:else}
	<button on:click={showContactInformation}
		>Click to show contact information</button>
{/if}

<h3 class="follow-us-online-title">Follow us online</h3>
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
	.follow-us-online-title {
		text-align: center;
	}

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
		width: 100%;
		max-height: 2rem;
	}
</style>
