const USER_COTEXT = 'user'
const ADMIN_COTEXT = 'admin'

const routes: any = {
	admin: [
		{ path: '/admins', access: [ADMIN_COTEXT] },
		{ path: '/channels', access: [ADMIN_COTEXT] },
		{ path: '/settings', access: [ADMIN_COTEXT] },
		{ path: '/users', access: [ADMIN_COTEXT] }
	],
	landing: [
		{ path: '/', access: [USER_COTEXT, ADMIN_COTEXT] },
		{ path: '/(.*)/$', access: [USER_COTEXT, ADMIN_COTEXT] }
	],
	login: [
		{ path: '/', access: [USER_COTEXT, ADMIN_COTEXT] },
		{ path: '/(.*)/$', access: [USER_COTEXT, ADMIN_COTEXT] }
	],
	dashboard: [
		{ path: '/', access: [USER_COTEXT, ADMIN_COTEXT] },
		{ path: '/(.*)/$', access: [USER_COTEXT, ADMIN_COTEXT] }
	],
	messages: [
		{ path: '/', access: [USER_COTEXT, ADMIN_COTEXT] },
		{ path: '/(.*)/$', access: [USER_COTEXT, ADMIN_COTEXT] }
	],
	search: [
		{ path: '/', access: [USER_COTEXT, ADMIN_COTEXT] },
		{ path: '/(.*)/', access: [USER_COTEXT, ADMIN_COTEXT] }
	],
	'job-apply': [{ path: '/', access: [USER_COTEXT, ADMIN_COTEXT] }],
	'job-post': [{ path: '/', access: [USER_COTEXT, ADMIN_COTEXT] }],
	maintenance: [{ path: '/', access: [USER_COTEXT, ADMIN_COTEXT] }],
	settings: [{ path: '/', access: [USER_COTEXT, ADMIN_COTEXT] }],
	logout: [{ path: '/', access: [USER_COTEXT, ADMIN_COTEXT] }]
}

export default routes
