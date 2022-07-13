const loader = document.querySelector(".loader")
const container = document.querySelector(".container-fluid")
function vanish() {
    container.style.display = "none"
    loader.classList.add("show")

    setInterval(function gg() {
        container.style.display = "flex"        
    }, 4000)

    gg();
}
window.addEventListener('load', vanish);

const more = document.querySelectorAll(".more");
const remaining = document.querySelectorAll(".remaining");
const less = document.querySelectorAll('.less');

console.log(more);



more.forEach((e) => {
    e.addEventListener('click', () => {
        if (e === more[0]){
            e.style.display = "none"
            remaining[0].style.display = "inline"
            less[0].style.display = "inline"
        } else if (e === more[1]) {
            e.style.display = "none"
            remaining[1].style.display = "inline"
            less[1].style.display = "inline"

        } else if (e === more[2]) {
            e.style.display = "none"
            remaining[2].style.display = "inline"
            less[2].style.display = "inline"
        } else if (e === more[3]) {
            e.style.display = "none"
            remaining[3].style.display = "inline"
            less[3].style.display = "inline"
        } else if (e === more[4]) {
            e.style.display = "none"
            remaining[4].style.display = "inline"
            less[4].style.display = "inline"
        }
        else if (e === more[5]) {
            e.style.display = "none"
            remaining[5].style.display = "inline"
            less[5].style.display = "inline"
        }
        else if (e === more[6]) {
            e.style.display = "none"
            remaining[6].style.display = "inline"
            less[6].style.display = "inline"
          } else if (e === more[7]) {
            e.style.display = "none"
            remaining[7].style.display = "inline"
            less[7].style.display = "inline"
          }

      
       
        // console.log(more)
   })
});

less.forEach(showLess => {
    showLess.addEventListener('click', () => {
        if (showLess === less[0]) {
            showLess.style.display = "none"
            remaining[0].style.display = 'none'
            more[0].style.display = "inline"
        } else if (showLess === less[1]) {
            showLess.style.display = "none"
            remaining[1].style.display = 'none'
            more[1].style.display = "inline"
        } else if (showLess === less[2]) {
            showLess.style.display = "none"
            remaining[2].style.display = 'none'
            more[2].style.display = "inline"
        } else if (showLess === less[3]) {
            showLess.style.display = "none"
            remaining[3].style.display = 'none'
            more[3].style.display = "inline"
        } else if (showLess === less[4]) {
            showLess.style.display = "none"
            remaining[4].style.display = 'none'
            more[4].style.display = "inline"
        }
        else if (showLess === less[5]) {
            showLess.style.display = "none"
            remaining[5].style.display = 'none'
            more[5].style.display = "inline"
        }  else if (showLess === less[6]) {
            showLess.style.display = "none"
            remaining[6].style.display = 'none'
            more[6].style.display = "inline"
        }
        else if (showLess === less[7]) {
            showLess.style.display = "none"
            remaining[7].style.display = 'none'
            more[7].style.display = "inline"
        }
    });
})






const download = document.querySelectorAll(".percentage");
console.log(download)
let counter = 0;
let counts = setInterval(function updated() {
    download[0].textContent = "Downloaded by " + counter++ 
    download[1].textContent = "Downloaded by " + counter++ 
    download[2].textContent = "Downloaded by " + counter++ 
    download[3].textContent = "Downloaded by " + counter++ 
    download[4].textContent = "Downloaded by " + counter++ 
    download[5].textContent = "Downloaded by " + counter++ 
    download[6].textContent = "Downloaded by " + counter++ 
    download[7].textContent = "Downloaded by " + counter++ 
    download[8].textContent = "Downloaded by " + counter++ 
    download[9].textContent = "Downloaded by " + counter++ 
    download[10].textContent = "Downloaded by " + counter++ 
    download[11].textContent = "Downloaded by " + counter++ 
   
    if (counter === 9000) {
        download[0].textContent = "Downloaded by " + counter + "+  People"
        download[1].textContent = "Downloaded by " + (counter + 1000) + "+  People"
        download[2].textContent = "Downloaded by " + (counter - 2000) + "+  People"
        download[3].textContent = "Downloaded by " + (counter + 3000) + "+  People"
        download[4].textContent = "Downloaded by " + (counter - 4000) + "+  People"
        download[5].textContent = "Downloaded by " + (counter + 4000) + "+  People"
        download[6].textContent = "Downloaded by " + (counter + 1000) + "+  People"
        download[7].textContent = "Downloaded by " + (counter - 1000) + "+  People"
        download[8].textContent = "Downloaded by " + (counter + 1000) + "+  People"
        download[9].textContent = "Downloaded by " + (counter - 2000) + "+  People"
        download[10].textContent = "Downloaded by " + (counter + 1000) + "+  People"
        download[11].textContent = "Downloaded by " + (counter - 1000) + "+  People"
        clearInterval(counts)
    }
});

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
  
const moreGames = document.querySelector('.more-games')
const showMoreGames = document.querySelector(".show-more-games")
const secondLoader = document.querySelector(".middle")
function showGame(e) {
    showMoreGames.style.display = "none"
    secondLoader.style.display = "flex"
    setInterval(function ss() {
        moreGames.style.display = "block"
        secondLoader.style.display = "none"
    }, 2000)


   
}
  

const Card = document.querySelectorAll('.card');

Card.forEach(cardItem => {
    cardItem.addEventListener('mousemove', (e) => {
        let Xaxis = (window.innerWidth / 2 - e.pageX)  / 26
        let Yaxis = (window.innerWidth / 2 - e.pageY) / 26

        cardItem.style.transform = `rotateY(${Xaxis}deg) rotateX(${Yaxis}deg)`

    })
})

Card.forEach(cardItem => {
    cardItem.addEventListener('mouseleave', (e) => {
        cardItem.style.transform = `rotateY(0deg) rotateX(0deg)`
    })
})


function showStream(e) {
    const activeGame = document.querySelector('.Active-games')
    const liveStream = document.querySelector('#stream')
    const showGameSec = document.querySelector('.games-section');
    const news = document.querySelector(".news")
    const collection = document.querySelector(".collection")
    activeGame.style.display = "none"
    showGameSec.style.display = "none"
    liveStream.style.display = "block"
    news.style.display = "none"
    collection.style.display = "none"

    console.log(e)
}

const streamLive = document.querySelectorAll(".stream-live");
const liveBAnner = document.querySelector("#live-banner")

streamLive.forEach(livePic => {
    livePic.addEventListener('click', (e) => {
    liveBAnner.setAttribute("src", livePic.src)
    })
})

function showGameSection() {
    const activeGame = document.querySelector('.Active-games');
    const liveStream = document.querySelector('#stream');
    const showGameSec = document.querySelector('.games-section');
    const news = document.querySelector(".news")
    const collection = document.querySelector(".collection")
    activeGame.style.display = "none"
    liveStream.style.display = "none"
    showGameSec.style.display = "flex"
    news.style.display = "none"
    collection.style.display = "none"

    
}

function openNews() {
    const activeGame = document.querySelector('.Active-games');
    const liveStream = document.querySelector('#stream');
    const showGameSec = document.querySelector('.games-section');
    const news = document.querySelector(".news")
    const collection = document.querySelector(".collection")
    activeGame.style.display = "none"
    liveStream.style.display = "none"
    showGameSec.style.display = "none"
    collection.style.display = "none"
    news.style.display = "block"
}

function openCollection() {
    const activeGame = document.querySelector('.Active-games');
    const liveStream = document.querySelector('#stream');
    const showGameSec = document.querySelector('.games-section');
    const news = document.querySelector(".news")
    const collection = document.querySelector(".collection")
    activeGame.style.display = "none"
    liveStream.style.display = "none"
    showGameSec.style.display = "none"
    news.style.display = "none"
    collection.style.display = "block"
}