<script>
	import { page } from '$app/stores'
	import { env } from '$env/dynamic/public'
	import { PUBLIC_FEATURE_WAITLIST } from '$env/static/public'
	import IconDownChevron from '$lib/assets/icons/IconDownChevron.svelte'
	import IconLogo from '$lib/assets/icons/IconLogo.svelte'
	import IconMenu from '$lib/assets/icons/IconMenu.svelte'
	import IconSearch from '$lib/assets/icons/IconSearch.svelte'
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		{#if !env.PUBLIC_FEATURE_WAITLIST}
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost lg:hidden"><IconMenu /></label>
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
					<li>
						<details>
							<summary class="custom-menu-item"> Jobs </summary>
							<ul class="p-2 ml-5">
								<li><a href="/job-post">Post a job</a></li>
								<li><a href="/dashboard">Dashboard</a></li>
								<li><a href="/previous-job-posts">Job post history</a></li>
								<li><a href="/previous-contracts">Contract history</a></li>
							</ul>
						</details>
					</li>
					<li><a href="/messages">Messages</a></li>
					<!-- <li><a href="/reports">Reports</a></li> -->
				</ul>
			</div>
		{/if}
		<a
			class="btn btn-ghost normal-case text-xl"
			href={env.PUBLIC_FEATURE_WAITLIST
				? '/waitlist'
				: $page.data.user?.userId
					? '/dashboard'
					: '/landing'}
			><IconLogo /> <span class="hidden xl:inline">OneWeek</span>
		</a>
	</div>
	{#if !env.PUBLIC_FEATURE_WAITLIST}
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<div class="dropdown dropdown-end">
					<li>
						<a tabindex="0" role="button">
							Jobs <IconDownChevron />
						</a>
					</li>
					<ul
						tabindex="0"
						class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
						<li><a href="/job-post">Post a job</a></li>
						<li><a href="/dashboard">Dashboard</a></li>
						<li><a href="/previous-job-posts">Job post history</a></li>
						<li><a href="/previous-contracts">Contract history</a></li>
					</ul>
				</div>
				<li><a href="/messages">Messages</a></li>
				<!-- <li><a href="/reports">Reports</a></li> -->
			</ul>
		</div>
		<div class="navbar-end"></div>
		{#if $page.data.user?.userId}
			<div class="flex-none gap-2">
				{#if !env.PUBLIC_FEATURE_WAITLIST}
					<div class="form-control">
						<label class="input input-bordered flex items-center gap-2">
							<input type="text" placeholder="Search" class="w-24 md:w-auto" />
							<IconSearch />
						</label>
					</div>
				{/if}
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-ghost btn-square avatar">
						<div class="w-10 rounded-md">
							<img alt="user avatar" src={$page.data.user.user.avatar} />
						</div>
					</div>
					<ul
						tabindex="0"
						class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
						{#if !env.PUBLIC_FEATURE_WAITLIST}
							<li><a href="/settings">Settings</a></li>
						{/if}
						<li><a href="https://codecrow.io/legal" target="_blank">Legal</a></li>
						<form action="/logout" method="POST">
							<li>
								<button class="custom-menu-item" type="submit"> Logout </button>
							</li>
						</form>
					</ul>
				</div>
			</div>
		{:else}
			<a class="btn btn-primary" href="/login">Login</a>
		{/if}
	{/if}
</div>
