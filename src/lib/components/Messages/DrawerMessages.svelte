<script lang="ts">
	import ItemMessage from '$lib/components/Messages/ItemMessage.svelte'
	let { messages } = $props()
</script>

<div class="drawer lg:drawer-open bg-base-300">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"> Open drawer </label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
			<!-- Sidebar content here -->
			{#each messages as message}
				<li><ItemMessage {message} /></li>
			{/each}
		</ul>
	</div>
</div>
