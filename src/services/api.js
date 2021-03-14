export const getApiData = (url) => {
  return fetch(url)
            .then(data => data.json())
            .catch((e) => {
              console.log(e);
            });
};