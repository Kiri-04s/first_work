// スクロールによる背景横移動
$(window).on("scroll", function() {
  var scrollTop = $(window).scrollTop();
  var bgPosition = scrollTop / 4;

  if(bgPosition) {
    $("#webskills").css("background-position", "center left -" + bgPosition + "px");
  }
})

// ページ内リンクのスムーズスクロール
document.addEventListener("click", e => {
  const target =e.target;
  if(!target.classList.contains("js-smooth-scroll")) return;
  e.preventDefault();
  const targetId = target.hash;
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});