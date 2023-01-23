const btnClearNode = document.querySelector('.button-clear');

btnClearNode.addEventListener('click', () => {
  localStorage.clear();
});

const cards = localStorage.getItem("cards");

if(cards) {
  const resultNode = document.querySelector('.result-request');
  resultNode.innerHTML = cards;
} else {
  
  const btnNode = document.querySelector('.button-request');
  btnNode.addEventListener('click', () => {
  const resultNode = document.querySelector('.result-request');
    const pageNode = document.querySelector('.input-request-width').value;
    const limitNode = document.querySelector('.input-request-height').value;
    const numberPageNode = Number(pageNode);
    const numberLimitNode = Number(limitNode);
  
    if((numberPageNode < 1 || numberPageNode > 10) &&
    (numberLimitNode < 1 || numberLimitNode > 10) ||
    Number.isNaN(numberPageNode) &&
    Number.isNaN(numberLimitNode)) {
    
        resultNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    
    } else if((numberPageNode < 1 || numberPageNode > 10) ||
           Number.isNaN(numberPageNode)) {
    
            resultNode.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    
    } else if ((numberLimitNode < 1 || numberLimitNode > 10) ||
           Number.isNaN(numberLimitNode)) {
    
            resultNode.innerHTML = "Лимит вне диапазона от 1 до 10";
    
    } else {
        const url = `https://picsum.photos/v2/list?page=${numberPageNode}&limit=${numberLimitNode}`;
        fetch(url)
          .then(response => {

            const result = response.json();

            result.then(response => {
              let cards = "";
              response.forEach(item => {
              const cardBlock = `
                <div class="card">
                  <img src="${item.download_url}" class="card-image">
                  <p>${item.author}</p>
                </div>
              `;
              cards = cards + cardBlock;
              })
              localStorage.setItem("cards", cards);
              resultNode.innerHTML = cards;
            })
          })
          .catch(() => {
            console.log("error");
          })
    }                
  });
}