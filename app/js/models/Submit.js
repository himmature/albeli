export class Submit {
  constructor() {
    this.submitNode = document.getElementById("submit");
  }
  submitButtonHandler = (fileName, savedImageJson) => {
    this.submitNode.style.display = "inline-block";
    const fName = fileName.substr(0, fileName.lastIndexOf("."));
    this.submitNode.download = `${fName}.json`;
    this.submitNode.href =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(savedImageJson));
  };
}
