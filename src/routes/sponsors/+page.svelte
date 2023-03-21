<script lang="ts">
	import { base } from '$app/paths';
</script>

<h2>Sponsors</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deserunt libero voluptatibus
	praesentium laborum cum sapiente mollitia vitae facilis. Beatae accusantium a distinctio rerum
	explicabo fugit, cupiditate neque quae maiores dolores vitae, culpa natus quo perferendis
	accusamus. Dolores aliquam impedit esse reprehenderit dolore, illum in minus ex cupiditate iure
	temporibus.
</p>

<div class="main-sponsor">
	<h3>Our Main Sponsor</h3>
	<a href="https://victronenergy.nl">
		<!-- FIXME: Upload higher quality image -->
		<img src="{base}/sponsors/victron_energy.png" alt="Victron Energy" />
	</a>
</div>

<div class="other-sponsors">
	<h3>Other sponsors</h3>

	<div class="content">
		<a href="https://victronenergy.nl">
			<img src="{base}/sponsors/victron_energy.png" alt="Victron Energy" />
		</a>
		<a href="https://victronenergy.nl">
			<img src="{base}/sponsors/victron_energy.png" alt="Victron Energy" />
		</a>
		<a href="https://victronenergy.nl">
			<img src="{base}/sponsors/victron_energy.png" alt="Victron Energy" />
		</a>
		<a href="https://victronenergy.nl">
			<img src="{base}/sponsors/victron_energy.png" alt="Victron Energy" />
		</a>
		<a href="https://victronenergy.nl">
			<img src="{base}/sponsors/victron_energy.png" alt="Victron Energy" />
		</a>
	</div>
</div>

<style>
	.main-sponsor img {
		width: 50%;
	}

	.other-sponsors .content {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem 1rem;
	}

	.other-sponsors .content img {
		width: 100%;
	}
</style>
