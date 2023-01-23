const btnNode = document.querySelector('.button-request');

btnNode.addEventListener('click', () => {
  const resultNode = document.querySelector('.result-request');
  
  const widthNode = document.querySelector('.input-request-width').value;
  const heightNode = document.querySelector('.input-request-height').value;
  const numberWidthNode = Number(widthNode);
  const numberHeightNode = Number(heightNode);
  
  
  if((numberHeightNode < 100 || numberHeightNode > 300) ||
  (numberWidthNode < 100 || numberWidthNode > 300) ||
  Number.isNaN(numberHeightNode) ||
  Number.isNaN(numberWidthNode)) {
    resultNode.innerHTML = "Число вне диапазона от 100 до 300";
  } else {
    const url = 'https://picsum.photos/' + numberWidthNode + "/" + numberHeightNode;
    fetch(url)
      .then(response => {
        resultNode.textContent = "";
        const cardBlock = `
          <div class="card">
            <img class="card-image" src="${response.url}"/>
          </div>
        `;
        resultNode.innerHTML = cardBlock;
      })

      .catch(() => {
        console.log("error");
      })
  }                   
});