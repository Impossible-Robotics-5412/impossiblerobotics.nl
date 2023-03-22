<script lang="ts">
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';

	mapboxgl.accessToken =
		'pk.eyJ1IjoiYmF1a2V3IiwiYSI6ImNrdWcwODcxdTByZDAyd252MWh6NXk0YncifQ.IX1FNnd31vv-_i0kYx55Yg';

	let map: mapboxgl.Map;

	onMount(() => {
		map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/baukew/clfjrr6hv000901qu6gg7d73t',
			center: [6.0712, 53.107],
			zoom: 16
		});

		map.on('load', () => {
			map.addSource('sluisfabriek-source', {
				type: 'geojson',
				data: {
					type: 'Feature',
					properties: null,
					geometry: {
						type: 'Point',
						coordinates: [6.0712, 53.107]
					}
				}
			});

			map.addLayer({
				id: 'sluisfabriek-layer',
				type: 'circle',
				source: 'sluisfabriek-source',
				paint: {
					'circle-color': '#E93F0E',
					'circle-radius': 4,
					'circle-stroke-color': '#F78F71',
					'circle-stroke-width': 2
				}
			});
		});
	});
</script>

<div id="map" />

<style global>
	#map {
		width: 100%;
		height: 100%;
	}

	.mapboxgl-canvas {
		border-radius: 6px;
	}
</style>
