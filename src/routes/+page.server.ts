import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'
import { env } from '$env/dynamic/public'

export const load = (({ locals }: { locals: any }) => {
	if (env.PUBLIC_FEATURE_WAITLIST) {
		throw redirect(307, '/waitlist')
	} else {
		if (!locals.user) {
			throw redirect(307, '/landing')
		} else {
			throw redirect(307, '/dashboard')
		}
	}
}) satisfies LayoutServerLoad
