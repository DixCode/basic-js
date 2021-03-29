const CustomError = require("../extensions/custom-error");
const seasons = {
    autumn: [8, 9, 10],
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7]
}

module.exports = function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    try {
        date.getTime()
    } catch {
        throw new Error()
    }
    const month = date.getMonth();
    for (const season in seasons) {
        const months = seasons[season];
        if (months.includes(month)) return season
    }
};
