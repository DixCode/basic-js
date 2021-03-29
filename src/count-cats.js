const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let result = 0;
    let newMatrix=matrix.flat();
    newMatrix.forEach(item => {
        if (item==="^^"){
            result++
        }
            })
    return result;
};
