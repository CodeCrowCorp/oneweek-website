export const isJsonString = (str: string): boolean => {
	try {
		JSON.parse(str)
	} catch (err) {
		return false
	}
	return true
}

export const copyToClipboard = async (text: string) => {
	try {
		await navigator.clipboard.writeText(text)
		console.log('Text copied to clipboard')
	} catch (err) {
		console.error('Error copying text to clipboard:', err)
	}
}

/*
Input: 33, 16
Output: [16, 16, 1]

Input: 20, 16
Output: [16, 4]
*/
export const divideNumber = (number: number, divider: number): number[] => {
	if (number <= divider) {
		return [number]
	}
	const quotient = Math.floor(number / divider)
	return [divider].concat(quotient > 0 ? divideNumber(number - divider, divider) : [])
}

export const cardCounts: { [key: number]: number[] } = {
	1: [1],
	2: [2],
	3: [2, 1],
	4: [2, 2],
	5: [2, 2, 1],
	6: [3, 3],
	7: [3, 2, 2],
	8: [3, 3, 2],
	9: [3, 3, 3],
	10: [4, 3, 3],
	11: [4, 4, 3],
	12: [4, 4, 4],
	13: [4, 4, 4, 1],
	14: [4, 4, 3, 3],
	15: [4, 4, 4, 3],
	16: [4, 4, 4, 4]
}

export const timeSince = (date: string) => {
	if (!date) return 'Date created unknown'
	const created: any = new Date(date)
	const currentDate: any = new Date(Date.now())
	const seconds = Math.floor((currentDate - created) / 1000)
	let interval = seconds / 31536000
	if (interval > 1) {
		return Math.floor(interval) + ' years ago'
	}
	interval = seconds / 2592000
	if (interval > 1) {
		return Math.floor(interval) + ' months ago'
	}
	interval = seconds / 86400
	if (interval > 1) {
		return Math.floor(interval) + ' days ago'
	}
	interval = seconds / 3600
	if (interval > 1) {
		return Math.floor(interval) + ' hours ago'
	}
	interval = seconds / 60
	if (interval > 1) {
		return Math.floor(interval) + ' minutes ago'
	}
	return Math.floor(seconds) + ' seconds ago'
}

export const getWeekNumber = (date: Date) => {
	const now = date
	const onejan = new Date(now.getFullYear(), 0, 1)
	return Math.ceil(((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7)
}

export const getNumberInThousands = (number: number) => {
	if (number >= 1000000000) {
		return Math.floor(number / 1000000000) + 'b'
	} else if (number >= 1000000) {
		return Math.floor(number / 1000000) + 'm'
	} else if (number >= 1000) {
		return Math.floor(number / 1000) + 'k'
	} else {
		return number.toString()
	}
}

export const dataURLtoFile = (dataurl: string, filename: string) => {
	const arr = dataurl.split(',')
	const mime = (arr[0] && arr[0].match(/:(.*?);/)?.[1]) || ''
	const bstr = atob(arr[1])
	let n = bstr.length
	const u8arr = new Uint8Array(n)
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n)
	}
	return new File([u8arr], filename, { type: mime })
}

export const getHref = async ({
	provider,
	apiUrl,
	xApiKey,
	waitlistWorkType
}: {
	provider: string
	apiUrl: string
	xApiKey: string
	waitlistWorkType: number
}) => {
	const response = await fetch(`${apiUrl}/auth/${provider}?workType=${waitlistWorkType}`, {
		headers: {
			Accept: '*/*',
			'x-api-key': xApiKey
		}
	})
	const { loginUrl }: any = await response.json()
	window.location.replace(loginUrl)
}

export const formatTime = (streamTime: number) => {
	const hours = Math.floor(streamTime / 3600)
	const minutes = Math.floor((streamTime % 3600) / 60)
	const seconds = streamTime % 60

	const paddedHours = hours.toString().padStart(2, '0')
	const paddedMinutes = minutes.toString().padStart(2, '0')
	const paddedSeconds = seconds.toString().padStart(2, '0')

	return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`
}

export const getTimeFormat = (duration: number) => {
	const hours = Math.floor(duration / 3600)
	const minutes = Math.floor((duration % 3600) / 60)
	const seconds = Math.floor(duration % 60)

	const secondsFormat = seconds < 10 ? `0${seconds}` : seconds

	return hours > 0 ? `${hours}:${minutes}:${secondsFormat}` : `${minutes}:${secondsFormat}`
}
