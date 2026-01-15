// スクロールでフェードイン
const fadeEls = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// 自動スライダー
let index = 0;
const slides = document.querySelectorAll('.slide');
function showSlide() {
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}
setInterval(showSlide, 5000);

// ページ読み込み時のローディング画面
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  const loadingContent = document.getElementById('loading-content');

  // 初回かどうか判定
  const isFirstVisit = !localStorage.getItem('visited');

  if (isFirstVisit) {
    // 初回：ローディング表示
    setTimeout(() => {
      loading.classList.add('fade-out');

      setTimeout(() => {
        loading.style.display = 'none';
        loadingContent.style.display = 'block';
      }, 800);

      // 訪問済みフラグを保存
      localStorage.setItem('visited', 'true');
    }, 1200);
  } else {
    // 2回目以降：即表示
    loading.style.display = 'none';
    loadingContent.style.display = 'block';
  }
});


// ハンバーガーメニュー
  const hamburger = document.getElementById("hamburger");
const spNav = document.getElementById("spNav");
const closeNav = document.getElementById("closeNav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  spNav.classList.toggle("active");
  document.body.style.overflow = spNav.classList.contains("active")
    ? "hidden"
    : "";
});

closeNav.addEventListener("click", () => {
  hamburger.classList.remove("active");
  spNav.classList.remove("active");
  document.body.style.overflow = "";
});


