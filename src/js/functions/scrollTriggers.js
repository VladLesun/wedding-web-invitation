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
  },
  inviteScrollTrigger = () => {
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
  },
  timelineScrollTrigger = () => {
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
        mediaTrigger(
          "#timeline1",
          ".invite",
          "bottom+=5%",
          "top",
          "bottom+=5%"
        );
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
        mediaTrigger(
          "#timeline2",
          ".invite",
          "bottom+=5%",
          "top",
          "bottom+=5%"
        );
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
  },
  detailsScrollTrigger = () => {
    const mediaTriggerTitle = (start, startScroll, end) => {
      gsap.from(".details__title", {
        scale: 0.3,
        opacity: 0,
        autoAlpha: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".timeline",
          start: `${start} ${startScroll}`,
          end: `${end}`,
        },
      });
    };
    const mediaTriggerDesc = (start, startScroll, end) => {
      gsap.from(".details__desc", {
        scale: 0.3,
        opacity: 0,
        autoAlpha: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".timeline",
          start: `${start} ${startScroll}`,
          end: `${end}`,
        },
      });
    };
    const detailsTimeline = gsap.timeline();
    const mediaTrigger = (
      selector,
      triggerSelector,
      left,
      start,
      startScroll,
      end
    ) => {
      detailsTimeline.from(selector, {
        x: left,
        opacity: 0,
        autoAlpha: 0,
        duration: 2,
        scrollTrigger: {
          animation: detailsTimeline,
          trigger: triggerSelector,
          start: `${start} ${startScroll}`,
          end: `${end}`,
          scrub: 1,
        },
      });
    };

    ScrollTrigger.matchMedia({
      "(min-width: 1025px)": () => {
        mediaTriggerTitle("center+=20%", "top", "bottom");
        mediaTriggerDesc("center+=20%", "top", "bottom");
        mediaTrigger(
          ".details__item_first",
          ".timeline",
          "-200",
          "center+=20%",
          "top",
          "bottom"
        );
        mediaTrigger(
          ".details__item_second",
          ".timeline",
          "-400",
          "center+=20%",
          "top",
          "bottom"
        );
        mediaTrigger(
          ".details__item_third",
          ".timeline",
          "-600",
          "center+=20%",
          "top",
          "bottom"
        );
        mediaTrigger(
          ".details__item_fourth",
          ".timeline",
          "-800",
          "center+=20%",
          "top",
          "bottom"
        );
        mediaTrigger(
          ".details__item_fifth",
          ".timeline",
          "-1000",
          "center+=20%",
          "top",
          "bottom"
        );
        mediaTrigger(
          ".details__item_sixth",
          ".timeline",
          "-1200",
          "center+=20%",
          "top",
          "bottom"
        );
      },
      "(min-width: 761px) and (max-width: 1024px)": () => {
        mediaTriggerTitle("center+=20%", "top", "bottom");
        mediaTriggerDesc("center+=20%", "top", "bottom");
        mediaTrigger(
          ".details__item_first",
          ".timeline",
          "-200",
          "center+=20%",
          "top",
          "bottom"
        );
        mediaTrigger(
          ".details__item_second",
          ".timeline",
          "-400",
          "center+=20%",
          "top",
          "bottom"
        );
        mediaTrigger(
          ".details__item_third",
          ".timeline",
          "-600",
          "center+=20%",
          "top",
          "bottom"
        );
        mediaTrigger(
          ".details__item_fourth",
          ".timeline",
          "-800",
          "center+=20%",
          "top",
          "bottom"
        );
        mediaTrigger(
          ".details__item_fifth",
          ".timeline",
          "-1000",
          "center+=20%",
          "top",
          "bottom"
        );
        mediaTrigger(
          ".details__item_sixth",
          ".timeline",
          "-1200",
          "center+=20%",
          "top",
          "bottom"
        );
      },
      "(min-width: 581px) and (max-width: 760px)": () => {
        mediaTriggerTitle("center+=30%", "top", "bottom+=25%");
        mediaTriggerDesc("center+=30%", "top", "bottom+=25%");
        mediaTrigger(
          ".details__item_first",
          ".timeline",
          "-200",
          "center+=30%",
          "top",
          "bottom+=25%"
        );
        mediaTrigger(
          ".details__item_second",
          ".timeline",
          "-400",
          "center+=30%",
          "top",
          "bottom+=25%"
        );
        mediaTrigger(
          ".details__item_third",
          ".timeline",
          "-600",
          "center+=30%",
          "top",
          "bottom+=25%"
        );
        mediaTrigger(
          ".details__item_fourth",
          ".timeline",
          "-800",
          "center+=30%",
          "top",
          "bottom+=25%"
        );
        mediaTrigger(
          ".details__item_fifth",
          ".timeline",
          "-1000",
          "center+=30%",
          "top",
          "bottom+=25%"
        );
        mediaTrigger(
          ".details__item_sixth",
          ".timeline",
          "-1200",
          "center+=30%",
          "top",
          "bottom+=25%"
        );
      },
      "(min-width: 320px) and (max-width: 580px)": () => {
        mediaTriggerTitle("top+=20%", "top", "bottom-=10%");
        mediaTriggerDesc("top+=20%", "top", "bottom-=10%");
        mediaTrigger(
          ".details__item_first",
          ".timeline",
          "-200",
          "top+=20%",
          "top",
          "bottom-=10%"
        );
        mediaTrigger(
          ".details__item_second",
          ".timeline",
          "-400",
          "top+=20%",
          "top",
          "bottom-=10%"
        );
        mediaTrigger(
          ".details__item_third",
          ".timeline",
          "-600",
          "top+=20%",
          "top",
          "bottom-=10%"
        );
        mediaTrigger(
          ".details__item_fourth",
          ".timeline",
          "-800",
          "top+=20%",
          "top",
          "bottom-=10%"
        );
        mediaTrigger(
          ".details__item_fifth",
          ".timeline",
          "-1000",
          "top+=20%",
          "top",
          "bottom-=10%"
        );
        mediaTrigger(
          ".details__item_sixth",
          ".timeline",
          "-1200",
          "top+=20%",
          "top",
          "bottom-=10%"
        );
      },
    });
  },
  placeScrollTrigger = () => {
    const mediaTriggerWrap = (triggerSelector, start, startScroll, end) => {
      gsap.from(".place__wrap", {
        scale: 0.4,
        opacity: 0,
        autoAlpha: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: triggerSelector,
          start: `${start} ${startScroll}`,
          end: `${end}`,
          scrub: 1,
        },
      });
    };

    ScrollTrigger.matchMedia({
      "(min-width: 761px)": () => {
        mediaTriggerWrap(".details", "top", "top", "bottom");
      },
      "(min-width: 581px) and (max-width: 760px)": () => {
        mediaTriggerWrap(".details", "60%", "0", "bottom+=70%");
      },
      "(min-width: 320px) and (max-width: 580px)": () => {
        mediaTriggerWrap(".timeline__list", "top", "top", "bottom");
      },
    });
  },
  questionnaireScrollTrigger = () => {
    const timeline = gsap.timeline();
    const mediaTrigger = (
      selector,
      triggerSelector,
      start,
      startScroll,
      end
    ) => {
      timeline.from(selector, {
        scale: 0.5,
        opacity: 0,
        autoAlpha: 0,
        duration: 2,
        scrollTrigger: {
          animation: timeline,
          trigger: triggerSelector,
          start: `${start} ${startScroll}`,
          end: `${end}`,
          scrub: 1,
        },
      });
    };

    ScrollTrigger.matchMedia({
      "(min-width: 1025px)": () => {
        mediaTrigger(
          ".questionnaire__title",
          ".place",
          "center",
          "top",
          "bottom+=30%"
        );
        mediaTrigger(
          ".questionnaire__desc-strong",
          ".place",
          "center+=30$",
          "top",
          "bottom+=40%"
        );
        mediaTrigger(
          ".questionnaire__link",
          ".place",
          "center+=40$",
          "top",
          "bottom+=50%"
        );
      },
      "(min-width: 761px) and (max-width: 1024px)": () => {
        mediaTrigger(
          ".questionnaire__title",
          ".place",
          "top+=40%",
          "top",
          "bottom+=30%"
        );
        mediaTrigger(
          ".questionnaire__desc-strong",
          ".place",
          "top+=60%",
          "top",
          "bottom+=40%"
        );
        mediaTrigger(
          ".questionnaire__link",
          ".place",
          "top+=80%",
          "top",
          "bottom+=50%"
        );
      },
      "(min-width: 581px) and (max-width: 760px)": () => {
        mediaTrigger(
          ".questionnaire__title",
          ".place",
          "bottom",
          "top",
          "bottom+=40%"
        );
        mediaTrigger(
          ".questionnaire__desc-strong",
          ".place",
          "bottom+=10$",
          "top",
          "bottom+=40%"
        );
        mediaTrigger(
          ".questionnaire__link",
          ".place",
          "bottom+=30$",
          "top",
          "bottom+=60%"
        );
      },
      "(min-width: 320px) and (max-width: 580px)": () => {
        mediaTrigger(
          ".questionnaire__title",
          ".details",
          "top",
          "top",
          "bottom"
        );
        mediaTrigger(
          ".questionnaire__desc-strong",
          ".details",
          "top",
          "top",
          "bottom"
        );
        mediaTrigger(
          ".questionnaire__link",
          ".details",
          "top",
          "top",
          "bottom"
        );
      },
    });
  },
  timerScrollTrigger = () => {
    const timerTimeline = gsap.timeline();
    const mediaTrigger = (id, selector, left, start, startScroll, end) => {
      timerTimeline.from(id, {
        x: left,
        opacity: 0,
        autoAlpha: 0,
        duration: 2,
        scrollTrigger: {
          animation: timerTimeline,
          trigger: selector,
          start: `${start} ${startScroll}`,
          end: `${end}`,
          scrub: 1,
        },
      });
    };

    ScrollTrigger.matchMedia({
      "(min-width: 1025px)": () => {
        mediaTrigger(
          "#timer-day",
          ".questionnaire",
          "-200",
          "top+=10%",
          "top",
          "bottom+=9%"
        );
        mediaTrigger(
          "#timer-hour",
          ".questionnaire",
          "-400",
          "top+=10%",
          "top",
          "bottom+=9%"
        );
        mediaTrigger(
          "#timer-min",
          ".questionnaire",
          "-600",
          "top+=10%",
          "top",
          "bottom+=9%"
        );
        mediaTrigger(
          "#timer-sec",
          ".questionnaire",
          "-800",
          "top+=10%",
          "top",
          "bottom+=9%"
        );
      },
      "(min-width: 761px) and (max-width: 1024px)": () => {
        mediaTrigger(
          "#timer-day",
          ".questionnaire",
          "-200",
          "top+=10%",
          "top",
          "bottom+=2%"
        );
        mediaTrigger(
          "#timer-hour",
          ".questionnaire",
          "-400",
          "top+=10%",
          "top",
          "bottom+=2%"
        );
        mediaTrigger(
          "#timer-min",
          ".questionnaire",
          "-600",
          "top+=10%",
          "top",
          "bottom+=2%"
        );
        mediaTrigger(
          "#timer-sec",
          ".questionnaire",
          "-800",
          "top+=10%",
          "top",
          "bottom+=2%"
        );
      },
      "(min-width: 581px) and (max-width: 760px)": () => {
        mediaTrigger(
          "#timer-day",
          ".questionnaire",
          "-200",
          "top",
          "top",
          "bottom+=20%"
        );
        mediaTrigger(
          "#timer-hour",
          ".questionnaire",
          "-400",
          "top",
          "top",
          "bottom+=20%"
        );
        mediaTrigger(
          "#timer-min",
          ".questionnaire",
          "-600",
          "top",
          "top",
          "bottom+=20%"
        );
        mediaTrigger(
          "#timer-sec",
          ".questionnaire",
          "-800",
          "top",
          "top",
          "bottom+=20%"
        );
      },
      "(min-width: 411px) and (max-width: 580px)": () => {
        mediaTrigger(
          "#timer-day",
          ".details",
          "-200",
          "top",
          "top",
          "center+=12%"
        );
        mediaTrigger(
          "#timer-hour",
          ".details",
          "-400",
          "top",
          "top",
          "center+=12%"
        );
        mediaTrigger(
          "#timer-min",
          ".details",
          "-600",
          "top",
          "top",
          "center+=12%"
        );
        mediaTrigger(
          "#timer-sec",
          ".details",
          "-800",
          "top",
          "top",
          "center+=12%"
        );
      },
      "(min-width: 320px) and (max-width: 410px)": () => {
        mediaTrigger("#timer-day", ".details", "-200", "top", "top", "bottom");
        mediaTrigger("#timer-hour", ".details", "-400", "top", "top", "bottom");
        mediaTrigger("#timer-min", ".details", "-600", "top", "top", "bottom");
        mediaTrigger("#timer-sec", ".details", "-800", "top", "top", "bottom");
      },
    });
  };
