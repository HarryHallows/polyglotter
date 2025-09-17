document.addEventListener("mouseup", () => {
  const selected = window.getSelection()?.toString();
  if (selected) {
    chrome.runtime.sendMessage({ type: "SELECTION", text: selected });
  }
});
