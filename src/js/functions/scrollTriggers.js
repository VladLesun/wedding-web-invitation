import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const friendsScrollTrigger = () => {
  const mediaTrigger = (start, startScroll, end) => {
    gsap.from(".friends", {
      scale: 0.3,
      opacity: 0,
      autoAlpha: 0,
      duration: 0.75,
      scrollTrigger: {
        trigger: ".hero",
        start: `${start} ${startScroll}`,
        end: `${end}`,
      },
    });
  };
  ScrollTrigger.matchMedia({
    "(min-width: 1025px)": () => {
      mediaTrigger("top+=20%", "20%", "bottom");
    },
    "(min-width: 769px) and (max-width: 1024px)": () => {
      mediaTrigger("top+=30%", "top", "bottom+=20%");
    },
    "(min-width: 581px) and (max-width: 768px)": () => {
      mediaTrigger("top+=40%", "top", "bottom");
    },
    "(min-width: 320px) and (max-width: 580px)": () => {
      mediaTrigger("top", "top+=20%", "bottom");
    },
  });
};
export const inviteScrollTrigger = () => {
  const inviteTimeline = gsap.timeline();

  const mediaTrigger = (id, selector, start, startScroll, end) => {
    inviteTimeline.from(id, {
      scale: 0.3,
      opacity: 0,
      autoAlpha: 0,
      duration: 2,
      scrollTrigger: {
        animation: inviteTimeline,
        trigger: selector,
        start: `${start} ${startScroll}`,
        end: `${end}`,
        scrub: 1,
      },
    });
  };

  ScrollTrigger.matchMedia({
    "(min-width: 1025px)": () => {
      //! Первый элемент
      mediaTrigger("#invite1", ".hero", "center+=20%", "top", "bottom+=20%");
      //! Четвертый элемент
      mediaTrigger("#invite4", ".hero", "center+=60%", "top", "bottom+=60%");
    },
    "(min-width: 761px) and (max-width: 1024px)": () => {
      //! Первый элемент
      mediaTrigger("#invite1", ".hero", "center+=15%", "top", "bottom+=15%");
      //! Четвертый элемент
      mediaTrigger("#invite4", ".hero", "center+=50%", "top", "bottom+=50%");
    },
    "(min-width: 581px) and (max-width: 760px)": () => {
      //! Первый элемент
      mediaTrigger("#invite1", ".friends", "top", "top", "bottom+=40%");
      //! Четвертый элемент
      mediaTrigger("#invite4", ".invite", "top+=40%", "top", "center+=25%");
    },
    "(min-width: 320px) and (max-width: 580px)": () => {
      //! Первый элемент
      mediaTrigger("#invite1", ".friends", "top", "top", "bottom+=25%");
      //! Четвертый элемент
      mediaTrigger("#invite4", ".invite", "top+=30%", "top", "center+=10%");
    },
  });
};
export const timelineScrollTrigger = () => {
  const mediaTriggerTitle = (start, startScroll, end) => {
    gsap.from(".timeline__title", {
      scale: 0.3,
      opacity: 0,
      autoAlpha: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".invite",
        start: `${start} ${startScroll}`,
        end: `${end}`,
        scrub: 1,
      },
    });
  };
  const timeline = gsap.timeline();
  const mediaTrigger = (id, selector, start, startScroll, end) => {
    timeline.from(id, {
      y: "-200",
      opacity: 0,
      autoAlpha: 0,
      duration: 2,
      scrollTrigger: {
        animation: timeline,
        trigger: selector,
        start: `${start} ${startScroll}`,
        end: `${end}`,
        scrub: 1,
        markers: true,
      },
    });
  };

  ScrollTrigger.matchMedia({
    "(min-width: 1025px)": () => {
      mediaTriggerTitle("bottom", "top", "bottom");
      mediaTrigger(
        "#timeline1",
        ".invite",
        "bottom+=20%",
        "top",
        "bottom+=20%"
      );
      mediaTrigger(
        "#timeline2",
        ".invite",
        "bottom+=40%",
        "top",
        "bottom+=40%"
      );
      mediaTrigger(
        "#timeline3",
        ".invite",
        "bottom+=60%",
        "top",
        "bottom+=60%"
      );
      mediaTrigger(
        "#timeline4",
        ".invite",
        "bottom+=80%",
        "top",
        "bottom+=80%"
      );
    },
    "(min-width: 761px) and (max-width: 1024px)": () => {
      mediaTriggerTitle("center", "top", "center");
      mediaTrigger("#timeline1", ".invite", "bottom+=5%", "top", "bottom+=5%");
      mediaTrigger(
        "#timeline2",
        ".invite",
        "bottom+=20%",
        "top",
        "bottom+=20%"
      );
      mediaTrigger(
        "#timeline3",
        ".invite",
        "bottom+=35%",
        "top",
        "bottom+=35%"
      );
      mediaTrigger(
        "#timeline4",
        ".invite",
        "bottom+=50%",
        "top",
        "bottom+=50%"
      );
    },
    "(min-width: 581px) and (max-width: 760px)": () => {
      mediaTriggerTitle("center+=32%", "top", "center+=32%");
      mediaTrigger("#timeline1", ".invite", "bottom+=5", "top", "bottom+=5");
      mediaTrigger("#timeline2", ".invite", "bottom+=5%", "top", "bottom+=5%");
      mediaTrigger(
        "#timeline3",
        ".invite",
        "bottom+=15%",
        "top",
        "bottom+=15%"
      );
      mediaTrigger(
        "#timeline4",
        ".invite",
        "bottom+=25%",
        "top",
        "bottom+=25%"
      );
    },
    "(min-width: 320px) and (max-width: 580px)": () => {
      mediaTriggerTitle("center-=5%", "top", "center-=5%");
      mediaTrigger(
        "#timeline1",
        ".invite",
        "center+=18%",
        "top",
        "center+=18%"
      );
      mediaTrigger(
        "#timeline2",
        ".invite",
        "center+=28%",
        "top",
        "center+=28%"
      );
      mediaTrigger(
        "#timeline3",
        ".invite",
        "center+=38%",
        "top",
        "center+=38%"
      );
      mediaTrigger(
        "#timeline4",
        ".invite",
        "center+=48%",
        "top",
        "center+=48%"
      );
    },
  });
};
