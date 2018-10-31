console.log("i am in");
chrome.runtime.onMessage.addListener((request, sender, callback) => {
  console.log("asdas", sender.tab.title);
  let typ = request.type.split(";");
  let type = typ[0].split("/");
  chrome.downloads.download({
    url: request.url,
    filename: sender.tab.title.slice(0, 20) + "." + type[1],

    saveAs: false
  });
});
