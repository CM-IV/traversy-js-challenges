function formatPhoneNumber(numArr) {
    const areaCodeArr = numArr.slice(0, 3);
    const exchangeCodeArr = numArr.slice(3, 6);
    const stationCodeArr = numArr.slice(6, 10);

    const areaCodeStr = areaCodeArr.join("");
    const exchangeCodeStr = exchangeCodeArr.join("");
    const stationCodeStr = stationCodeArr.join("");

    const result = `(${areaCodeStr}) ${exchangeCodeStr}-${stationCodeStr}`;

    return result;
}

export default formatPhoneNumber;
