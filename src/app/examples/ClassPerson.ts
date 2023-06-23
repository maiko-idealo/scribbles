class Person {
    private _id: number;
    private _name: string;

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        console.log("hello setter " + id);
        this._id = id;
    }
}

export { Person };
