<script lang="ts">
	import { page } from '$app/stores';
	import Link from '$lib/link/Link.svelte';

	export let href: string;
	export let label: string;

	// FIXME: This should use just the first segment of the path.
	$: active = $page.route.id === href;
</script>

<li class:active><Link {href}>{label}</Link></li>

<style>
	:not(.active) {
		opacity: 0.75;
	}
</style>
