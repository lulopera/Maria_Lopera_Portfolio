import { SendMail } from "./components/mailer.js";

(() => {

    const   button = document.querySelector("#button"),
		    burgerCon = document.querySelector("#burgerCon"),
            buttonPromo = document.querySelector(".button-promo"),
            // promo = document.querySelector("#promo"),
            vid = document.querySelector(".lightbox-promo video"),	
		    lightBox = document.querySelector('.lightbox-promo'),
		    close = document.querySelector('.close');

    function popVideo(event) {
        // debugger;
        event.preventDefault();
            
                // const vid = lightBox.querySelector('video');
            // add a class to open the lightBox
        
        if (event.target.className.includes('button')) {
            
            lightBox.classList.add('show-lightbox');
            vid.play();
            
        
            lightBox.querySelector('.close').addEventListener('click', () => {
                vid.pause();
        
                vid.currentTime = 0;
        
                lightBox.classList.remove('show-lightbox');
                })
            }
        }	
        buttonPromo.addEventListener('click', popVideo);  


    function hamburgerMenu() {
        burgerCon.classList.toggle("slideToggle");
        button.classList.toggle("expanded");
    }

    let mailSubmit = document.querySelector('.submit-wrapper');

    function processMailFailure(result) {
        // show a failure message in the UI
        console.table(result); // table shows us an object in table form
        alert(result.message);

        // show some UI here to let the user know the mail attempt was successful
    }

    function processMailSuccess(result) {
        // show a success message in the UI
        console.table(result); // table shows us an object in table form
        alert(result.message);

        // show some UI here to let the user know the mail attempt was successful
    }

    function processMail(event) {
        // block the default submit behaviour
        event.preventDefault();

        // use the SendMail component to try to process mail
        SendMail(this.parentNode)
            .then(data => processMailSuccess(data))
            .catch(err => processMailFailure(err));

            // the error handler in the catch block could actually be a generic catch-and-display function that handles EVERY error you might encounter during runtime. Might be a better strategy to pass in a flag or just a message and have the function display it in the UI
    }

    
    button.addEventListener("click", hamburgerMenu);
    
    // mailSubmit.addEventListener("click", processMail);
    // when we click on a bio panel, we want to retrieve the custom data attribute that refers to the row of data that represents this person in the DB
    // we then pass that ID to our data miner, which in turn passes it to index.php as the query string parameter
    
})()
