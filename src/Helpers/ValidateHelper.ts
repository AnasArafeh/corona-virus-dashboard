import { isArabic, isEnglish } from "./RegexHelper";

export const validKeyPress = (e: any) => {
    if ((e.keyCode >= 37 && e.keyCode <= 40) || (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown")) {
        return false;
    }
    return true;
}


export const validInput = (input: string, locale: string) => {
    if (locale === "en" && isEnglish.test(input)) {
        return true;
    }
    else if (locale === "ar" && isArabic.test(input)) {
        return true;
    } else {
        return false;
    }
}