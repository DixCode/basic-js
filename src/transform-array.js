const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error("Error");

    let result = [];

    arr.forEach((item, i, arr) => {
        switch (item) {
            case "--discard-next":
                break;
            case "--discard-prev":
                if (result.length && arr[i - 2] !== "--discard-next") {
                    result.pop();
                }
                break;
            case "--double-next":
                if (i !== arr.length - 1) {
                    result.push(arr[i + 1]);
                }
                break;
            case "--double-prev":
                if (i !== 0 && arr[i - 2] !== "--discard-next") {
                    result.push(arr[i - 1]);
                }
                break;
            default:
                if (arr[i - 1] !== "--discard-next") {
                    result.push(item);
                }
                break;
        }
    });

    return result;
};