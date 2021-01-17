'use strict';

// スクロールによる背景横移動
document.addEventListener("scroll", () => {
  const scrolltop = window.pageYOffset;
  const bgPosition = scrolltop / 4;
  const webskills = document.getElementById('webskills');

  if (bgPosition) {
    webskills.style.backgroundPosition = `center left -${bgPosition}px`;
  }
});

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