$(function () {
  const visualTL = gsap.timeline({
    // 타임라인의 기본 세팅
    defaults: { duration: 2, ease: "power4.inOut" },
  });

  //   비주얼 화면 가리기
  visualTL.set(".visual .slide2", { opacity: 0 });

  visualTL.from(".visual", { scale: 0.8 });
  visualTL.from(".visual .slide", { scale: 1.5 }, "<" /* 동시에 시작 */);

  visualTL.to(".visual .slide1", {
    autoAlpha: 0,
    duration: 3,
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
  });

  visualTL.to(
    ".visual .slide2",
    {
      autoAlpha: 1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    },
    "<"
  );

  /* 탭메뉴 활성 */
  const $tabMenu = $(".tab-menu > a");
  const $tabContent = $(".tab-con > div");

  //   console.log($tabMenu, $tabContent);

  $tabContent.hide().eq(0).show();

  $tabMenu.on("click", function (e) {
    e.preventDefault();

    const tIdx = $(this).index();

    // console.log(tIdx);

    $tabMenu.removeClass("on").eq(tIdx).addClass("on");
    $tabContent.hide().eq(tIdx).show();
  });

  const $chaSlider = new Swiper(".testSlider1", {
    slidesPerView: 3,
    spaceBetween: 10,
    // autoplay: true,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".btn.btn-next",
      prevEl: ".btn.btn-prev",
    },

    observer: true,
    observerParents: true,
  });

  //   동일한 형태의 슬라이드의 경우, 공통의 이름으로 한 번에 설정 적용
  const $testSLider2 = new Swiper(".testSlider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    observer: true,
    observeParents: true,
  });

  /* 명대사 섹션 */
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: "movie-famousline",
    start: "top top",
    end: "10%",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      document.querySelector(
        ".movie-famousline"
      ).style.background = `rgba(0,0,0 ${progress})`;
    },
  });

  //   배경색상전환
  ScrollTrigger.create({
    trigger: ".movie-famousline",
    start: "10%",
    end: "bottom bottom",
    markers: true,
    scrub: true,

    onUpdate: (self) => {
      const progress = self.progress;
      const startColor = { r: 0, g: 0, b: 0 };
      const endColor = { r: 74, g: 144, b: 226 };

      const currentColor = {
        r: Math.round(startColor.r + (endColor.r - startColor.r) * progress),
        g: Math.round(startColor.g + (endColor.g - startColor.g) * progress),
        b: Math.round(startColor.b + (endColor.b - startColor.b) * progress),
      };

      document.querySelector(
        ".movie-famousline"
      ).style.background = `rgb(${currentColor.r}, ${currentColor.g},${currentColor.b})`;
    },
  });

  const lines = document.querySelectorAll(".quote-line");
  lines.forEach((line, index) => {
    gsap.fromTo(
      line,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".quote-con",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  });

  /*   const teardrop = document.querySelector(".tear");
  gsap.to(teardrop, {
    y: 800,
    duration: 2,
    repeat: -1,
    ease: "power1.in",
  }); */
});
