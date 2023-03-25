<script lang="ts">
	import { base } from '$app/paths';
	import Link from '$lib/link/Link.svelte';
	import StandardPage from '$lib/StandardPage.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<StandardPage>
	<h2>About</h2>

	<p>
		Impossible Robotics is a non-profit organization located in the north of
		the Netherlands that's composed of high school and college students. By
		participating in the
		<Link openInNewTab href="https://www.firstinspires.org/robotics/frc">
			First Robotics Competition
		</Link>,
		<Link openInNewTab href="https://first.global"
			>First Global Challence</Link>
		and
		<Link openInNewTab href="https://www.firstinspires.org/robotics/ftc"
			>First Tech Challenge</Link
		>. our team aims to inspire and enthuse everyone from kids to teenagers
		and adults about technology. We also try to forge a link between schools
		and employers.
	</p>

	<img src="{base}/pages/about/team.jpg" alt="Our team" />

	<p>
		<Link openInNewTab href="https://www.firstinspires.org/robotics/frc"
			>FIRST</Link>
		is an American organisation that took upon itself the task to promote technology
		worldwide. To achieve this goal, FIRST, among other things, organises multiple
		competitions, including the FIRST Robotics Competition.
	</p>

	<p>
		Our journey began with the <Link
			openInNewTab
			href="https://www.firstinspires.org/robotics/fll"
			>First LEGO League</Link
		>, after which we built our way up through FTC and eventually FRC. With
		a team growing bigger and better each season, we take on the challenge
		to encourage the multidisciplinary commitment to skills and technology.
	</p>

	<p>
		Impossible Robotics was founded in august 2014, the year after we
		participated in FLL. <Link
			openInNewTab
			href="https://teamrembrandts.com">
			Team Rembrandts
		</Link>
		taught us the essentials for having a FRC team. Now we are trying to progress
		our team each year and teach our students the essentials of solving problems
		together and building robots, including engineering, programming, time management,
		presentation skills, teamwork and leadership.
	</p>

	<p>
		Besides our work as an FRC team, we also attend lots of outreach events,
		where we are trying to reach our goal of enthusing kids for technology.
		Besides all the above Impossible Robotics is a fun, inclusive and
		intimate team. But the most important thing we want to effectuate is to
		create an environment where the students can discover and expend their
		talents and interests, whether it is technology related or social
		skills. We want to welcome all creativity and challenge the impossible
		together.
	</p>
</StandardPage>
