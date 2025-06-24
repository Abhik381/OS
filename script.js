import {
  createrightMenu,
  closeRightMenu,
  rightMenuButtonClickoperation,
} from "./rightMenu.js";

import { weatherAPI } from "./weatherAPI.js";
import { currentTime } from "./time.js";

const rightMenuOpen = () => {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    createrightMenu(event.clientX, event.clientY);
  });
};

const rightMenuClose = () => {
  document.addEventListener("click", (e) => {
    e.preventDefault();
    closeRightMenu(e);
  });
};

document.addEventListener("click", (e) => {
  const btnId = e.target.id;
  rightMenuButtonClickoperation(btnId);
});

const getWeather = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        let temp = await weatherAPI(latitude, longitude);
        console.log(temp);

        document.querySelector(".window11_menubar_left").textContent =
          temp + "°C";
      },
      (error) => {
        console.error(error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};

const currentTimeDisplay = () => {
  let { hours, minutes, seconds, day, month, year } = currentTime();
  document.querySelector(".window11_menubar_right").textContent =
    hours + ":" + minutes  + "\n" + day + "-" + month + "-" + year;
  setInterval(currentTimeDisplay, 1000);
};

rightMenuOpen();
rightMenuClose();
getWeather();
currentTimeDisplay(); // Initial call to display time immediately
