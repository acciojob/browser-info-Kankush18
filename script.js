//your JS code here. If required.
var newElement = document.createElement("div");


newElement.id = "browser-info";
let browserName=navigator.appName;
let version=navigator.appVersion;
newElement.textContent = "You are using " + browserName + " version " + version;


document.body.appendChild(newElement);