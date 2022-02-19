export class Controls {
  constructor() {
    this.parameters = {
      imageX: 0,
      imageY: 0,
      width: 0,
      height: 0,
      editorCanvas: {
        width: 0,
        height: 0,
      },
    };
    this.scaleUpNode = document.getElementById("scale-up");
    this.scaleDownNode = document.getElementById("scale-down");
    this.moveLeftNode = document.getElementById("move-left");
    this.moveRightNode = document.getElementById("move-right");
    this.moveUpNode = document.getElementById("move-up");
    this.moveDownNode = document.getElementById("move-down");
  }
  addParameters(imageX, imageY, width, height, editorCanvas) {
    this.parameters.imageX += imageX;
    this.parameters.imageY += imageY;
    this.parameters.width += width;
    this.parameters.height += height;
    this.parameters.editorCanvas.width += editorCanvas.width;
    this.parameters.editorCanvas.height += editorCanvas.height;
  }

  scaleUpNodeHandler = (
    ctx,
    img,
    imageX,
    imageY,
    width,
    height,
    editorCanvas
  ) => {
    width += 10;
    height += 10;
    ctx.drawImage(img, imageX, imageY, width, height);
  };
  scaleDownNodeHandler = (
    ctx,
    img,
    imageX,
    imageY,
    width,
    height,
    editorCanvas
  ) => {
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
  };
  moveLeftNodeHandler = (
    ctx,
    img,
    imageX,
    imageY,
    width,
    height,
    editorCanvas
  ) => {
    let currentX = imageX + width;
    if (currentX > editorCanvas.width) {
      imageX -= 10;
    }
    ctx.drawImage(img, imageX, imageY, width, height);
  };
  moveRightNodeHandler = (
    ctx,
    img,
    imageX,
    imageY,
    width,
    height,
    editorCanvas
  ) => {
    if (imageX < 0) {
      imageX += 10;
    }
    ctx.drawImage(img, imageX, imageY, width, height);
  };
  moveUpNodeHandler = (
    ctx,
    img,
    imageX,
    imageY,
    width,
    height,
    editorCanvas
  ) => {
    let currentY = imageY + height;
    if (currentY > editorCanvas.height) {
      imageY -= 10;
    }
    ctx.drawImage(img, imageX, imageY, width, height);
  };
  moveDownNodeHandler = (
    ctx,
    img,
    imageX,
    imageY,
    width,
    height,
    editorCanvas
  ) => {
    if (imageY < 0) {
      imageY += 10;
    }
    ctx.drawImage(img, imageX, imageY, width, height);
  };
}
