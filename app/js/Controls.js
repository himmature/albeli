export class Controls {
    scaleUp(context, img, imageX, imageY, width, height) {
        width += 10;
        height += 10;
        context.drawImage(
            img,
            imageX,
            imageY,
            width,
            height
        );
    }
    scaleDown(context, img, imageX, imageY, width, height, canvasWidth, canvasHeight) {
        if(width > canvasWidth && height > canvasHeight) {
            width -= 10;
            height -= 10;
          }
          if(width > canvasWidth) {
            width -= 10;
          } else if(height > canvasHeight) {
            height -= 10;
          }
          context.drawImage(
            img,
            imageX,
            imageY,
            width,
            height
          );
    }
}