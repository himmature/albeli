import "../css/main.scss";
import { main } from "./templates/Index";
import { Controls, Submit } from "./models";

const AppView = () => {
  document.body.innerHTML = main;

  const fileSelector = document.getElementById("fileSelector");
  const editorCanvas = document.getElementById("editorCanvas");
  const imageUploadNode = document.getElementById("image-upload__div");
  const browseNode = document.getElementById("browse");
  const scaleUpNode = document.getElementById("scale-up");
  const scaleDownNode = document.getElementById("scale-down");
  const moveLeftNode = document.getElementById("move-left");
  const moveRightNode = document.getElementById("move-right");
  const moveUpNode = document.getElementById("move-up");
  const moveDownNode = document.getElementById("move-down");
  const submitNode = new Submit();

  browseNode.addEventListener("click", () => {
    fileSelector.click();
  });

  fileSelector.onchange = function (e) {
    const file = e.target.files[0];
    const fileNameNode = document.createElement("p");
    fileNameNode.textContent = `Uploaded File: ${file.name}`;
    fileNameNode.classList.add("file-name");
    imageUploadNode.append(fileNameNode);
    switch (file.type) {
      case "image/jpeg":
      case "image/png":
      case "image/gif":
        // read Image contents from file
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          // create HTMLImageElement holding image data
          const img = new Image();
          img.src = reader.result;
          let width, height, ctx;
          let imageX = 0;
          let imageY = 0;
          let canvasX = 0;
          let canvasY = 0;
          img.onload = function () {
            editorCanvas.width = 600;
            editorCanvas.height = 600;
            ctx = editorCanvas.getContext("2d");
            width = img.naturalWidth;
            height = img.naturalHeight;
            editorCanvas.style.backgroundColor = "grey";
            ctx.drawImage(img, imageX, imageY);
          };
          // do your magic here...
          const controlsNode = document.querySelectorAll(
            ".canvas-container__controls"
          );
          for (let node of controlsNode) {
            node.style.display = "flex";
          }
          submitNode.submitButtonHandler(file.name, {
            id: 1,
            name: "himanshu",
          });
          scaleUpNode.addEventListener("click", (ev) => {
            width += 10;
            height += 10;
            ctx.drawImage(img, imageX, imageY, width, height);
          });

          scaleDownNode.addEventListener("click", (ev) => {
            if (width > editorCanvas.width && height > editorCanvas.height) {
              width -= 10;
              height -= 10;
            }
            if (width > editorCanvas.width) {
              width -= 10;
            } else if (height > editorCanvas.height) {
              height -= 10;
            }
            ctx.drawImage(img, imageX, imageY, width, height);
          });

          moveLeftNode.addEventListener("click", (ev) => {
            let currentX = imageX + width;
            if (currentX > editorCanvas.width) {
              imageX -= 10;
            }
            ctx.drawImage(img, imageX, imageY, width, height);
          });
          moveRightNode.addEventListener("click", (ev) => {
            if (imageX < 0) {
              imageX += 10;
            }
            ctx.drawImage(img, imageX, imageY, width, height);
          });
          moveUpNode.addEventListener("click", (ev) => {
            let currentY = imageY + height;
            if (currentY > editorCanvas.height) {
              imageY -= 10;
            }
            ctx.drawImage(img, imageX, imageY, width, height);
          });
          moveDownNode.addEventListener("click", (ev) => {
            if (imageY < 0) {
              imageY += 10;
            }
            ctx.drawImage(img, imageX, imageY, width, height);
          });
        };
    }
  };
};

AppView();
