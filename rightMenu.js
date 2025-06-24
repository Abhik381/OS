export const createrightMenu = (menuX, menuY) => {
  let existingMenu = document.querySelector(".right-menu");
  existingMenu?.remove();
  let menu = document.createElement("div");
  menu.className = "right-menu";
  menu.innerHTML = `
        <div class="menu-item" id="refresh">Refresh</div>
        <div class="menu-item" id="settings">Settings</div>
        <div class="menu-item" id="help">Help</div>
        <div class="menu-item" id="about">About</div>
    `;
  menu.style.position = "fixed";
  menu.style.left = `${menuX}px`;
  menu.style.top = `${menuY}px`;
  menu.style.backgroundColor = "#fff";
  menu.style.border = "1px solid #ccc";
  document.body.appendChild(menu);
};

export const closeRightMenu = (e) => {
  const existingMenu = document.querySelector(".right-menu");
  let leftCord = existingMenu
    .getAttribute("style")
    .split(";")[1]
    .split(":")[1]
    .split("px")[0];
  let topCord = existingMenu
    .getAttribute("style")
    .split(";")[2]
    .split(":")[1]
    .split("px")[0];

  if (existingMenu) {
    if (
      e.clientX < parseInt(leftCord) ||
      e.clientX > parseInt(leftCord) + existingMenu.offsetWidth ||
      e.clientY < parseInt(topCord) ||
      e.clientY > parseInt(topCord) + existingMenu.offsetHeight
    ) {
      existingMenu?.remove();
      return;
    }
  }
};

export const rightMenuButtonClickoperation = (btnId) => {
  switch (btnId) {
    case "refresh":
      window.location.reload();
      break;
    case "settings":
      console.log("Settings clicked");
      // Add your settings logic here
      break;
    case "help":
      console.log("Help clicked");
      // Add your help logic here
      break;
    case "about":
      console.log("About clicked");
      // Add your about logic here
      break;
    default:
      console.log("Unknown action");
  }
  // coding....
};
