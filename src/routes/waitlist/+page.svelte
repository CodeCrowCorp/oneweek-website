<script lang="ts">
	import { page } from '$app/stores'
	import { env } from '$env/dynamic/public'
	import Footer from '$lib/components/Global/Footer.svelte'
	import Login from '$lib/components/Global/Login.svelte'

	let { data } = $props()
	let waitlistWorkType = $state(1)
</script>

<div class="bg-base-200">
	<div class="flex justify-center">
		<div>
			<span>Be the first to know when we launch</span>
			{#await data.lazy?.waitlistCount}
				<div>Retrieving registered users count...</div>
			{:then value}
				<div class="flex gap-5">
					<span>Registered Clients: {value?.clientCount || 'Error'}</span>
					<span>Registered Freelancers: {value?.freelancerCount || 'Error'}</span>
				</div>
				{#if env.PUBLIC_FEATURE_WAITLIST && !$page.data.user?.userId}
					<div>
						<label class="form-control w-full">
							<div class="label">
								<span class="label-text">I am a...</span>
							</div>
							<select class="select select-bordered select-lg w-full" bind:value={waitlistWorkType}>
								<option value={1}>Freelancer</option>
								<option value={2}>Client</option>
								<option value={3}>Both</option>
							</select>
						</label>
					</div>
				{/if}
			{:catch error}
				<div>{error.message}</div>
			{/await}
		</div>
	</div>
	{#if !$page.data.user?.userId}
		<div class="flex justify-center">
			<Login {waitlistWorkType} />
		</div>
	{/if}
</div>
<Footer />
