for(i=1; i<13; i++){
 let postWrap = document.querySelector(".post_wrap")
 let postBox = document.createElement("div")
 postBox.className = "post_box"
 postBox.innerHTML = `
 <img src="./img/feed_img${i}.JPG" alt="x">
        <div class="comment_box">
         <ul>
          <li><img src="./img/explore_commet.png" alt="x"><p>0</p></li>
          <li><img src="./img/explore_heart.png" alt="x"><p>0</p></li>
         </ul>
        </div>`
 postWrap.appendChild(postBox)

 let reelsWrap = document.querySelector(".reels_wrap")
 let reelsBox = document.createElement("div")
 reelsBox.className = "reels_box"
 reelsBox.innerHTML = `<img src="./img/feed_img${i}.JPG" alt="x">
        <div class="comment_box2">
         <ul>
          <li><img src="./img/explore_commet.png" alt="x"><p>0</p></li>
          <li><img src="./img/explore_heart.png" alt="x"><p>0</p></li>
         </ul>
        </div> `
reelsWrap.appendChild(reelsBox)

let tagWrap = document.querySelector(".tag_wrap")
 let tagBox = document.createElement("div")
 tagBox.className = "tag_box"
 tagBox.innerHTML = `
 <img src="./img/feed_img${i}.JPG" alt="x">
        <div class="comment_box3">
         <ul>
          <li><img src="./img/explore_commet.png" alt="x"><p>0</p></li>
          <li><img src="./img/explore_heart.png" alt="x"><p>0</p></li>
         </ul>
        </div>`
tagWrap.appendChild(tagBox)
}

//for문 안에 선언된 내용은 밖에서 사용할 수 없음 >> 지역변수
//함수식, 문법 밖에서 선언된 변수 >> 전역변수
let postWrap = document.querySelector(".post_wrap")
let post = document.querySelector("#post")
let reelsWrap = document.querySelector(".reels_wrap")
let reels = document.querySelector("#reels")
let tagWrap = document.querySelector(".tag_wrap")
let tag = document.querySelector("#tag")

//릴스, 태그 가리기
reelsWrap.style.display="none"
tagWrap.style.display="none"
//post,reels,tag클릭시 띄우기
//post
function postClick(){
 postWrap.style.display="flex"
 reelsWrap.style.display="none"
 tagWrap.style.display="none"
 post.style.borderTop="1px solid #000000"
 post.style.fontWeight="bold"
 reels.style.borderTop="0"
 reels.style.fontWeight="normal"
 tag.style.borderTop="0"
 tag.style.fontWeight="normal"
}
post.addEventListener("click",postClick)

//reels
function reelsClick(){
 postWrap.style.display="none"
 reelsWrap.style.display="flex"
 tagWrap.style.display="none"
 reels.style.borderTop="1px solid #000000"
 reels.style.fontWeight="bold"
 post.style.borderTop="0"
 post.style.fontWeight="normal"
 tag.style.borderTop="0"
 tag.style.fontWeight="normal"
}
reels.addEventListener("click",reelsClick)

//reels
function tagClick(){
 postWrap.style.display="none"
 tagWrap.style.display="flex"
 reelsWrap.style.display="none"
 tag.style.borderTop="1px solid #000000"
 tag.style.fontWeight="bold"
 post.style.borderTop="0"
 post.style.fontWeight="normal"
 reels.style.borderTop="0"
 reels.style.fontWeight="normal"
}
tag.addEventListener("click",tagClick)