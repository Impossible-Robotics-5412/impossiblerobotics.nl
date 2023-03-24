<script lang="ts">
	import Socials from '../../lib/Socials.svelte';

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

<svelte:head>
	<title>Impossible Robotics: Contact</title>
</svelte:head>

<h2>Contact</h2>

<p>
	If you're interested in joining our team or have another question for us,
	feel free to contact us via mail or phone.
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

<Socials />

<style>
	.follow-us-online-title {
		text-align: center;
	}
</style>
