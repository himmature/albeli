/*
Submit class encapsulating the submit button on the dom and providing the functionalities related to submit button such as:
 - creating a dummy link to download the exported json file
 - creating the download url and attaching it to the hyperlink
 - downloading the json file
*/
export class Submit {
  constructor() {
    this.submitNode = document.getElementById("submit");
  }
  submitButtonHandler = (fileName, savedImageJson) => {
    const fName = fileName.substr(0, fileName.lastIndexOf("."));
    const submitLink = document.getElementById("submit-link");
    submitLink.download = `${fName}.json`;
    submitLink.href =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(savedImageJson));
    submitLink.click();
  };
}
