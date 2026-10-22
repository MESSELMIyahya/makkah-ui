"use client";

import * as React from "react";

import type { RegistryPreviewLanguage } from "../../lib/registry/previews";

// Every preview card on a page shares one language choice; switching one switches all.
// The server always renders Arabic, and the stored choice applies after hydration.
const storageKey = "makkah-ui:preview-language:v1";
const defaultLanguage: RegistryPreviewLanguage = "ar";
const listeners = new Set<() => void>();

let currentLanguage: RegistryPreviewLanguage | undefined;

function readStoredLanguage(): RegistryPreviewLanguage {
  try {
    const value = window.localStorage.getItem(storageKey);

    return value === "en" || value === "ar" ? value : defaultLanguage;
  } catch {
    return defaultLanguage;
  }
}

function getSnapshot(): RegistryPreviewLanguage {
  currentLanguage ??= readStoredLanguage();

  return currentLanguage;
}

function getServerSnapshot(): RegistryPreviewLanguage {
  return defaultLanguage;
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function setPreviewLanguage(language: RegistryPreviewLanguage) {
  currentLanguage = language;

  try {
    window.localStorage.setItem(storageKey, language);
  } catch {
    // Storage can be unavailable (private mode); the in-memory choice still applies.
  }

  for (const listener of listeners) {
    listener();
  }
}

export function usePreviewLanguage(): RegistryPreviewLanguage {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
