chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "highlightText",
    title: "Highlight Selection",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "highlightText") {
    chrome.tabs.sendMessage(tab.id, { action: "highlight" });
  }
});
