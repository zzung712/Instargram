// 로그인 슬라이드
// s2~s4 hide() 가리기
// slide 함수 만들기
// 함수의 조건 .slide>img delay(3000)
// .s1 fadeOut(1000) > .s2 fadeIn(1000) // 반복 (4까지 반복)
// .s4 > s1 계속 반복되야함!!
// 반복하는 함수 setInterval(slide)
$(".s2,.s3,.s4").hide()
setInterval(slide)
function slide(){
 $(".slide>img").delay(3000)
 $(".s1").fadeOut(1000)
 $(".s2").fadeIn(1000)
 $(".slide>img").delay(3000)
 $(".s2").fadeOut(1000)
 $(".s3").fadeIn(1000)
 $(".slide>img").delay(3000)
 $(".s3").fadeOut(1000)
 $(".s4").fadeIn(1000)
 $(".slide>img").delay(3000)
 $(".s4").fadeOut(1000)
 $(".s1").fadeIn(1000)
}