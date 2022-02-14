import "../css/main.scss";

const appViewHTML = `<h1>Photo Editor</h1>
<form class='image-upload' action="#">
    <div id='image-upload__div'>
        <h3 for="fileSelector">Select an Image file to Upload</h3>
        <input type="file" id="fileSelector" hidden/>
        <button id='browse-button'>Browse</button>
    </div>
</form>

<div class='canvas-container'>
    <canvas id="editorCanvas" width="1440" height="960"></canvas>
</div>`;

const AppView = () => {
  document.body.innerHTML = appViewHTML;

  // grab DOM elements inside index.html
  const fileSelector = document.getElementById("fileSelector");
  const editorCanvas = document.getElementById("editorCanvas");
  const imageUploadNode = document.getElementById("image-upload__div");

  document.getElementById("browse-button").addEventListener("click", () => {
    fileSelector.click();
  });
  fileSelector.onchange = function (e) {
    const file = e.target.files[0];
    console.log(file);
    const fileNameNode = document.createElement("span");
    fileNameNode.textContent = file.name;
    fileNameNode.classList.add("file-name");
    imageUploadNode.append(fileNameNode);
    switch (file.type) {
      case "image/jpeg":
      case "image/png":
      case "image/gif":
        // read Image contents from file
        const reader = new FileReader();
        reader.onload = function (e) {
          // create HTMLImageElement holding image data
          const img = new Image();
          img.src = reader.result;

          img.onload = function () {
            // grab some data from the image
            const width = img.naturalWidth;
            const height = img.naturalHeight;

            // editorCanvas.width = 500;
            // editorCanvas.height = (500 * height) / width;
            const ctx = editorCanvas.getContext("2d");
            ctx.drawImage(
              img,
              0,
              0,
              width,
              height,
              0,
              0,
              editorCanvas.width,
              editorCanvas.height
            );
          };
          // do your magic here...
        };
        reader.readAsDataURL(file);
    }
  };
};

AppView();
