import "lazysizes";
import {
  friendsScrollTrigger,
  inviteScrollTrigger,
  timelineScrollTrigger,
} from "./functions/scrollTriggers";
import { timer } from "./functions/timer";

inviteScrollTrigger();
friendsScrollTrigger();
timelineScrollTrigger();

timer("2024/09/01 15:30");
