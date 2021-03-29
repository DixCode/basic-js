const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

    if (!Array.isArray(members)) return false;
    const filteredArr = members.filter(i => typeof (i) === 'string')


    return filteredArr.map(item => item.trim().toLowerCase()).sort().reduce((result, item) => {
        result += item[0];
        return result;
    }, "").toUpperCase()


};
