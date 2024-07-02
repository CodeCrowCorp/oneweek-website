<script>
	import IconDownChevron from '$lib/assets/icons/IconDownChevron.svelte'
	import IconRightChevron from '$lib/assets/icons/IconRightChevron.svelte'
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16" /></svg>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				<li><a href="/messages">Jobs <IconDownChevron /></a></li>
				<li><a href="/messages">Messages</a></li>
				<!-- <li><a href="/reports">Reports</a></li> -->
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-xl" href="/dashboard">OneWeek</a>
	</div>
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
	{#if true}
		<div class="flex-none gap-2">
			<div class="form-control">
				<label class="input input-bordered flex items-center gap-2">
					<input type="text" placeholder="Search" class="w-24 md:w-auto" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="h-4 w-4 opacity-70">
						<path
							fill-rule="evenodd"
							d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
							clip-rule="evenodd" />
					</svg>
				</label>
			</div>
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-square avatar">
					<div class="w-10 rounded-md">
						<img
							alt="Tailwind CSS Navbar component"
							src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
					<!-- <li>
						<a class="justify-between">
							Profile
							<span class="badge">New</span>
						</a>
					</li> -->
					<li><a href="/settings">Settings</a></li>
					<li><a>Logout</a></li>
				</ul>
			</div>
		</div>
	{:else}
		<a class="btn btn-primary" href="/login">Login</a>
	{/if}
</div>
