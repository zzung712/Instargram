//h_sub 나타나기 _ search 영역
let Header = document.querySelector("#header")
let hSub = document.querySelector(".h_sub")
let Search = document.querySelector("#searchClick")
let subSearchClick = document.querySelector("#sub_searchClick")
let searchWrap = document.querySelector(".search_wrap")
// 검색창 띄우기
function search(){
 Header.style.transform="translateX(-340px)"
 searchWrap.style.transform="translateX(480px)"
 alarmWrap.style.transform="translateX(-400px)"
 hSub.style.zIndex="1"
}

Search.addEventListener("click",search)
// 검색창 닫기
function subSearch(){
 Header.style.transform="translateX(0px)"
 searchWrap.style.transform="translateX(-400px)"
 alarmWrap.style.transform="translateX(-400px)"
 hSub.style.zIndex="-1"
}

subSearchClick.addEventListener("click",subSearch)

// alram 띄우기
let Alarm = document.querySelector("#alramClick")
let alarmWrap = document.querySelector(".arlam_wrap")

function AlarmClick(){
 Header.style.transform="translateX(-340px)"
 alarmWrap.style.transform="translateX(480px)"
 searchWrap.style.transform="translateX(-400px)"
 hSub.style.zIndex="1"
}
Alarm.addEventListener("click",AlarmClick)
// alram 닫기
let subAlram = document.querySelector("#sub_alramClick")
function subAlarmClick(){
 Header.style.transform="translateX(0px)"
 alarmWrap.style.transform="translateX(-400px)"
 searchWrap.style.transform="translateX(-400px)"
 hSub.style.zIndex="-1"
}
subAlram.addEventListener("click",subAlarmClick)

// create 띄우기
let createClick = document.querySelector("#createClick")
let createWrap = document.querySelector(".create_wrap")
function create(){
 createWrap.style.display="block"
}
createClick.addEventListener("click",create)
// create 닫기
let createBgClose = document.querySelector(".create_bgclose")
function BgClose(){
 createWrap.style.display="none"
}
createBgClose.addEventListener("click",BgClose)