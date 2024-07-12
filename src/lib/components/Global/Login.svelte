<script lang="ts">
	import IconSocialGoogle from '$lib/assets/icons/social/IconSocialGoogle.svelte'
	import IconSocialGitHubInverse from '$lib/assets/icons/social/IconSocialGitHubInverse.svelte'
	import { env } from '$env/dynamic/public'
	import { getHref } from '$lib/utils'
	import IconSocialApple from '$lib/assets/icons/social/IconSocialApple.svelte'

	let isAppleHovered = $state(false)
	let { waitlistWorkType } = $props<{ waitlistWorkType: number }>()
</script>

<div class="modal-box relative bg-base-200">
	<div class="py-4 space-y-5 px-4 md:px-10">
		{#if env.PUBLIC_CROSS_ORIGIN === 'false'}
			<a
				class="btn w-full bg-black hover:bg-gray-800 text-white gap-4 border-none hover:text-white"
				href="{env.PUBLIC_API_URL}/auth/github?workType={waitlistWorkType}">
				<IconSocialGitHubInverse />
				Log in with GitHub</a>
			<a
				class="btn w-full btn-outline gap-4"
				href="{env.PUBLIC_API_URL}/auth/google?workType={waitlistWorkType}">
				<IconSocialGoogle />
				Log in with Google</a>
			<a
				class="btn w-full btn-outline gap-4"
				href="{env.PUBLIC_API_URL}/auth/apple?workType={waitlistWorkType}"
				onmouseenter={() => (isAppleHovered = true)}
				onmouseleave={() => (isAppleHovered = false)}>
				<IconSocialApple {isAppleHovered} />
				Log in with Apple</a>
		{:else}
			<button
				class="btn w-full bg-black hover:bg-gray-800 text-white gap-4 btn-outline hover:text-white"
				onclick={async () =>
					await getHref({
						provider: 'github',
						apiUrl: env.PUBLIC_API_URL,
						xApiKey: env.PUBLIC_X_API_KEY,
						waitlistWorkType
					})}>
				<IconSocialGitHubInverse />
				Log in with GitHub</button>
			<button
				class="btn w-full btn-outline gap-4"
				onclick={async () =>
					await getHref({
						provider: 'google',
						apiUrl: env.PUBLIC_API_URL,
						xApiKey: env.PUBLIC_X_API_KEY,
						waitlistWorkType
					})}>
				<IconSocialGoogle />
				Log in with Google</button>
			<button
				class="btn w-full btn-outline gap-4"
				onmouseenter={() => (isAppleHovered = true)}
				onmouseleave={() => (isAppleHovered = false)}
				onclick={async () =>
					await getHref({
						provider: 'apple',
						apiUrl: env.PUBLIC_API_URL,
						xApiKey: env.PUBLIC_X_API_KEY,
						waitlistWorkType
					})}>
				<IconSocialApple {isAppleHovered} />
				Log in with Apple</button>
		{/if}
		<p>
			By using our platform, you confirm that you are atleast 18 years old and agree to
			<a class="link link-warning" href="https://codecrow.io/legal" target="_blank"
				>all of our policies
			</a>
		</p>
	</div>
</div>
