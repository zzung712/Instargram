// send를 클릭하면 send_wrap창 띄우기
let SendWrap = document.querySelector(".send_wrap")
let Send = document.querySelector(".send")
// let SendBgClose = document.querySelector(".send_bgclose")
// let SendClose = document.querySelector(".close")

function sendClick(){
 SendWrap.style.display="block"
}

Send.addEventListener("click",sendClick)

// send_bgclose,close 누르면 send_wrap 창 닫기

function sendCloseClick(){
 SendWrap.style.display="none"
}
// SendBgClose.addEventListener("click",sendCloseClick)
// SendClose.addEventListener("click",sendCloseClick)

//onclick으로 direct_wrap띄우기

let directWrap = document.querySelector(".direct_wrap")

function directClick(){
 directWrap.style.display="block"
}