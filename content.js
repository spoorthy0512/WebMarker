chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const selection = window.getSelection();

  // 1. Handle Highlighting logic
  if (request.action === "highlight" && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.className = "my-custom-highlight-element"; 
    
    chrome.storage.local.get(['highlightColor'], (result) => {
      const chosenColor = result.highlightColor || '#ffeb3b';
      span.style.backgroundColor = chosenColor;
      span.style.color = '#000000'; 
      span.style.fontWeight = 'bold';
      
      try {
        range.surroundContents(span);
      } catch (e) {
        console.error("Highlighting crossed structural elements:", e);
      }
    });
  }
  
  // 2. Handle Text Scraping logic for file generation
  if (request.action === "getHighlights") {
    const elements = document.querySelectorAll(".my-custom-highlight-element");
    const highlightTexts = Array.from(elements).map(el => el.innerText.trim());
    sendResponse({ highlights: highlightTexts });
  }
  
  return true; 
});
