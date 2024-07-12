import { get } from '$lib/api'
import type { PageServerLoad } from '../$types'

export const load = (() => {
	return {
		lazy: {
			waitlistCount: get(`waitlist/count`)
		}
	}
}) satisfies PageServerLoad
