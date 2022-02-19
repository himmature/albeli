import "../css/main.scss";
import { main } from "./templates/Index";
import { Controls, Submit } from "./models";

const AppView = () => {
  document.body.innerHTML = main;

  const fileSelector = document.getElementById("fileSelector");
  const editorCanvas = document.getElementById("editorCanvas");
  const imageUploadNode = document.getElementById("image-upload__div");
  const browseNode = document.getElementById("browse");

  const submitNode = new Submit();
  const controls = new Controls();

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
          const savedImageJson = {
            id: 1,
            name: "himanshu",
          };
          submitNode.submitButtonHandler(file.name, savedImageJson);

          controls.scaleUpNode.addEventListener("click", () =>
            controls.scaleUpNodeHandler(
              ctx,
              img,
              imageX,
              imageY,
              width,
              height,
              editorCanvas
            )
          );
          controls.scaleDownNode.addEventListener("click", () =>
            controls.scaleDownNodeHandler(
              ctx,
              img,
              imageX,
              imageY,
              width,
              height,
              editorCanvas
            )
          );
          controls.moveLeftNode.addEventListener("click", () =>
            controls.moveLeftNodeHandler(
              ctx,
              img,
              imageX,
              imageY,
              width,
              height,
              editorCanvas
            )
          );
          controls.moveRightNode.addEventListener("click", () =>
            controls.moveRightNodeHandler(
              ctx,
              img,
              imageX,
              imageY,
              width,
              height,
              editorCanvas
            )
          );
          controls.moveUpNode.addEventListener("click", () =>
            controls.moveUpNodeHandler(
              ctx,
              img,
              imageX,
              imageY,
              width,
              height,
              editorCanvas
            )
          );
          controls.moveDownNode.addEventListener("click", () =>
            controls.moveDownNodeHandler(
              ctx,
              img,
              imageX,
              imageY,
              width,
              height,
              editorCanvas
            )
          );
        };
    }
  };
};

AppView();
