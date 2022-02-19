import "../css/main.scss";
import { main } from "./templates/Index";
import { Submit } from "./models";

const AppView = () => {
  document.body.innerHTML = main;
  /*
    initialization/declaration of some of the app level dom elements and variables
  */
  const fileSelector = document.getElementById("fileSelector");
  const jsonSelector = document.getElementById("jsonSelector");
  const imageUploadNode = document.getElementById("image-upload__div");
  const browseNode = document.getElementById("browse");
  const importNode = document.getElementById("import");
  const scaleUpNode = document.getElementById("scale-up");
  const scaleDownNode = document.getElementById("scale-down");
  const moveLeftNode = document.getElementById("move-left");
  const moveRightNode = document.getElementById("move-right");
  const moveUpNode = document.getElementById("move-up");
  const moveDownNode = document.getElementById("move-down");
  const resetNode = document.getElementById("reset");
  const controlsNode = document.querySelectorAll(".canvas-container__controls");
  const submit = new Submit();
  const img = new Image();
  const editorCanvas = document.getElementById("editorCanvas");
  const ctx = editorCanvas.getContext("2d");

  let width, height;
  let imageX = 0;
  let imageY = 0;
  let canvasWidth = 960;
  let canvasHeight = 600;
  let fileName = '';
  browseNode.addEventListener("click", () => {
    fileSelector.click();
  });

  importNode.addEventListener("click", () => {
    jsonSelector.click();
  })

  resetNode.addEventListener("click", () => {
    AppView();
  })

  /*
    method used to render all the canvas controls once the actual canvas is rendered
  */
  const showCanvasControls = () => {
    for (let node of controlsNode) {
      node.style.display = "flex";
    }
  }

  /*
    function to export the image description into a json file
  */
  const exportHandler = () => {
    const exportedJSON = {
      id: new Date(),
      name: fileName,
      imageX,
      imageY,
      width,
      height,
      src: img.src,
    };
    submit.submitButtonHandler(fileName, exportedJSON)
  }
  /*
    event to capture the image file uploaded by the user
  */
  fileSelector.onchange = function (e) {
    const file = e.target.files[0];
    fileName = file.name;
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
          img.src = reader.result;
          img.onload = function () {
            editorCanvas.width = canvasWidth;
            editorCanvas.height = canvasHeight;
            width = img.naturalWidth;
            height = img.naturalHeight;
            editorCanvas.style.backgroundColor = "grey";
            ctx.drawImage(img, imageX, imageY);
          };
          // do your magic here...

          showCanvasControls();
          submit.submitNode.style.display = 'inline-block';
          submit.submitNode.addEventListener('click', exportHandler);
        };
    }
  };

  /*
    event to capture the json file uploaded by the user
  */
  jsonSelector.onchange = function(e) {
    const jsonFile = e.target.files[0];
    fileName = jsonFile.name;
    switch (jsonFile.type) {
      case 'application/json':
        const reader = new FileReader();
        reader.readAsText(jsonFile);
        reader.onload = (ev) => {
          const result = JSON.parse(ev.target.result);
          img.src = result.src;
          img.onload = function () {
            width = result.width;
            height = result.height;
            imageX = result.imageX;
            imageY = result.imageY;
            editorCanvas.style.backgroundColor = "grey";
            editorCanvas.width = canvasWidth;
            editorCanvas.height = canvasHeight;
            ctx.drawImage(img, imageX, imageY, width, height);
            showCanvasControls();
            submit.submitNode.style.display = 'inline-block';
            submit.submitNode.addEventListener('click', exportHandler);
          };
        }
    }
  }

  /*
  canvas controls include the following:
  - scaling up the image by 10 units
  - scaling down the image by 10 units
  - moving up the image by 10 units: only applicable if the bottom border of the image is below the bottom border of canvas
  - moving down the image by 10 units: only applicable if the top border of the image is above the top border of canvas
  - moving left the image by 10 units: only applicable if the right border of image is greater then the right border of canvas
  - moving right the image by 10 units: only applicable if the left border of image is less then the left border of canvas
  */
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

AppView();
