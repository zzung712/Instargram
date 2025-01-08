for(k=1; k<9; k++){
 let storyWrap = document.querySelector(".story_wrap")
 let Story = document.createElement("ul")
 Story.className = "story"
 Story.innerHTML = `
 <li><img src="img/story_img${k}.JPG" alt="x"></li>
 <li><p>Instar_ID${k}</p></li>
 `
 storyWrap.appendChild(Story)
}

/* 총 10개의 피드를 생성하기 위한 조건 */
for(i=1; i<11; i++){
let feedWrap = document.querySelector(".feed_wrap")
// feedWrap은 아래 생성된 div를 넣어줄 부모를 불러옴.
let feedBox = document.createElement("div")
// 피드박스가 10개가 생성되야 하기 때문에
feedBox.className = "feed_box" // 새로 생성된 div (feedBox)에 클래스 이름인 feed_box를 부여함.
// 그냥 div가 아닌 feed_box에 css를 적용시켰기 때문에 클래스 이름을 생성해줘야함.
feedBox.innerHTML= `
<div class="feed_id">
 <div class="id">
  <ul>
   <a href="#">
    <li><img src="./img/story_img${i}.JPG" alt="x"></li>
    <li>
     <p>Instar_ID${i}</p>
     <p>·${i}시간</p>
    </li>
   </a>
  </ul>
 </div>
 <!-- id end -->
<div class="add">···</div>
<!-- add end -->
</div>
<!-- feed_id end -->
<div class="feed_img">
 <div class="feed">
  <img src="./img/feed_img${i}.JPG" alt="x">
 </div>
</div>
<!-- feed_img end -->
<div class="feed_icon">
	<ul class="left">
		<li>
			<img id="like" src="./img/like.png" alt="x">
			<img id="hate" src="./img/hate.png" alt="x">
		</li>
		<li>
			<img id=comment src="./img/comment.png" alt="x">
		</li>
		<li><img src="./img/dm.png" alt="x"></li>
	</ul>
	<ul class="right">
		<li>
			<img id="scrap" src="./img/scrap.png" alt="x">
			<img id="save" src="./img/save.png" alt="x">
		</li>
	</ul>
	<ul class="like">
		<li><p>좋아요<span id="likeNum">0</span>개</p></li>
	</ul>
</div>
<!-- feed_icon end -->
<div class="feed_txt">
	<p>Instar_ID${i}</p>
	<p class="txt">여기는 피드 내용을 작성하는 영역 입니다. 원하시는 문구를 자유롭게 작성해 보세요!</p><span class="txtAdd">더보기</span>
</div>
<!-- feed_txt end -->
<div class="feed_comment">
	<form action="" method="post">
	 <ul>
		 <li><input type="text" placeholder="댓글달기..."></li>
		 <li><button type="button">게시</button></li>
	 </ul>
 </form>
</div>
<!-- feed_comment end -->
`
feedWrap.appendChild(feedBox)
feedBoxHandeler(feedBox)
}


// like를 눌렀을 때, hate 나타나고 like는 사라지기
// 자바스크립트로 만들기!!
// like,hate불러오기 >> document.getElementById()
// like를 클릭하면 hate나타나고(display:block), like(display:none)사라지기
// 클릭이벤트 addEventListner('click',함수)
function feedBoxHandeler(feedBox){
let Like = feedBox.querySelector("#like")
let Hate = feedBox.querySelector("#hate")
let likeNum = feedBox.querySelector("#likeNum").innerText // 0(문자)
let Numlike = Number(likeNum) //0(숫자)

function likeClick(){
 Like.style.display="none"
 Hate.style.display="block"
 Numlike++
 feedBox.querySelector("#likeNum").innerText = Numlike
}
Like.addEventListener("click",likeClick)

function hateClick(){
 Like.style.display="block"
 Hate.style.display="none"
 Numlike--
 feedBox.querySelector("#likeNum").innerText = Numlike
}
Hate.addEventListener("click",hateClick)

// scrap >> 경고창(alert)으로 '저장되었습니다.'
// save >> 경고창(alert)으로 '저장이 취소되었습니다.'

let Scrap = feedBox.querySelector("#scrap")
let Save = feedBox.querySelector("#save")

function ScrapClick(){
Scrap.style.display="none"
Save.style.display="block"
alert('저장되었습니다.')
}
Scrap.addEventListener('click',ScrapClick)

function SaveClick(){
Scrap.style.display="block"
Save.style.display="none"
alert('저장이 취소되었습니다.')
}
Save.addEventListener('click',SaveClick)

// 댓글 클릭시 창 띄우기
let commentWrap = document.querySelector(".comment_wrap")
let close = document.querySelector(".close")
commentWrap.style.display="none"
function closeClick(){
	commentWrap.style.display="none"
}
close.addEventListener("click",closeClick)
let comment = feedBox.querySelector("#comment")
function commentClick(){
	commentWrap.style.display="block"
}
comment.addEventListener("click",commentClick)
}