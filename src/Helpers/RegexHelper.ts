export const isNumber = new RegExp("^$|^[0-9]+$");

export const isArabic = new RegExp("^$|^[ء-ي \b0-9\b\r\n\v \" ':;,_*?><&%$#!~^()=+@.`-]+$");

export const isEnglish = new RegExp("^$|^[A-Za-z \b0-9\b\r\n\v \" ':;,-_*?><&%$#!~^()=+@`.]+$");