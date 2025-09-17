// Fires when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  console.log("[Background] Polyglotter installed.");
});

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  console.log("[Background] Received message:", msg);

  if (msg.type === "TRANSLATE") {
    // TODO: Call the translation API
    // For now, just echo the text back
    const translated = `[translated] ${msg.text}`;

    // Send the translation back to user
    sendResponse({ translated });
  }

  // Return true to use sendResponse asynchronously
  return true;
});
