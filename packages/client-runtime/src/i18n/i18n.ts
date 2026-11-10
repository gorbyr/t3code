import type { UiLanguage } from "@t3tools/contracts";

import {
  enMessages as chatEn,
  jaMessages as chatJa,
  zhHansMessages as chatZh,
} from "./messagesChat.ts";
import {
  enMessages as diffsEn,
  jaMessages as diffsJa,
  zhHansMessages as diffsZh,
} from "./messagesDiffs.ts";
import {
  enMessages as generalEn,
  jaMessages as generalJa,
  zhHansMessages as generalZh,
} from "./messagesGeneral.ts";
import {
  enMessages as threadsEn,
  jaMessages as threadsJa,
  zhHansMessages as threadsZh,
} from "./messagesThreads.ts";
import {
  enMessages as settingsProvidersEn,
  jaMessages as settingsProvidersJa,
  zhHansMessages as settingsProvidersZh,
} from "./messagesSettingsProviders.ts";
import {
  enMessages as settingsCodeEn,
  jaMessages as settingsCodeJa,
  zhHansMessages as settingsCodeZh,
} from "./messagesSettingsCode.ts";
import {
  enMessages as settingsSystemEn,
  jaMessages as settingsSystemJa,
  zhHansMessages as settingsSystemZh,
} from "./messagesSettingsSystem.ts";
import {
  enMessages as chatUiEn,
  jaMessages as chatUiJa,
  zhHansMessages as chatUiZh,
} from "./messagesChatUi.ts";
import {
  enMessages as appAEn,
  jaMessages as appAJa,
  zhHansMessages as appAZh,
} from "./messagesAppA.ts";
import {
  enMessages as appBEn,
  jaMessages as appBJa,
  zhHansMessages as appBZh,
} from "./messagesAppB.ts";
import {
  enMessages as reviewEn,
  jaMessages as reviewJa,
  zhHansMessages as reviewZh,
} from "./messagesReview.ts";
import {
  enMessages as deviceEn,
  jaMessages as deviceJa,
  zhHansMessages as deviceZh,
} from "./messagesDevice.ts";
import {
  enMessages as voiceSettingsEn,
  jaMessages as voiceSettingsJa,
  zhHansMessages as voiceSettingsZh,
} from "./messagesVoiceSettings.ts";
import {
  enMessages as voiceChatEn,
  jaMessages as voiceChatJa,
  zhHansMessages as voiceChatZh,
} from "./messagesVoiceChat.ts";
import {
  enMessages as voiceSpeechEn,
  jaMessages as voiceSpeechJa,
  zhHansMessages as voiceSpeechZh,
} from "./messagesVoiceSpeech.ts";
import {
  enMessages as miscEn,
  jaMessages as miscJa,
  zhHansMessages as miscZh,
} from "./messagesMisc.ts";
import {
  enMessages as runtimeEn,
  jaMessages as runtimeJa,
  zhHansMessages as runtimeZh,
} from "./messagesRuntime.ts";
import {
  enMessages as interfaceEn,
  jaMessages as interfaceJa,
  zhHansMessages as interfaceZh,
} from "./messages.ts";
import {
  enMessages as navEn,
  jaMessages as navJa,
  zhHansMessages as navZh,
} from "./messagesSettingsNav.ts";
import {
  enMessages as typographyEn,
  jaMessages as typographyJa,
  zhHansMessages as typographyZh,
} from "./messagesTypography.ts";

/** Locales with shipped translations. English is the fallback for missing keys. */
export type UiLocale = Exclude<UiLanguage, "system">;

// Message catalogs are grouped by domain file, one per owning feature, so
// extraction work on separate panels never edits the same dictionary.
const enCatalog = {
  ...interfaceEn,
  ...generalEn,
  ...chatEn,
  ...diffsEn,
  ...threadsEn,
  ...runtimeEn,
  ...settingsProvidersEn,
  ...settingsCodeEn,
  ...settingsSystemEn,
  ...chatUiEn,
  ...appAEn,
  ...appBEn,
  ...reviewEn,
  ...deviceEn,
  ...voiceSettingsEn,
  ...voiceChatEn,
  ...voiceSpeechEn,
  ...miscEn,
  ...navEn,
  ...typographyEn,
};

export type MessageKey = keyof typeof enCatalog;

const zhCatalog: Partial<Record<MessageKey, string>> = {
  ...interfaceZh,
  ...generalZh,
  ...chatZh,
  ...diffsZh,
  ...threadsZh,
  ...runtimeZh,
  ...settingsProvidersZh,
  ...settingsCodeZh,
  ...settingsSystemZh,
  ...chatUiZh,
  ...appAZh,
  ...appBZh,
  ...reviewZh,
  ...deviceZh,
  ...voiceSettingsZh,
  ...voiceChatZh,
  ...voiceSpeechZh,
  ...miscZh,
  ...navZh,
  ...typographyZh,
};

const jaCatalog: Partial<Record<MessageKey, string>> = {
  ...interfaceJa,
  ...generalJa,
  ...chatJa,
  ...diffsJa,
  ...threadsJa,
  ...chatUiJa,
  ...appAJa,
  ...appBJa,
  ...settingsProvidersJa,
  ...settingsCodeJa,
  ...settingsSystemJa,
  ...reviewJa,
  ...runtimeJa,
  ...navJa,
  ...deviceJa,
  ...voiceSettingsJa,
  ...voiceChatJa,
  ...voiceSpeechJa,
  ...miscJa,
  ...typographyJa,
};

export const localeMessages: Record<UiLocale, Partial<Record<MessageKey, string>>> = {
  en: enCatalog,
  "zh-Hans": zhCatalog,
  ja: jaCatalog,
};

export type TranslateParams = Record<string, string | number>;

export type TranslateFn = (key: MessageKey, params?: TranslateParams) => string;

/**
 * Resolves the "system" setting against the host locale. Japanese uses the ja
 * catalog; Chinese variants all map to the single zh-Hans catalog.
 */
export function resolveUiLocale(language: UiLanguage, systemLocale: string): UiLocale {
  if (language !== "system") {
    return language;
  }
  const languageCode = systemLocale.toLowerCase().split(/[-_]/)[0];
  if (languageCode === "ja") return "ja";
  return languageCode === "zh" ? "zh-Hans" : "en";
}

export function translateMessage(
  locale: UiLocale,
  key: MessageKey,
  params?: TranslateParams,
): string {
  const template = localeMessages[locale][key] ?? enCatalog[key];
  if (params === undefined) {
    return template;
  }
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    Object.hasOwn(params, name) ? String(params[name]) : match,
  );
}

export function createTranslator(locale: UiLocale): TranslateFn {
  return (key, params) => translateMessage(locale, key, params);
}
