document.getElementById("start").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "START" }, (response) => {
    });
  });
};
