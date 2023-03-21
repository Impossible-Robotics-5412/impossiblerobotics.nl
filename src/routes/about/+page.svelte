<script lang="ts">
	import { base } from '$app/paths';
	import Link from '$lib/link/Link.svelte';
</script>

<svelte:head>
	<title>Impossible Robotics: About Us</title>
</svelte:head>

<h2>About Us</h2>

<p>
	Impossible Robotics is a non-profit organization located in the north of the Netherlands that's
	composed of high school and college students. By participating in
	<Link openInNewTab href="https://www.firstinspires.org/robotics/frc">FRC</Link>,
	<Link openInNewTab href="https://first.global">FGC</Link> and
	<Link openInNewTab href="https://www.firstinspires.org/robotics/ftc">FTC</Link>
	our team aims to inspire and enthuse everyone from kids to teenagers and adults about technology. We
	also try to forge a link between schools and employers.
</p>

<img src="{base}/pages/about/team.jpg" alt="Our team" />

<p>
	<Link openInNewTab href="https://www.firstinspires.org/robotics/frc">FIRST</Link>
	is an American organisation that took upon itself the task to promote technology worldwide. To achieve
	this goal, FIRST, among other things, organises multiple competitions, including the FIRST Robotics
	Competition.
</p>

<style>
	img {
		width: 100%;
		margin: 1rem 0;
	}
</style>
