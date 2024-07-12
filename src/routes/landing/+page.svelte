<script lang="ts">
	import { page } from '$app/stores'
	import Footer from '$lib/components/Global/Footer.svelte'
	import Login from '$lib/components/Global/Login.svelte'
	let { data } = $props()
</script>

<div class="bg-base-200">
	<span>Be the first to know when we launch</span>
	{#await data.lazy?.waitlistCount}
		<div>Retrieving registered users count...</div>
	{:then value}
		<div class="flex gap-5">
			<span>Registered Clients: {value?.clientCount || 'Error'}</span>
			<span>Registered Freelancers: {value?.freelancerCount || 'Error'}</span>
		</div>
	{:catch error}
		<div>{error.message}</div>
	{/await}
	{#if !$page.data.user?.userId}
		<div class="flex justify-center">
			<Login />
		</div>
	{/if}
</div>
<Footer />
