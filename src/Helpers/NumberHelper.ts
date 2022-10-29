export function roundHalf(num) {
    return Math.round(num * 2) / 2;
}

export function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}