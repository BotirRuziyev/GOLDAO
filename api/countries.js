import {useAPI} from '~/api/index.js'

/**
 * Список доступных стран (где работает севрис перевода). Используется в том числе и в расчетах
 * Возращает список ISO2 кодов стран. Пример RU,US,CN
 * @returns [String]
 */
export const useAvailableCountries = async () => {
	return useAPI({
		url: '/api/v1/countries/available'
	})
}