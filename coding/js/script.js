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
});
