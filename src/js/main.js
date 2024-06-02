import "lazysizes";
import {
  friendsScrollTrigger,
  inviteScrollTrigger,
} from "./functions/scrollTrigger";
import { timer } from "./functions/timer";

inviteScrollTrigger();
friendsScrollTrigger();

timer("2024/09/01 15:30");
