<script lang="ts">
	import { page } from '$app/stores';
	import Link from '$lib/link/Link.svelte';

	export let href: string;
	export let label: string;

	$: active =
		href !== '/'
			? $page.url.pathname.match(href)
			: href === $page.url.pathname;
</script>

<li class:active><Link {href}>{label}</Link></li>

<style>
	:not(.active) {
		opacity: 0.75;
	}
</style>
