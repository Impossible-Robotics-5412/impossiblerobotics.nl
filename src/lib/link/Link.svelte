<script lang="ts">
	import { base } from '$app/paths';

	export let href: string;
	export let openInNewTab = false;
	export let file = false;
	export let noStyle = false;

	const path = `${file ? '' : base}${href}`;
</script>

<a
	href={path}
	target={openInNewTab ? '_blank' : ''}
	rel={openInNewTab ? 'noopener noreferrer' : ''}
	class:no-style={noStyle}>
	<slot />
</a>

<style>
	a {
		width: 100%;
		height: 100%;
	}
</style>
