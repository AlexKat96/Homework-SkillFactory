const entities = [{
    img: "images/picture-project.png",
    city: "Rostov-on-Don LCD Admiral",
    apartmentArea: "81 m2",
    repairTime: "3.5 months",
    point: document.querySelector(".point-1"),
    link: document.querySelector(".projects-link-1")
}, {
    img: "images/picture-project-1.png",
    city: "Sochi Thieves",
    apartmentArea: "105 m2",
    repairTime: "4 months",
    point: document.querySelector(".point-2"),
    link: document.querySelector(".projects-link-2")
}, {
    img: "images/picture-project-2.png",
    city: "Rostov-on-Don Patriotics",
    apartmentArea: "93 m2",
    repairTime: "3 months",
    point: document.querySelector(".point-3"),
    link: document.querySelector(".projects-link-3")
}];

const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const textCity = document.querySelector(".city");
const textArea = document.querySelector(".area");
const textRepair = document.querySelector(".repair-time");
const imgContent = document.querySelector(".picture-project-block-1");

const changeTextContent = (currentIndex) => {
    textCity.innerText = entities[currentIndex].city;
    textArea.innerText = entities[currentIndex].apartmentArea;
    textRepair.innerText = entities[currentIndex].repairTime;
}

const changePicture = (currentIndex) => {
    imgContent.style.backgroundImage = `url(${entities[currentIndex].img})`;
}

const activeProperty = (currentIndex) => {
    entities[currentIndex].point.classList.add("point-active");
    entities[currentIndex].link.classList.add("link-active");
}

const inactiveProperty = (currentIndex) => {
    entities[currentIndex].point.classList.remove("point-active");
    entities[currentIndex].link.classList.remove("link-active");
}

const dotOrLinkClick = (index) => {
    inactiveProperty(currentIndex);
    currentIndex = index;
    changeTextContent(index);
    changePicture(index);
    activeProperty(index);
}

let currentIndex = 0;

leftArrow.addEventListener("click", () => {
    inactiveProperty(currentIndex);
    if(currentIndex == 0) {
        currentIndex = entities.length-1;
    } else {
        currentIndex -= 1;
    }
    
    changeTextContent(currentIndex);
    changePicture(currentIndex);
    activeProperty(currentIndex);
})

rightArrow.addEventListener("click", () => {
    inactiveProperty(currentIndex);
    if(currentIndex == entities.length-1) {
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }
    
    changeTextContent(currentIndex);
    changePicture(currentIndex);
    activeProperty(currentIndex);
})

for (let i=0; i < entities.length; i++) {
    entities[i].point.addEventListener("click", () => {
        dotOrLinkClick(i);
    })
    entities[i].link.addEventListener("click", () => {
        dotOrLinkClick(i);
    })
}


//  MOBILE VERSION

const imgFantasies = [{
    img: "images/left-column-1-mobile.png",
}, {
    img: "images/left-column-2.jpg",
}, {
    img: "images/right-column-1.jpg",
}, {
    img: "images/right-column-2.jpg",
}];


const leftGripCompleted = document.querySelector(".slider-mobile-left");
const rightGripCompleted = document.querySelector(".slider-mobile-right");
const leftGripFantasies = document.querySelector(".realize-left");
const rightGripFantasies = document.querySelector(".realize-right");
const imgContentMobile = document.querySelector(".picture-project-block-2");
const imgContentMobileFantasies = document.querySelector(".column");

const changePictureMobile = (currentIndex) => {
    imgContentMobile.style.backgroundImage = `url(${entities[currentIndex].img})`;
}

const changePictureFabtasies = (currentIndex) => {
    imgContentMobileFantasies.style.backgroundImage = `url(${imgFantasies[currentIndex].img})`;
}

leftGripCompleted.addEventListener("click", () => {
    if(currentIndex == 0) {
        currentIndex = entities.length-1;
    } else {
        currentIndex -= 1;
    }
    changeTextContent(currentIndex);
    changePictureMobile(currentIndex);
})

rightGripCompleted.addEventListener("click", () => {
    if(currentIndex == entities.length-1) {
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }
    changeTextContent(currentIndex);
    changePictureMobile(currentIndex);
})

leftGripFantasies.addEventListener("click", () => {
    if(currentIndex == 0) {
        currentIndex = imgFantasies.length-1;
    } else {
        currentIndex -= 1;
    }
    changePictureFabtasies(currentIndex);
})

rightGripFantasies.addEventListener("click", () => {
    if(currentIndex == imgFantasies.length-1) {
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }
    changePictureFabtasies(currentIndex);
})