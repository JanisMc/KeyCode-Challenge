const info = document.getElementById("info");
const welcome = document.getElementById("welcome");
const eventKey = document.getElementById("key");
const eventCode = document.getElementById("code");
const eventWhich = document.getElementById("which");


// hide info screen 
info.style.display = "none";

const logKey = (event) => {
    console.log(event);
    // if welcome visible -
    // get rid of welcome screen 
    // replace with info screen to display - event key / event code / event which 
    welcome.style.display = "none";

    if (welcome.style.display == "none") {
        info.style.display = "block";
    }

    eventKey.textContent = `${event.key}`;
    eventCode.textContent = `${event.code}`;
    eventWhich.textContent = `${event.which}`;
}

document.addEventListener("keydown", logKey);

// make event.key display the key pressed, event.code display the code for the key & event.which display which