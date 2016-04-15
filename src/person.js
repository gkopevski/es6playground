/**
 * Created by gkopevski on 4/15/2016.
 */
export default class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return this.name + ' ' + this.surname;
    }
}