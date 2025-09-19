// chrome.d.ts
declare interface TranslatorTranslationResult {
  readonly output: string;
}

declare interface Translator {
  translate(input: string): Promise<TranslatorTranslationResult>;
}

declare namespace Translator {
  function availability(options: {
      sourceLanguage: string,
      targetLanguage: string,
    }): Promise<Translator>;

  function create(options: {
    sourceLanguage: string;
    targetLanguage: string;
  }): Promise<Translator>;
}

declare interface Window {
  Translator: typeof Translator;
}