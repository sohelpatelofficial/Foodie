const navBar = document.getElementsByClassName("navBar")[0];
const navBtn = document.getElementById("navBtn");
const header = document.getElementsByTagName('header')[0];
const navList = document.getElementsByClassName('nav-list')[0];

// console.log(navBar, navBtn);
$(function () {

navBtn.onclick = () => {

        if (navBar.className == "navBar") {

            $(navBar).addClass("responsive");
            header.removeChild(navBtn)

            let li = document.createElement("li");
            li.appendChild(navBtn);
            navList.insertAdjacentElement("afterbegin", li);

        }
        else {

            header.appendChild(navBtn)
            $(navBar).removeClass("responsive");

            li = navList.firstElementChild
            navList.removeChild(li)
        }
    }
})