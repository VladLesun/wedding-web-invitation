import "lazysizes";
import {
  detailsScrollTrigger,
  friendsScrollTrigger,
  inviteScrollTrigger,
  placeScrollTrigger,
  questionnaireScrollTrigger,
  timelineScrollTrigger,
  timerScrollTrigger,
} from "./functions/scrollTriggers";
import { timer } from "./functions/timer";

inviteScrollTrigger();
friendsScrollTrigger();
timelineScrollTrigger();
detailsScrollTrigger();
placeScrollTrigger();
questionnaireScrollTrigger();
timerScrollTrigger();

timer("2024/09/01 15:30");
