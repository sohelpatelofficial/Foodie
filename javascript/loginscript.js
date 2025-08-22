const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link")
const loginLink = document.querySelector(".login-link")

registerLink.onclick = () => {
    wrapper.classList.add("active");
}

loginLink.onclick = () => {
    wrapper.classList.remove("active");
}

function myFunction() {
    let x = document.getElementsByClassName('nav-links')[0]
    let navBar = document.getElementsByClassName('nav-bar')[0]
    let header = document.getElementsByTagName('header')[0]
    if (header.className === "" && x.className === "nav-links" && navBar.className === "nav-bar") {
        setTimeout(() => {
            x.className += " responsive"
        }, 550);
        navBar.className += " nav-height"
        header.className = "header-height"
    } else {
        x.className = "nav-links"
        navBar.className = "nav-bar"
        header.removeAttribute('class')
    }
}