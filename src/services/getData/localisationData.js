export const getCurrentLocale = () => {
  const units = localStorage.getItem('units') || 'M';
  const language = localStorage.getItem('lang') || 'en';

  return { language: language.trim(), units };
};