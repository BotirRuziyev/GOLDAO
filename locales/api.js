export default defineI18nLocale((locale) => {
	const config = useRuntimeConfig()
	return $fetch(`${config.public.baseURL}/api/v1/i18n/${locale}`)
})