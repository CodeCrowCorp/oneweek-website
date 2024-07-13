<script lang="ts">
	import IconClose from '$lib/assets/icons/IconClose.svelte'
	import IconSuccess from '$lib/assets/icons/IconSuccess.svelte'
	import IconWarning from '$lib/assets/icons/waitlist/IconWarning.svelte'

	let { showAlert = $bindable() } = $props<{ showAlert: boolean | undefined }>()
</script>

{#if showAlert === true}
	<div
		id="toast-success"
		class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white shadow dark:text-gray-400 dark:bg-gray-800"
		role="alert">
		<div
			class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200">
			<IconSuccess />
			<span class="sr-only">Check icon</span>
		</div>
		<div class="ms-3 text-sm font-normal">You're in! Check your email</div>
		<button
			type="button"
			class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
			data-dismiss-target="#toast-success"
			aria-label="Close"
			onclick={() => {
				showAlert = undefined
			}}>
			<span class="sr-only">Close</span>
			<IconClose />
		</button>
	</div>
{:else if showAlert === false}
	<div
		id="toast-warning"
		class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white shadow dark:text-gray-400 dark:bg-gray-800"
		role="alert">
		<div
			class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200">
			<IconWarning />
			<span class="sr-only">Warning icon</span>
		</div>
		<div class="ms-3 text-sm font-normal">This email is already registered</div>
		<button
			type="button"
			class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
			data-dismiss-target="#toast-warning"
			aria-label="Close"
			onclick={() => {
				showAlert = undefined
			}}>
			<span class="sr-only">Close</span>
			<IconClose />
		</button>
	</div>
{/if}
