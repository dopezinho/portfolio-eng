let centerContent = document.getElementById("center-content")

/*  LOAD CONTACT  */

function clickbtnContact() {
    load("contact.html", centerContent)
}

/*  LOAD PROJECTS  */

function clickbtnProjects() {
    load("projects.html", centerContent)
}

function load(url, Xelement) {
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

/*  FILL HEART  */

function fillHeart() {
    const heart = document.querySelector(".heartzin");
  
    if (heart.style.fill === "none") {
      heart.style.fill = "#fff";
    } else {
      heart.style.fill = "none";
    }
  }