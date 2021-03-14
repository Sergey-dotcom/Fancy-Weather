import { getApiData } from '~/services';

export const getBackground = () => getApiData('https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=y-OZPdmYyHaAXKLEaoMl0TluPwVG_eSQSNLjgMwJnRc');