// Fires when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  console.log("[Background] Polyglotter installed.");
});

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  console.log("[Background] Received message:", msg);

  if (msg.type === "TRANSLATE") {

    (async () => {
      let translated = "";

      if ("Translator" in self) {
        try {
          const translator = await Translator.create({
            sourceLanguage: "en",
            targetLanguage: "fr",
          });

          const result = await translator.translate(msg.text);
          translated = `${result}`;
          console.log("[Translator] Translated successful:", translated);
        } catch (error) {
          console.error("[Translator] Translation failed:", error);
          translated = `[translation error] ${msg.text}`;
        }
      } else {
        console.warn("[Translator] API not available. Using fallback.");
        translated = `[fallback] ${msg.text}`;
      }

      console.log("[Sent Response]", translated);
      sendResponse({ translated });
    })();

    return true; // keeps the port open for async work
  }
});