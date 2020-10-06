export class MyClass {
    /**
     * hogehoge
     * @param {number} x hogehoge
     * @param {number} y hogehoge
     * @param {string} s hogehoge
     */
    constructor(x, y, s) {
        this._x = x
        this._y = y
        this._s = s
    }

    /**
     * hogehoge
     * @return {number} hogehoge
     */
    getX() {
        return this._x;
    }
    
    /**
     * hogehoge
     * @return {number} hogehoge
     */
    getY() {
        return this._y;
    }

    /**
     * hogehoge
     * @return {string} hogehoge
     */
    getS() {
        return this._s;
    }

    /**
     * hoge
     * @param {number} n hogehoge
     * @param {number} [n2=123] hogehoge
     * @return {{
     * x: number,
     * y: number,
     * s: string,
     * n: number,
     * n2: number}
     * | null} hogehoge
     */
    getJSON(n, n2 = 123) {
        if(n !== 999) {
            return {x: this._x, y: this._y, s: this._s, n, n2}
        }
        return null
    }
}
//module.exports = MyClass // for jest