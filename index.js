let centerContent = document.getElementById("center-content")

/*  LOAD HOME  */

function clickbtnHome() {
    loadHome("home.html", centerContent)
}

function loadHome(url, Xelement) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status ==200) {
            Xelement.innerHTML = xmlhttp.responseText
        }
    }
    xmlhttp.open("GET", url)
    xmlhttp.send()
}

/*  LOAD CONTACT  */

function clickbtnContact() {
    loadContact("contact.html", centerContent)
}

function loadContact(url, Xelement) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status ==200) {
            Xelement.innerHTML = xmlhttp.responseText
        }
    }
    xmlhttp.open("GET", url)
    xmlhttp.send()
}