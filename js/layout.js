(() => {

// const   vid = document.querySelector(".lightbox-promo video"),	
//         lightBox = document.querySelector('.lightbox-promo'),
//         buttonPromo = document.querySelector(".button-promo");
        
//         close = document.querySelector('.close');

// function popVideo(event) {
//     // debugger;
//     event.preventDefault();
        
//             // const vid = lightBox.querySelector('video');
//         // add a class to open the lightBox
    
//     if (event.target.className.includes('button')) {
        
//         lightBox.classList.add('show-lightbox');
//         vid.play();
        
    
//         lightBox.querySelector('.close').addEventListener('click', () => {
//             vid.pause();
    
//             vid.currentTime = 0;
    
//             lightBox.classList.remove('show-lightbox');
//             })
//         }
//     };

// buttonPromo.addEventListener('click', popVideo); 
    
    
const   burgerCon = document.querySelector("#burgerCon"),
        button = document.querySelector("#button");
        

function hamburgerMenu() {
        burgerCon.classList.toggle("slideToggle");
        button.classList.toggle("expanded");
}

    
    
button.addEventListener("click", hamburgerMenu);
    
    
})()
