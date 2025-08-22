// function loadscript(){
//     let script = document.createElement('script')
//     script.src = src
//     document.head.appendChild()
// }

function loadstylesheet(path){
    let stylesheet = document.createElement('link')
    stylesheet.href = path
    stylesheet.rel =  "stylesheet"
    document.head.appendChild(stylesheet)
}

loadstylesheet('css/style.css')
loadstylesheet('css/utils.css')
loadstylesheet('css/responsive.css')
loadstylesheet('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css')
// loadscript('')