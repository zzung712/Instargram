// for문으로 12개 돌리기
for(i=1; i<13; i++){
 let exploreWrap = document.querySelector(".explore_wrap")
 let Explore = document.createElement("div")
 Explore.className="explore_box"
/*  Explore.style.background=`url(../img/feed_img${1}.JPG) no-repeat center` 
이미지를 배경으로 지정했을 때, for문을 이용해 출력하는 방법
단, 이미지가 호스팅되어 있지 않으면 html에 출력할 수 없다.
*/
 Explore.innerHTML=`
  <div class="explore_img">
      <img src="./img/feed_img${i}.JPG" alt="x">
     </div>
 <div class="icon">
      <ul>
       <li><img src="./img/explore_heart.png" alt="x"><p>0</p></li>
       <li><img src="./img/explore_commet.png" alt="x"><p>0</p></li>
      </ul>
     </div>
 `
 exploreWrap.appendChild(Explore)
}