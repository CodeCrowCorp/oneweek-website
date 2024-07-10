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

export const actions = {
	'insert-waitlist': async ({ request, locals }: { request: any; locals: any }) => {
		const { userId, token } = locals.user
		const data = await request.formData()
		const workType = parseInt(data.get('workType') || '0')
		const isRegistered = await put(
			`waitlist`,
			{ workType },
			{
				userId,
				token
			}
		)
		redirect(303, `/landing?isRegistered=${isRegistered}`)
	}
} satisfies Actions
