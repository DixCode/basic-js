const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arr: [],
    getLength() {
        return this.arr.length
    },
    addLink(value) {
        arguments.length > 0 ? this.arr.push(`( ${String(value)} )`) : this.arr.push('( )')
        return this;

    },
    removeLink(position) {
        if (typeof position !== 'number' || position !== parseInt(position) || position <0  || position >= this.arr.length) {
            this.arr.splice(0, this.getLength())
            throw new Error('Error')
        }
        this.arr.splice(position - 1, 1);
        return this
    },
    reverseChain() {
        this.arr.reverse()
        return this
    },
    finishChain() {
        const result = this.arr.join('~~');
        this.arr.splice(0, this.getLength())
        return result

    }
};

module.exports = chainMaker;
