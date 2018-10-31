s = document.createElement("script");

s.src = chrome.extension.getURL("/src/youtubedl.js");
window.addEventListener("message", e => {
  chrome.runtime.sendMessage(e.data);
});
document.head.appendChild(s);
