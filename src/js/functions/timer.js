const declOfNum = (n, titles) =>
  titles[
    n % 10 === 1 && n % 100 !== 11
      ? 0
      : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
      ? 1
      : 2
  ];

const createEndTimerDesc = () => {
  const desc = document.createElement("p");
  desc.classList.add("counter__end-timer");
  desc.innerHTML = `
    Спасибо, Вам, что были с нами в этот прекрасный вечер&nbsp;!
  `;

  return desc;
};

export const timer = (deadline) => {
  const counter = document.querySelector(".counter"),
    counterWrap = document.querySelector(".counter__wrap"),
    unitDay = document.querySelector(".timer__unit_day"),
    unitHour = document.querySelector(".timer__unit_hour"),
    unitMin = document.querySelector(".timer__unit_min"),
    unitSec = document.querySelector(".timer__unit_sec"),
    descDay = document.querySelector(".timer__unit_day-desc"),
    descHour = document.querySelector(".timer__unit_hour-desc"),
    descMin = document.querySelector(".timer__unit_min-desc"),
    descSec = document.querySelector(".timer__unit_sec-desc");

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime(),
      dateNow = new Date(),
      timeRemaining = (dateStop - dateNow) / 1000;

    const seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor((timeRemaining / 60 / 60) % 24),
      days = Math.floor((timeRemaining / 60 / 60 / 24) % 365);

    return { timeRemaining, seconds, minutes, hours, days };
  };

  const startTimer = () => {
    const timer = getTimeRemaining();

    unitSec.textContent = timer.seconds;
    unitMin.textContent = timer.minutes;
    unitHour.textContent = timer.hours;
    unitDay.textContent = timer.days;

    descSec.textContent = declOfNum(timer.seconds, [
      "секунда",
      "секунды",
      "секунд",
    ]);
    descMin.textContent = declOfNum(timer.minutes, [
      "минута",
      "минуты",
      "минут",
    ]);
    descHour.textContent = declOfNum(timer.hours, ["час", "часа", "часов"]);
    descDay.textContent = declOfNum(timer.days, ["день", "дня", "дней"]);

    if (timer.timeRemaining > 0) {
      setTimeout(startTimer, 1000);
    } else {
      counterWrap.remove();
      counter.append(createEndTimerDesc());
    }
  };

  startTimer();
};
