import { writable, type Writable } from 'svelte/store'

export const channel_connection: Writable<string> = writable()
export const channel_message: Writable<string> = writable()
