
export default class A {
    constructor (name, age) {
        this.name = name
    }

    get () {
        alert('调用this')
    }

    // set name (val) {
    //     this.name = val
    // }
}
