const colorSelect = document.getElementById('colorSelect');
const downloadBtn = document.getElementById('downloadBtn');

// Load saved color preference on popup open
chrome.storage.local.get(['highlightColor'], (result) => {
  if (result.highlightColor) colorSelect.value = result.highlightColor;
});

// Save color changes instantly
colorSelect.addEventListener('input', () => {
  chrome.storage.local.set({ highlightColor: colorSelect.value });
});

// Request highlights from the page and trigger text file download
downloadBtn.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs[0]) return;
    chrome.tabs.sendMessage(tabs[0].id, { action: "getHighlights" }, (response) => {
      if (response && response.highlights && response.highlights.length > 0) {
        const textContent = response.highlights.join("\n\n");
        
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textContent));
        element.setAttribute('download', 'web_highlights.txt');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      } else {
        alert("No highlights found on this page to export!");
      }
    });
  });
});
