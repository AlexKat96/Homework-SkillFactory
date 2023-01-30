const webUrl = "wss://echo-ws-service.herokuapp.com/";


const btn = document.querySelector(".button-send");
const result = document.querySelector(".main-result");
const btnGeo = document.querySelector(".button-geo");


let websocket;

function clientMessage(message) {
  let clientBlockMessage = document.createElement("div");
  clientBlockMessage.innerHTML = message;
  clientBlockMessage.className = "attribute client-attribute";
  result.appendChild(clientBlockMessage);
}

function serverMessage(message) {
  let serverBlockMessage = document.createElement("div");
  serverBlockMessage.className = "attribute server-attribute";
  serverBlockMessage.innerHTML = message;
  result.appendChild(serverBlockMessage);
}

const error = () => {
  console.log('Невозможно получить ваше местоположение');
}

const success = (position) => {
  let clientBlockMessage = document.createElement("a");
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  clientBlockMessage.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  clientBlockMessage.className = "attribute client-attribute geolocation-attribute";
  clientBlockMessage.target = "_blank";
  clientBlockMessage.innerHTML = "Гео-локация";
 result.appendChild(clientBlockMessage);
}


btn.addEventListener("click", () => {
  const inp = document.querySelector(".main-input").value;
  if((inp === "") || (inp === " ")) {
    console.log("Ошибка, введите значение");
    } else {
      document.querySelector(".main-input").value = "";
      websocket = new WebSocket(webUrl);
      websocket.onopen = function(evt) {
        clientMessage(inp);
      };
      websocket.onclose = function(evt) {
        console.log("disconnected");
      };
      websocket.onmessage = function(evt) {
        serverMessage(inp);
      };
      websocket.onerror = function(evt) {
        console.log("Ошибка: " + evt.data);
      };
      setTimeout(() => {websocket.send(inp)}, 1000); 
     }
});

btnGeo.addEventListener("click", () => {
 
  if (!navigator.geolocation) {
    console.log('Geolocation не поддерживается вашим браузером');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});