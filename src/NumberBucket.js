/**
 * @param {number[]} numbers
 */
export default function (numbers = []) {

    /**
     * @type {{}}
     */
    this.contents = {};

    /**
     * @param {number} number
     * @returns {string}
     */
    const toKey = function (number) {
        return "" + parseInt("" + number);
    }

    /**
     * @param {string} key
     * @returns {number}
     */
    const fromKey = function (key) {
        return parseInt(key);
    }

    /**
     * @param {number[]|number} numbers
     */
    this.add = function (numbers) {
        if (!Array.isArray(numbers)) {
            numbers = [numbers];
        }
        for (const number of numbers) {
            const key = toKey(number);
            if (!this.contents.hasOwnProperty(key)) {
                this.contents[key] = 0;
            }
            this.contents[key]++;
        }
    }

    /**
     * @param {number[]|number} numbers
     */
    this.remove = function (numbers) {
        if (!Array.isArray(numbers)) {
            numbers = [numbers];
        }
        for (const number of numbers) {
            const key = toKey(number);
            if (!this.contents.hasOwnProperty(key)) {
                continue;
            }
            this.contents[key]--;
            if (this.contents[key] === 0) {
                delete this.contents[key];
            }
        }
    }

    /**
     * @returns {number[]}
     */
    this.toArray = function () {
        const results = [];
        for (const key in this.contents) {
            for (let i = 0; i < this.contents[key]; i++) {
                results.push(fromKey(key));
            }
        }
        return results;
    }

    this.uniqueNumbers = function() {
        return Object.getOwnPropertyNames(this.contents).map(fromKey);
    }

    this.add(numbers);
};
