export default class VanillaTester {

    constructor(config) {
        this.options = {
            commonStyles: [
                'font-size: 1.4rem;',
                'line-height: 1.5;'
            ],
            colorPass: [
                'color: #33d275;',
            ],
            colorFail: [
                'color: #ff6b79;'
            ],
            iconPass: '\u2714',
            iconFail: '\u2718'
        }

        if (typeof config === 'object') {
            this.options = { ...this.options, ...config };
        }

        this.stylesPass = `${this.options.commonStyles.join('')} ${this.options.colorPass}`;
        this.stylesFail = `${this.options.commonStyles.join('')} ${this.options.colorFail}`;
    }

    /**
     * The test method. Runs all the tests
     *
     * @param {string} desc Description or message for the test
     * @param {function} fn Callback function for the test
     */
    test(desc, fun) {
        try {
            fun();
            console.log(`%c ${this.options.iconPass} ${desc}`, `${this.stylesPass}`);
        } catch(err)  {
            console.log(`%c ${this.options.iconFail} ${desc}`, `${this.stylesFail}`);
            console.error(err);
        }
    }

    /**
     * Asserts the given condition throws an error if the condition is false
     *
     * @param {boolean} isTrue The given parameter will either return true or false
     */
    assert(isTrue) {
        if (!isTrue) throw new Error();
    }

}
