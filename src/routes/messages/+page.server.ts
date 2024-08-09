import { get, put } from '$lib/api'
import { type Actions } from '@sveltejs/kit'
import type { PageServerLoad } from '../$types'
import { isValidEmail } from '$lib/utils'

export const load = (() => {
	return {
		lazy: {
			messages: get(`messages`)
		}
	}
}) satisfies PageServerLoad

export const actions = {
	'create-waitlist-user': async ({ request }: { request: any }) => {
		const data = await request.formData()
		const workType = parseInt(data.get('workType') || '0')
		const email = data.get('email') || ''
		if (!isValidEmail(email)) {
			return false
		}
		return await put(`waitlist`, { workType, email })
	}
} satisfies Actions
