import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const friendsScrollTrigger = () => {
  const mediaTrigger = (
    selector,
    triggerSelector,
    start,
    startScroll,
    end,
    endScroll
  ) => {
    gsap.from(selector, {
      scale: 0.3,
      opacity: 0,
      autoAlpha: 0,
      duration: 0.75,
      scrollTrigger: {
        trigger: triggerSelector,
        start: `${start} ${startScroll}`,
        end: `${end} ${endScroll}`,
        scrub: 1,
        markers: true,
      },
    });
  };
  ScrollTrigger.matchMedia({
    "(min-width: 1025px)": () => {
      mediaTrigger(".friends", ".hero", "top+=20%", "20%", "bottom", "20%");
    },
    "(min-width: 769px) and (max-width: 1024px)": () => {
      mediaTrigger(".friends", ".hero", "top+=30%", "top", "bottom+=20%", "0%");
    },
    "(min-width: 581px) and (max-width: 768px)": () => {
      mediaTrigger(".friends", ".hero", "top+=40%", "top", "bottom", "0%");
    },
    "(min-width: 320px) and (max-width: 580px)": () => {
      mediaTrigger(".friends", ".hero", "top+=50%", "top", "bottom", "0%");
    },
  });
};
export const inviteScrollTrigger = () => {
  const inviteTimeline = gsap.timeline();

  //! Первый элемент
  inviteTimeline.from("#invite1", {
    scale: 0.3,
    rotation: 45,
    autoAlpha: 0,
    duration: 0.75,
    scrollTrigger: {
      animation: inviteTimeline,
      trigger: ".friends",
      start: "top 20%",
      end: "bottom 20%",
      scrub: 1,
    },
  });
  //! Второй элемент
  inviteTimeline.from(
    "#invite2",
    {
      scale: 0.3,
      opacity: 0,
      autoAlpha: 0,
      duration: 0.75,
      scrollTrigger: {
        animation: inviteTimeline,
        trigger: ".friends",
        start: "top 20%",
        end: "bottom 20%",
        scrub: 1,
      },
    },
    "+=.75"
  );
  //! Третий элемент
  inviteTimeline.from(
    "#invite3",
    {
      scale: 0.3,
      opacity: 0,
      autoAlpha: 0,
      duration: 0.75,
      scrollTrigger: {
        animation: inviteTimeline,
        trigger: ".invite",
        start: "top",
        end: "center",
        scrub: 1,
      },
    },
    "+=.75"
  );
  //! Четвертый элемент
  inviteTimeline.from(
    "#invite4",
    {
      scale: 0.3,
      rotation: -45,
      autoAlpha: 0,
      duration: 0.75,
      scrollTrigger: {
        animation: inviteTimeline,
        trigger: ".invite",
        start: "top",
        end: "center",
        scrub: 1,
      },
    },
    "+=.75"
  );
};
