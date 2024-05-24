import {useAPI} from '~/api/index.js'

/**
 * @typedef {{
 * 	id: number,
 * 	code: string,
 * 	name: string,
 * 	region: string,
 * 	address: string,
 * 	phone: string,
 * 	email: string,
 * 	botLink: string,
 * 	telegram: string,
 * 	instagram: string,
 * 	facebook: string,
 * 	reddit: string,
 * 	logo: string,
 * 	mnDoc: string
 * 	}} Company
 * 	@returns Company[]
 */
export const useCompanies = async () => {
	return useAPI({
		url: `/api/v1/companies`
	})
}

/**
 * @typedef {{
 * 	id: number,
 * 	code: string,
 * 	name: string,
 * 	region: string,
 * 	address: string,
 * 	phone: string,
 * 	email: string,
 * 	botLink: string,
 * 	telegram: string,
 * 	instagram: string,
 * 	facebook: string,
 * 	reddit: string,
 * 	logo: string,
 * 	mnDoc: string
 * 	}} Company
 * 	@return Company
 */
export const useDefaultCompany = async () => {
	return useAPI({
		url: `/api/v1/companies/default`
	})
}

/**
 * @typedef {{
 * 	id: number,
 * 	code: string,
 * 	name: string,
 * 	region: string,
 * 	address: string,
 * 	phone: string,
 * 	email: string,
 * 	botLink: string,
 * 	telegram: string,
 * 	instagram: string,
 * 	facebook: string,
 * 	reddit: string,
 * 	logo: string,
 * 	mnDoc: string
 * 	}} Company
 * 	@return Company
 */
export const useCompany = async ({id}) => {
	return useAPI({
		url: `/api/v1/companies/${id}`
	})
}