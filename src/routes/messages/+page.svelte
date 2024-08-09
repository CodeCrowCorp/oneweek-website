<script lang="ts">
	import DrawerMessages from '$lib/components/Messages/DrawerMessages.svelte'
	let { data } = $props()
</script>

<div class="hero bg-base-200">
	{#await data.lazy?.messages}
		<div>Retrieving registered users...</div>
	{:then value}
		<DrawerMessages messages={value} />
	{/await}
</div>
