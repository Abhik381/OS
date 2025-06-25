export const createrightMenu = (menuX, menuY) => {
  let existingMenu = document.querySelector(".right-menu");
  existingMenu?.remove();
  let menu = document.createElement("div");
  menu.className = "right-menu";
  menu.innerHTML = `
        <div class="menu-item" id="view"><i class="ri-apps-2-line"></i> View <i class="ri-arrow-right-s-line"></i></div>
        <div class="menu-item" id="Sort by"><i class="ri-arrow-up-down-fill"></i> Sort by <i class="ri-arrow-right-s-line"></i></div>
        <div class="menu-item" id="refresh"><i class="ri-reset-right-line"></i> Refresh</div>
        <div class="menu-item" id="new"><i class="ri-add-circle-line"></i> new <i class="ri-arrow-right-s-line"></i></div>
        <div class="menu-item" id="ds"><i class="ri-computer-line"></i> Display setting</div>
        <div class="menu-item" id="personalize"><i class="ri-brush-ai-line"></i> Personalize</div>
        <div class="menu-item" id="oit"><i class="ri-terminal-box-line"></i> Open in Terminal</div>
        <div class="menu-item" id="smo">Show more options</div>
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
    case "new":
      newFolderCraete();
      break;
    default:
      console.log("Unknown action");
  }
  // coding....
};

const newFolderCraete = () => {
  const windowApps = document.querySelector(".window11_app_place");
  let _id = new Date().getTime();
  const folder =
    `<div class="app ${_id.toString()}"><img src="Asset/folder.png" alt=""><input class="floder_name" id=${_id} type="text" value="new floder" style="width: 60px; background: transparent; color: white; border: none;"></div>`;
  windowApps.innerHTML += folder;
 document.addEventListener("click", (e) => {
  if(e.clientX > 50){
    const newFolder = document.getElementById(_id);
    let app = document.getElementsByClassName(_id.toString())[0];
    let folderName = newFolder.value;
    newFolder.remove();
    app.innerHTML = `<img src="Asset/folder.png" alt="">${folderName}`;
  }
 })
};
