<script lang="ts">
	import { base } from '$app/paths';

	export let href: string;
	export let openInNewTab = false;

	const path = `${base}${href}`;
</script>

<a
	href={path}
	target={openInNewTab ? '_blank' : ''}
	rel={openInNewTab ? 'noopener noreferrer' : ''}>
	<slot />
</a>

<style>
	a {
		width: 100%;
		height: 100%;
	}
</style>
