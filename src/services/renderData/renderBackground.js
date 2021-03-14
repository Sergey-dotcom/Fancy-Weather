export const renderBackground = (data) => {
  const bgContainer = document.getElementById('background-container');

  const imgToWait = new Image();
  imgToWait.src = data.urls.regular;
  imgToWait.onload = () => {
    bgContainer.classList.add('backround-container-change');

    setTimeout(function () {
      bgContainer.style = `background: linear-gradient(180deg, rgba(8,15,26,.59), rgba(17,17,46,.46)) 50% fixed, url(${data.urls.regular}) no-repeat 50% fixed; background-size: cover`;
      bgContainer.classList.remove('backround-container-change');
    }, 500);
  };
};