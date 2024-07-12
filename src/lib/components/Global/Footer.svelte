<script lang="ts">
	import { env } from '$env/dynamic/public'
	import IconSocialGitHubInverse from '$lib/assets/icons/social/IconSocialGitHubInverse.svelte'
	import IconSocialDiscord from '$lib/assets/icons/social/IconSocialDiscord.svelte'
	import IconSocialTwitter2 from '$lib/assets/icons/social/IconSocialTwitter2.svelte'
	import IconSocialTwitch from '$lib/assets/icons/social/IconSocialTwitch.svelte'
	import IconSocialYouTube from '$lib/assets/icons/social/IconSocialYouTube.svelte'
	import IconSocialTikTok from '$lib/assets/icons/social/IconSocialTikTok.svelte'
</script>

<footer class="footer footer-center p-10 bg-ghost text-neutral-content">
	<div class="space-y-1">
		<div class="flex gap-4 items-center">
			<a href="https://github.com/CodeCrowCorp" target="_blank" rel="noreferrer">
				<IconSocialGitHubInverse />
			</a>
			<a href="https://discord.mage.stream" target="_blank" rel="noreferrer">
				<IconSocialDiscord />
			</a>
			<a href="https://twitter.com/codecrowcorp" target="_blank" rel="noreferrer">
				<IconSocialTwitter2 />
			</a>
			<a href="https://twitch.tv/gagansuie" target="_blank" rel="noreferrer">
				<IconSocialTwitch />
			</a>
			<a href="https://youtube.com/@gagansuie" target="_blank" rel="noreferrer">
				<IconSocialYouTube />
			</a>
			<a href="https://tiktok.com/@gagansuie" target="_blank" rel="noreferrer">
				<IconSocialTikTok />
			</a>
		</div>
		<p>
			<a href="https://codecrow.io" target="_blank" class="link link-hover"
				>Code Crow © {new Date().getFullYear()}</a>
		</p>
		<p class="text-gray-500">
			v{__VERSION__} [{env.PUBLIC_ENV === 'production' ? 'beta' : env.PUBLIC_ENV}]
		</p>
	</div>
</footer>
