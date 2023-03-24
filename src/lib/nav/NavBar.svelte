<script lang="ts">
	import NavBarItem from './NavBarItem.svelte';
</script>

<nav>
	<ul>
		<NavBarItem label="home" href="/" />
		<NavBarItem label="blog" href="/blog" />
		<NavBarItem label="about" href="/about" />
		<NavBarItem label="visit" href="/visit" />
		<NavBarItem label="sponsors" href="/sponsors" />
		<NavBarItem label="outreach" href="/outreach" />
		<NavBarItem label="join" href="/join" />
		<NavBarItem label="contact" href="/contact" />
	</ul>
</nav>

<style>
	nav {
		padding-bottom: 2rem;
	}

	ul {
		list-style: none;
		display: flex;
		gap: 1rem;

		flex-wrap: wrap;
	}
</style>
