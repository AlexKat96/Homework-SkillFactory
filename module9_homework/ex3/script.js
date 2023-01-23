function useRequest(url, valueNum, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
        const result = JSON.parse(xhr.response);
        if (valueNum, callback) {
            callback(valueNum, result);
        }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};


const resultNode = document.querySelector('.result-request');
const btnNode = document.querySelector('.button-request');

function displayResult(valueNum, apiData) {
    if (valueNum > 10 || valueNum < 1) {
        resultNode.innerHTML = "Число вне диапазона от 1 до 10";
    } else {
        let cards = '';

        apiData.forEach(item => {
            const cardBlock = `
                <div class="card">
                <img src="${item.download_url}" class="card-image">
                <p>${item.author}</p>
                </div>
            `;
            cards = cards + cardBlock;
            });

        resultNode.innerHTML = cards;
    }
}

btnNode.addEventListener('click', () => {
    const valueInput = document.querySelector('.input-request').value;
    const url = 'https://picsum.photos/v2/list/?limit=' + valueInput;
    useRequest(url, valueInput, displayResult);
})