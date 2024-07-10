<script lang="ts">
	import '$lib/assets/styles/tailwind-output.css'
	import Toolbar from '$lib/components/Global/Toolbar.svelte'

	// @ts-ignore
	import NProgress from 'nprogress'
	import { navigating } from '$app/stores'

	// NProgress Loading bar
	import '$lib/assets/styles/nprogress.css'

	NProgress.configure({
		minimum: 0.75,
		showSpinner: false,
		speed: 5,
		trickleSpeed: 200
	})

	let isNavigating = $state(navigating)
	$effect(() => {
		if (isNavigating) {
			setTimeout(() => {
				NProgress.start()
			}, 3000)
		} else {
			NProgress.done()
		}
	})
</script>

<svelte:head>
	<link rel="stylesheet" href="/fonts/montserrat.css" />
	{@html `<script> 
          const theme = localStorage.getItem('theme') || 'black';
          document.querySelector('html').dataset.theme = theme;
        </script>`}
</svelte:head>

<div class="sm:px-40">
	<Toolbar />
	<main>
		<slot />
	</main>
</div>
