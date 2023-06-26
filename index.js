let centerContent = document.getElementById("center-content")
const svgHome = document.querySelector(".svg-home")
const homeH3 = document.querySelector(".nav-menu-home-h3")
const svgContact = document.querySelector(".svg-contact")
const svgContact1 = document.querySelector(".svg-contact1")
const svgContactH3 = document.querySelector(".nav-menu-contact-h3")
const svgProjects = document.querySelector(".svg-projects")
const svgProjectsH3 = document.querySelector(".projects-head-h3")

/*  LOAD CONTACT  */

function clickbtnContact() {

    load("contact.html", centerContent)
    svgContact.style.fill = "#fff"
    svgContact.style.stroke = "#fff"
    svgContact1.style.fill = "#fff"
    svgContact1.style.stroke = "#fff"
    svgContactH3.style.color = "#fff"
    svgHome.style.fill = "none"
    svgHome.style.stroke = "#858080"
    homeH3.style.color = "#858080"
    svgProjects.style.fill = "none"
    svgProjects.style.stroke = "#858080"
    svgProjectsH3.style.color = "#858080"
}

/*  LOAD PROJECTS  */

function clickbtnProjects() {
    load("projects.html", centerContent)
    svgProjects.style.fill = "#fff"
    svgProjects.style.stroke = "#fff"
    svgProjectsH3.style.color = "#fff"
    svgContact.style.fill = "none"
    svgContact.style.stroke = "#858080"
    svgContact1.style.fill = "none"
    svgContact1.style.stroke = "#858080"
    svgContactH3.style.color = "#858080"
    svgHome.style.fill = "none"
    svgHome.style.stroke = "#858080"
    homeH3.style.color = "#858080"
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