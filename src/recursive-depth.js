const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let maxDepth = 1;
        arr.forEach(i => {
            if (Array.isArray(i)) {
                let depth =1
                depth += this.calculateDepth(i) ;
                maxDepth = depth > maxDepth ? depth : maxDepth;

            }
        });
        return maxDepth
    }
};