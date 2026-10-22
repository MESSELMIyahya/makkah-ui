export type ArabicFormatLocale = "ar" | "en";

export type NumberingSystem = "arab" | "latn";

export type FormatArabicNumberOptions = Intl.NumberFormatOptions & {
  digits?: NumberingSystem;
};

export type FormatHijriDateOptions = {
  locale?: ArabicFormatLocale;
  format?: "long" | "short";
};

export type FormatLocaleOptions = {
  locale?: ArabicFormatLocale;
};

const numberFormatCache = new Map<string, Intl.NumberFormat>();
const dateTimeFormatCache = new Map<string, Intl.DateTimeFormat>();

function getNumberFormat(locale: string, options: Intl.NumberFormatOptions): Intl.NumberFormat {
  const key = `${locale}|${JSON.stringify(options)}`;
  let formatter = numberFormatCache.get(key);

  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, options);
    numberFormatCache.set(key, formatter);
  }

  return formatter;
}

function getDateTimeFormat(
  locale: string,
  options: Intl.DateTimeFormatOptions,
): Intl.DateTimeFormat {
  const key = `${locale}|${JSON.stringify(options)}`;
  let formatter = dateTimeFormatCache.get(key);

  if (!formatter) {
    formatter = new Intl.DateTimeFormat(locale, options);
    dateTimeFormatCache.set(key, formatter);
  }

  return formatter;
}

function resolveLocale(locale: ArabicFormatLocale = "ar"): string {
  return locale === "ar" ? "ar-SA-u-nu-arab" : "en-SA-u-nu-latn";
}

/** Formats a number with Arabic-Indic digits by default. */
export function formatArabicNumber(value: number, options: FormatArabicNumberOptions = {}): string {
  const { digits = "arab", ...numberOptions } = options;

  return getNumberFormat(`ar-SA-u-nu-${digits}`, numberOptions).format(value);
}

const ARABIC_INDIC_ZERO = 0x0660;
const EXTENDED_ARABIC_INDIC_ZERO = 0x06f0;

/** Converts Western digits (0-9) to Arabic-Indic digits. */
export function toArabicDigits(input: string): string {
  return input.replace(/[0-9]/g, (digit) =>
    String.fromCodePoint(ARABIC_INDIC_ZERO + Number(digit)),
  );
}

/** Converts Arabic-Indic and Extended Arabic-Indic (Persian) digits to Western digits. */
export function toLatinDigits(input: string): string {
  return input.replace(/[٠-٩۰-۹]/g, (digit) => {
    const code = digit.codePointAt(0) ?? ARABIC_INDIC_ZERO;
    const zero =
      code >= EXTENDED_ARABIC_INDIC_ZERO ? EXTENDED_ARABIC_INDIC_ZERO : ARABIC_INDIC_ZERO;

    return String(code - zero);
  });
}

/** Formats a date in the Umm al-Qura Hijri calendar. */
export function formatHijriDate(date: Date, options: FormatHijriDateOptions = {}): string {
  const { locale = "ar", format = "long" } = options;
  const calendarLocale = `${locale === "ar" ? "ar-SA" : "en-SA"}-u-ca-islamic-umalqura-nu-${locale === "ar" ? "arab" : "latn"}`;

  return getDateTimeFormat(calendarLocale, {
    day: "numeric",
    month: format === "long" ? "long" : "numeric",
    year: "numeric",
  }).format(date);
}

/** Formats an amount as Saudi riyals (SAR). */
export function formatSar(amount: number, options: FormatLocaleOptions = {}): string {
  return getNumberFormat(resolveLocale(options.locale), {
    style: "currency",
    currency: "SAR",
  }).format(amount);
}

/** Formats a prayer time as hour:minute with a localized AM/PM marker. */
export function formatPrayerTime(date: Date, options: FormatLocaleOptions = {}): string {
  return getDateTimeFormat(resolveLocale(options.locale), {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}
