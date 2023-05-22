// example from udemy jest course

import { v4 } from "uuid";

type ObjectWithId = {
    id: string;
    [key: string]: any; // Indexsignature, um beliebige Eigenschaften zu ermöglichen
};

export class DataBase<T extends ObjectWithId> {
    private elements = new Array<T>();

    public async insert(arg: T) {
        arg.id = v4();
        this.elements.push(arg);
        return arg.id;
    }

    public async getBy(argName: string, argValue: string) {
        return this.elements.find((x) => x[argName] === argValue);
    }

    public async findAllBy(argName: string, argValue: string) {
        return this.elements.filter((x) => x[argName] === argValue);
    }

    public async update(id: string, argName: keyof T, argValue: any) {
        const index = this.elements.findIndex((x) => x.id === id);
        if (index !== -1) {
            const element = this.elements[index];
            element[argName] = argValue;
            this.elements[index] = element;
        }
    }

    public async delete(id: string) {
        const index = this.elements.findIndex((x) => x.id === id);
        this.elements.splice(index, 1);
    }

    public async getAllElements() {
        return this.elements;
    }
}
