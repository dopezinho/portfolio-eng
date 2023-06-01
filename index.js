function clickbtn() {
    let centerContent = document.getElementById("center-content")
    carregar_arquivo("contact.html", centerContent)
}

function carregar_arquivo(url, Xelement) {
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