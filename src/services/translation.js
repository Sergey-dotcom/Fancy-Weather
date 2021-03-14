import { translations} from '~/contracts';
import { getCurrentLocale } from '~/services';

export const getTrans = (parameter) => {
  let translatedParameter = '';
  const { language } = getCurrentLocale();
  if(translations.hasOwnProperty(language) && translations[language].hasOwnProperty(parameter)) {
    translatedParameter = translations[language][parameter];
  }
  return translatedParameter;
};