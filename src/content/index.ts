console.log("[Content] Script loaded");

// Listen for mouseup events (user highlights text)
document.addEventListener("mouseup", () => {
  const selected = window.getSelection()?.toString().trim();
  if (selected) {
    chrome.runtime.sendMessage({ type: "SELECTION", text: selected }, (res) => {
      console.log("[Content] Message sent", res);
    });
  }
});
