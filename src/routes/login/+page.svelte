<script lang="ts">
	import IconSocialGoogle from '$lib/assets/icons/social/IconSocialGoogle.svelte'
	import IconSocialGitHubInverse from '$lib/assets/icons/social/IconSocialGitHubInverse.svelte'
	import { env } from '$env/dynamic/public'
	import { getHref } from '$lib/utils'
	import IconSocialApple from '$lib/assets/icons/social/IconSocialApple.svelte'
</script>

<div class="flex justify-center">
	<div
		class="modal-box relative bg-base-200"
		on:click={(e) => {
			e.stopPropagation()
		}}>
		<div class="py-4 space-y-5 px-4 md:px-10">
			{#if env.PUBLIC_CROSS_ORIGIN === 'false'}
				<a
					class="btn w-full bg-black hover:bg-gray-800 text-white gap-4 border-none"
					href="{env.PUBLIC_API_URL}/auth/github">
					<IconSocialGitHubInverse />
					Log in with GitHub</a>
				<a class="btn w-full btn-outline gap-4" href="{env.PUBLIC_API_URL}/auth/apple">
					<IconSocialApple />
					Log in with Apple</a>
				<a class="btn w-full btn-outline gap-4" href="{env.PUBLIC_API_URL}/auth/google">
					<IconSocialGoogle />
					Log in with Google</a>
			{:else}
				<button
					class="btn w-full bg-black hover:bg-gray-800 text-white gap-4 btn-outline"
					on:click={async () =>
						await getHref({
							provider: 'github',
							apiUrl: env.PUBLIC_API_URL,
							xApiKey: env.PUBLIC_X_API_KEY
						})}>
					<IconSocialGitHubInverse />
					Log in with GitHub</button>
				<button
					class="btn w-full btn-outline gap-4"
					on:click={async () =>
						await getHref({
							provider: 'apple',
							apiUrl: env.PUBLIC_API_URL,
							xApiKey: env.PUBLIC_X_API_KEY
						})}>
					<IconSocialApple />
					Log in with Apple</button>
				<button
					class="btn w-full btn-outline gap-4"
					on:click={async () =>
						await getHref({
							provider: 'google',
							apiUrl: env.PUBLIC_API_URL,
							xApiKey: env.PUBLIC_X_API_KEY
						})}>
					<IconSocialGoogle />
					Log in with Google</button>
			{/if}
			<p>
				By using our platform, you confirm that you are atleast 18 years old and agree to
				<a class="link link-info" href="https://codecrow.io/legal" target="_blank"
					>all of our policies
				</a>
			</p>
		</div>
	</div>
</div>
