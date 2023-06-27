let centerContent = document.getElementById("center-content")
const svgHome = document.querySelector(".svg-home")
const homeH3 = document.querySelector(".nav-menu-home-h3")
const svgContact = document.querySelector(".svg-contact")
const svgContact1 = document.querySelector(".svg-contact1")
const contactH3 = document.querySelector(".nav-menu-contact-h3")
const svgProjects = document.querySelector(".svg-projects")
const svgProjectsAll = document.getElementById("svg-projects")
const svgProjectsOpen = document.querySelector(".svg-projects-open")
const svgProjectsOpenAll = document.getElementById("svg-projects-open")
const projectsH3 = document.querySelector(".projects-head-h3")
const svgHomeMobile = document.querySelector(".svg-home-mobile")
const homeMobileH3 = document.querySelector(".footer-mobile-home-h3")
const svgContactMobile = document.querySelector(".svg-contact-mobile")
const svgContactMobile1 = document.querySelector(".svg-contact1-mobile")
const contactMobileH3 = document.querySelector(".footer-mobile-contact-h3")
const svgProjectsMobile = document.querySelector(".svg-projects-mobile")
const projectsMobileH3 = document.querySelector(".footer-mobile-projects-h3")
const svgProjectsMobileAll = document.getElementById("svg-projects-mobile")
const svgProjectsMobileOpenAll = document.getElementById("svg-projects-mobile-open")


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

/*  LOAD CONTACT  */

function clickbtnContact() {

    load("contact.html", centerContent)
    svgContact.style.fill = "#fff"
    svgContact.style.stroke = "#fff"
    svgContact1.style.fill = "#fff"
    svgContact1.style.stroke = "#fff"
    contactH3.style.color = "#fff"
    svgHome.style.fill = "none"
    svgHome.style.stroke = "#858080"
    homeH3.style.color = "#858080"
    svgProjects.style.fill = "none"
    svgProjects.style.stroke = "#858080"
    projectsH3.style.color = "#858080"
    svgProjectsAll.style.display = "flex"
    svgProjectsOpenAll.style.display = "none"
    svgHomeMobile.style.fill = "none"
    svgHomeMobile.style.stroke = "#858080"
    homeMobileH3.style.color = "#858080"
    svgContactMobile.style.fill = "#fff"
    svgContactMobile.style.stroke = "#fff"
    svgContactMobile1.style.fill = "#fff"
    svgContactMobile1.style.stroke = "#fff"
    contactMobileH3.style.color = "#fff"
    svgProjectsMobileAll.style.display = "flex"
    svgProjectsMobileOpenAll.style.display = "none"
    projectsMobileH3.style.color = "#858080"
}

/*  LOAD PROJECTS  */

function clickbtnProjects() {
    load("projects.html", centerContent)
    svgProjectsAll.style.display = "none"
    svgProjectsOpenAll.style.display = "flex"
    svgProjectsOpen.style.fill = "none"
    projectsH3.style.color = "#fff"
    svgContact.style.fill = "none"
    svgContact.style.stroke = "#858080"
    svgContact1.style.fill = "none"
    svgContact1.style.stroke = "#858080"
    contactH3.style.color = "#858080"
    svgHome.style.fill = "none"
    svgHome.style.stroke = "#858080"
    homeH3.style.color = "#858080"
    svgHomeMobile.style.fill = "none"
    svgHomeMobile.style.stroke = "#858080"
    homeMobileH3.style.color = "#858080"
    svgContactMobile.style.fill = "none"
    svgContactMobile.style.stroke = "#858080"
    svgContactMobile1.style.fill = "none"
    svgContactMobile1.style.stroke = "#858080"
    contactMobileH3.style.color = "#858080"
    svgProjectsMobileAll.style.display = "none"
    svgProjectsMobileOpenAll.style.display = "flex"
    projectsMobileH3.style.color = "#fff"
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