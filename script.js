//your JS code here. If required.
let newElement=document.createElement('div');
newElement.id='browser-info';
let browserName=navigator.appName;
let version=navigator.appVersion;
newElement.innerText=`You are using  ${browserName } version   ${version}"`;
document.body.appendChild(newElement);
