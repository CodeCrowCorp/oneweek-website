<script lang="ts">
	import { enhance } from '$app/forms'
	import IconWaitlistClient from '$lib/assets/icons/waitlist/IconWaitlistClient.svelte'
	import IconWaitlistEmail from '$lib/assets/icons/waitlist/IconWaitlistEmail.svelte'
	import IconWaitlistFreelancer from '$lib/assets/icons/waitlist/IconWaitlistFreelancer.svelte'
	import IconWaitlistJoin from '$lib/assets/icons/waitlist/IconWaitlistJoin.svelte'
	import Footer from '$lib/components/Global/Footer.svelte'
	import waitlistImage from '$lib/assets/images/waitlist.svg'
	import { getNumberInThousands } from '$lib/utils.js'
	import Alert from '$lib/components/Global/Alert.svelte'

	let { data } = $props()
	let waitlistWorkType = $state(1)
	let showAlert: boolean | undefined = $state(undefined)
</script>

<div class="bg-base-200">
	<div class="flex justify-center">
		<div>
			<section>
				<div
					class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
					<div class="mr-auto place-self-center lg:col-span-7">
						<h1
							class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
							A better freelance platform
						</h1>
						<p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
							4% job completion fee. You keep the rest. <br />No contract initiation fees. No
							connect fees. No service fee tiers.
						</p>
						<form
							action="?/create-waitlist-user"
							method="post"
							use:enhance={({ formData }) => {
								return ({ result }) => {
									if (result.type === 'success') {
										showAlert = !!result.data?.success
									}
								}
							}}>
							<div class="flex flex-col md:flex-row gap-2 mt-16">
								<div>
									<select
										name="workType"
										class="select select-bordered select-md w-full"
										required
										bind:value={waitlistWorkType}>
										<option value={1}>Freelancer</option>
										<option value={2}>Client</option>
										<option value={3}>Both</option>
									</select>
								</div>
								<label class="input input-bordered flex items-center gap-2">
									<IconWaitlistEmail />
									<input name="email" type="email" class="grow" placeholder="Email" required />
								</label>
								<button
									class="btn btn-primary inline-flex items-center justify-center px-5 py-3 text-base font-medium">
									Join Waitlist <IconWaitlistJoin />
								</button>
							</div>
						</form>
						<div class="flex mt-4">
							{#await data.lazy?.waitlistCount}
								<div>Retrieving registered users...</div>
							{:then value}
								<div class="flex gap-5">
									<div class="flex gap-2">
										<IconWaitlistClient />
										<span class="text-primary font-semibold"
											>{getNumberInThousands(value?.clientCount) || 'Error'}</span
										>Clients
									</div>
									|
									<div class="flex gap-2">
										<IconWaitlistFreelancer />
										<span class="text-primary font-semibold"
											>{getNumberInThousands(value?.freelancerCount) || 'Error'}</span
										>Freelancers
									</div>
								</div>
							{:catch error}
								<div>{error.message}</div>
							{/await}
						</div>
						<div class="mt-5">
							<Alert bind:showAlert />
						</div>
					</div>
					<div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
						<img src={waitlistImage} alt="mockup" />
					</div>
				</div>
			</section>
		</div>
	</div>
</div>
<Footer />
