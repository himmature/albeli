import { mainCanvas } from "./MainCanvas"
import {canvasControlsPrimary, canvasControlsSecondary} from "./CanvasControls";
import {imageUploadSection} from "./ImageUploadSection";

export const main = `<h1>Photo Editor</h1>
<form class='image-upload' action="#">
  ${imageUploadSection}
</form>
<div class='canvas-container'>
    ${canvasControlsPrimary}
    ${mainCanvas}
    ${canvasControlsSecondary}
</div>`