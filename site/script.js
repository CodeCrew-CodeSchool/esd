function openTab() {
    let tabcontent;
    tabcontent = document.getElementById("tabcontent");
    show = document.getElementById("showmore");
    if (tabcontent.style.display == "block") {
        tabcontent.style.display = "none";
        show.innerHTML = "Show More";
    } else {
        tabcontent.style.display = "block";
        show.innerHTML = "Say Less";
    }
}

function meow() {
    let sound = document.getElementById("meow");
    sound.muted = !sound.muted;

    let muteButtonText = sound.muted == true ? "Unmute Audio" : "Mute Audio";
    document.querySelector('button[onclick="meow()"]').innerHTML = muteButtonText;
}

function copyViewSource(event) {
    event.preventDefault(); // Prevent default link behavior
    const href = event.target.getAttribute('href');
    event.target.title = "Link Copied"
    navigator.clipboard.writeText(href)
        .then(() => console.log('Link copied to clipboard'))
        .catch(err => console.error('Failed to copy: ', err));
}

function toggleDarkMode(event) {
    event.preventDefault();
    if (event.target.getAttribute("toggled") == 1) {
        event.target.setAttribute("toggled", 0);
        document.body.style.backgroundColor = "";
        document.body.style.color = "";

    } else {
        event.target.setAttribute("toggled", 1);
        document.body.style.backgroundColor = "rgb(119, 119, 119)";
        document.body.style.color = "rgb(255, 255, 255)";
    }
}

/* Javascript code adds functionality. This is how the buttons work!  The third flag is: shield */