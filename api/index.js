export const useAPI = ({ url,  method = 'GET', body, params }) => {
	const lang = useCookie('i18n_redirected')
	const config = useRuntimeConfig()
	
	const opts = {
		method: method,
		baseURL: config.public.baseURL ?? 'http://localhost:8080',
		
		async onRequest({ options }) {
			options.headers = options.headers || {}
			options.headers['accept-language'] = lang.value
			
			if (process.server) {
				const i18n = useI18n()
				options.headers['accept-language'] = i18n.locale.value
			}
		},
		
		async onResponse({ request, response }) {
		},
		
		async onRequestError({ request, error }) {
			console.error('REQUEST ERROR', JSON.stringify(error))
			if (error?.cause?.code === 'ECONNREFUSED') {
			
			}
		},
		
		async onResponseError({ response }) {
			console.error('RESPONSE ERROR', JSON.stringify(response))
			if (response._data === 'Bad Gateway' || response._data === '404 page not found\n') {
			
			}
		},
		body: body,
		watch: params?.watch,
		query: params?.query,
		key: params?.key,
		params: params?.params
	}
	
	return useFetch(url, opts)
}