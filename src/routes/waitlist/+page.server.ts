import { get, put } from '$lib/api'
import { redirect, type Actions } from '@sveltejs/kit'
import type { PageServerLoad } from '../$types'

export const load = (() => {
	return {
		lazy: {
			waitlistCount: get(`waitlist/count`)
		}
	}
}) satisfies PageServerLoad
