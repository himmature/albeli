import { mainCanvas } from "./MainCanvas"
import {canvasControlsPrimary, canvasControlsSecondary} from "./CanvasControls";
import {imageUploadSection} from "./ImageUploadSection";

export const main = `<div class="main-header"><h1>Photo Editor - Created by Himanshu Yawalkar</h1></div>
<div class='image-upload'>
  ${imageUploadSection}
</div>
<div class='canvas-container'>
    ${canvasControlsPrimary}
    ${mainCanvas}
    ${canvasControlsSecondary}
</div>`